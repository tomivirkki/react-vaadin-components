import { execSync, exec } from "child_process";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { renderers, preRenderConfigs } from "./components-config.js";

const componentsPath = process.env.COMPONENTS_PATH;

if (!componentsPath) {
  console.error(
    "Environment variable COMPONENTS_PATH should point to a local web-components/packages"
  );
  process.exit(1);
}

const server = exec(`npx wds --node-resolve -r ${componentsPath}`);
process.on("exit", () => server.kill());

async function getShadowRootContent(importPath, elementHTML) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:8000/");
  await page.setContent(
    `
    <script type="module">
      import('${importPath}');
    </script>

    ${elementHTML}
  `,
    { timeout: 3000, waitUntil: "networkidle2" }
  );

  // await page.screenshot({path: 'screenshot.png'});

  const result = await page.evaluate(() => {
    const element = document.querySelector("#host");
    return element.shadowRoot?.getInnerHTML() || "";
  });

  await browser.close();
  return result;
}

const packages = fs.readdirSync(componentsPath);

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const importUrl = import.meta.url;
const indexOutDir = path.resolve(
  importUrl.substring(importUrl.indexOf(":") + 1),
  "../../src"
);
const componentsOutDir = path.resolve(indexOutDir, "components");

if (!fs.existsSync(componentsOutDir)) {
  fs.mkdirSync(componentsOutDir);
}

let indexContent = "";

const excludedPackages = [
  "component-base",
  "field-base",
  "field-highlighter",
  ".DS_Store",
  "icons",
  "input-container",
  "lit-renderer",
  "polymer-legacy-adapter",
];

const excludePro = true;
const isPro = (packageName) => {
  // Read the package.json from the package directory
  const packageJsonPath = path.resolve(
    componentsPath,
    packageName,
    "package.json"
  );
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
  return !packageJson.license.includes("Apache");
};

async function generateComponentForPackage(packageName) {
  const outFileName = packageName.split("-").map(capitalize).join("");
  let usesPropType = false;

  indexContent += `export * from './components/${outFileName}';\n`;
  fs.writeFileSync(path.resolve(indexOutDir, "index.ts"), indexContent);

  let outFileImports =
    'import { createPolymerComponent, eventMapper } from "../create-component";\n';
  let outFileComponents = "";

  const packagePath = path.resolve(componentsPath, packageName);
  const packageSrcPath = path.resolve(packagePath, "src");

  // TODO: Cleanup!
  let result = execSync(`npx web-component-analyzer --format json`, {
    cwd: packageSrcPath,
  }).toString();
  result = result.substring(result.indexOf("files...") + "files...".length);
  result = result
    .trim()
    .split(/{\n.*"version": "experimental"/)
    .join(`,{"version": "experimental"`);
  if (result.startsWith(",")) {
    result = result.substring(1);
  }
  result = `[${result}]`;

  const rootLevelComponents = fs
    .readdirSync(packagePath)
    .filter((fileName) => fileName.endsWith(".d.ts"))
    .map((fileName) => fileName.substring(0, fileName.length - ".d.ts".length));

  const components = JSON.parse(result)
    .filter((component, idx, array) => {
      // Remove duplicates
      return (
        array.findIndex((c) => c.tags[0].name === component.tags[0].name) ===
        idx
      );
    })
    .filter((component) => {
      const elementName = component.tags[0].name;
      return rootLevelComponents.includes(elementName);
    });

  for (const component of components) {
    const tag = component.tags[0];
    const elementName = tag.name;
    const simpleName = elementName.substring(elementName.indexOf("-") + 1);
    const exportName = simpleName.split("-").map(capitalize).join("");
    const hasEvents = !!tag.events;

    const eventMapName = `${exportName}EventMap`;
    const useGenricEvents = fs
      .readFileSync(path.resolve(packageSrcPath, elementName + ".d.ts"), "utf8")
      .includes(`${eventMapName}<`);
    const genericsSuffix = useGenricEvents ? "<unknown>" : "";

    console.log(`Processing ${packageName}: ${exportName}`);

    outFileImports += `
            import type { ${exportName} as ${exportName}Class${
      hasEvents ? ", " + eventMapName : ""
    } } from "@vaadin/${packageName}/${elementName}";
        `;

    const elementRenderers = Object.entries(renderers).find(([key]) =>
      new RegExp(key).test(elementName)
    )?.[1];

    const rendererAPINames = elementRenderers
      ? [
          ...Object.keys(elementRenderers.components || {}),
          ...Object.keys(elementRenderers.componentRenderers || {}),
        ]
      : [];

    const rendererFunctionNames = elementRenderers
      ? [
          elementRenderers.childRenderer,
          ...Object.values(elementRenderers.components || {}),
          ...Object.values(elementRenderers.componentRenderers || {}),
        ].filter((n) => n)
      : [];

    if (elementRenderers?.componentRenderers) {
      usesPropType = true;
    }

    const extendedClassType = elementRenderers
      ? `
        type ${exportName}ClassExtended = Omit<${exportName}Class, ${rendererFunctionNames
          .map((name) => `'${name}'`)
          .join("|")}> & {
          ${Object.keys(elementRenderers?.components || {})
            .map((api) => `${api}: React.ReactNode;`)
            .join("\n")}
          ${Object.keys(elementRenderers?.componentRenderers || {})
            .map(
              (api) =>
                `${api}: (model: Parameters<Exclude<PropType<${exportName}Class, '${elementRenderers?.componentRenderers[api]}'>, undefined | null>>[2]) => React.ReactNode;`
            )
            .join("\n")}
        };
      `
      : "";

    let preRenderConfig = {...(preRenderConfigs[elementName] || {})};
    if (!("shadowDomContent" in preRenderConfig)) {
      const shadowDomContent = await getShadowRootContent(
        `./${packageName}/${elementName}.js`,
        `<${elementName} id="host"></${elementName}>`
      );
      preRenderConfig.shadowDomContent = shadowDomContent;
    }

    if (preRenderConfig.shadowDomContent && preRenderConfig.styles) {
      // Include additional styles in the shadowDomContent
      preRenderConfig.shadowDomContent = `<style>${preRenderConfig.styles}</style>${preRenderConfig.shadowDomContent}`;
    }

    outFileComponents += `
        ${
          hasEvents
            ? `
        const ${exportName}EventMapper = eventMapper<${
                eventMapName + genericsSuffix
              }>();
        const ${exportName}Events = {
            ${
              tag.events
                ? tag.events
                    .map((event) => {
                      const eventName = event.name;
                      const apiName =
                        "on" + eventName.split("-").map(capitalize).join("");
                      return `...${exportName}EventMapper("${apiName}", "${eventName}")`;
                    })
                    .join(",")
                : ""
            }
        };
        `
            : `
        const ${exportName}Events = {};
        `
        }

        const ${exportName}Properties = {
            ${
              tag.properties
                ? tag.properties
                    .concat(rendererAPINames.map((name) => ({ name })))
                    .map((property) => {
                      return `${property.name}: ''`;
                    })
                    .join(",\n")
                : ""
            }
        };

        ${extendedClassType}

        const get${exportName}PreRenderConfig = (props: {[key: string]: any}) => {
          return {
            hostProperties: ${JSON.stringify(
              preRenderConfig.hostProperties || {}
            ).replace(/"/g, "")},
            children: ${JSON.stringify(preRenderConfig.children || []).replace(
              /"/g,
              ""
            )},
            shadowDomContent: ${
              `\`${preRenderConfig.shadowDomContent
                .replace(/\\/g, "\\\\")
                .replace(/\n/g, "\\n")
                .replace(/\`/g, "\\`")}\`` || '""'
            },
          }
        }

        export const ${exportName} = createPolymerComponent<${exportName}Class${
      extendedClassType ? "Extended" : ""
    }, typeof ${exportName}Events>(
        "${elementName}",
        ${exportName}Properties,
        ${exportName}Events,
        () => import("@vaadin/${packageName}/${elementName}"),
        "${exportName}",
        ${elementRenderers ? JSON.stringify(elementRenderers) : "undefined"},
        get${exportName}PreRenderConfig
        );
        `;

    // Exceptions
    if (elementName === "vaadin-accordion-panel") {
      // Accordion panel
      outFileImports = outFileImports.split("AccordionPanelEventMap").join("");
      outFileImports +=
        '\nimport type { DetailsEventMap as AccordionPanelEventMap} from "@vaadin/details";';
    }
  }

  const outFileContent = `// Generated file. Do not edit.
        ${
          usesPropType
            ? "type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];"
            : ""
        }
        ${outFileImports}
        ${outFileComponents}
    `;

  const filePath = path.resolve(componentsOutDir, `${outFileName}.ts`);
  // Write the file
  fs.writeFileSync(filePath, outFileContent);
  // Run prettier
  execSync(`npx prettier ${filePath} --write`);
}

async function generateComponentsForPackages() {
  const filteredPackaged = packages.filter((packageName) => {
    return (
      // Exclude legacy packages
      !packageName.startsWith("vaadin") &&
      // Explicit excludes
      !excludedPackages.includes(packageName) &&
      // Exclude pro
      (!excludePro || !isPro(packageName))
    );
  });

  for (const packageName of filteredPackaged) {
    await generateComponentForPackage(packageName);
  }

  process.exit(0);
}

generateComponentsForPackages();
