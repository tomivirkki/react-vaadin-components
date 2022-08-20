/* eslint-disable import/extensions */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { execSync, exec } from "child_process";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { componentsConfig, packagesConfig } from "./components-config.js";

const GENERATED_FILE_HEADER = "// Generated file. Do not edit.";

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

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPackages(componentsPath) {
  const excludePro = true;

  const isPro = (packageName) => {
    // Read the package.json from the package directory
    const packageJsonPath = path.resolve(
      componentsPath,
      packageName,
      "package.json"
    );
    if (!fs.existsSync(packageJsonPath)) {
      return false;
    }
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
    return !packageJson.license.includes("Apache");
  };

  const excludedPackages = [
    "component-base",
    "field-base",
    "field-highlighter",
    ".DS_Store",
    "icons",
    "input-container",
    "lit-renderer",
    "polymer-legacy-adapter",
    // TODO: Remove once mscb is in vaadin-core
    "multi-select-combo-box",
  ];

  return fs.readdirSync(componentsPath).filter(
    (packageName) =>
      // Exclude legacy packages
      !packageName.startsWith("vaadin") &&
      // Explicit excludes
      !excludedPackages.includes(packageName) &&
      // Exclude pro
      (!excludePro || !isPro(packageName))
  );
}

function getComponentsFromPackage(packagePath) {
  // Run the wca CLI and get the output as a string
  const output = execSync(`npx web-component-analyzer --dry --format json`, {
    cwd: packagePath,
  }).toString();

  // Marker for the start of the JSON
  const startIndicator = output.includes("files...") ? "files..." : "file...";

  // Get the JSON from the output
  const componentsJSON = `[${output
    .split(startIndicator)[1]
    .trim()
    // Make sure the components are separated by a comma in the JSON
    .split(/{\n.*"version": "experimental"/)
    .join(`,{"version": "experimental"`)
    // If the content starts with a comma, remove it
    .replace(/^,/, "")}]`;

  // The analysis may include components that are meant for private use.
  // Get a list of root level / public components.
  const rootLevelComponents = fs
    .readdirSync(packagePath)
    .filter((fileName) => fileName.endsWith(".d.ts"))
    .map((fileName) => fileName.substring(0, fileName.length - ".d.ts".length));

  return (
    JSON.parse(componentsJSON)
      // Filter out duplicates
      .filter(
        (component, idx, array) =>
          array.findIndex((c) => c.tags[0].name === component.tags[0].name) ===
          idx
      )
      // Filter out non-root level components
      .filter((component) => {
        const elementName = component.tags[0].name;
        return rootLevelComponents.includes(elementName);
      })
  );
}

function writeFile(filePath, content) {
  // Write the file
  fs.writeFileSync(filePath, content);
  // Run eslint
  execSync(`npx eslint ${filePath} --fix`);
  // Run prettier
  execSync(`npx prettier ${filePath} --write`);
}

const importUrl = import.meta.url;
const currentDir = path.resolve(
  importUrl.substring(importUrl.indexOf(":") + 1),
  ".."
);

const createComponentPath = path.resolve(currentDir, "../src/create-component");

async function generateComponentForPackage(
  componentsPath,
  packageName,
  importPath,
  componentsOutPath,
  outFileName
) {
  let usesPropType = false;

  const createComponentRelativePath = path.relative(
    componentsOutPath,
    createComponentPath
  );

  let outFileImports = `import { createVaadinComponent, eventMapper } from "${createComponentRelativePath}.js";\n`;
  let outFileComponents = "";

  const packagePath = path.resolve(componentsPath, packageName);
  const packageSrcPath = path.resolve(packagePath, "src");

  const components = getComponentsFromPackage(packagePath);

  for (const component of components) {
    const tag = component.tags[0];
    const elementName = tag.name;
    const exportName = elementName
      .split("vaadin-")
      .pop()
      .split("-")
      .map(capitalize)
      .join("");
    const hasEvents = !!tag.events;

    const eventMapName = `${exportName}EventMap`;
    const useGenricEvents = fs
      .readFileSync(path.resolve(packageSrcPath, `${elementName}.d.ts`), "utf8")
      .includes(`${eventMapName}<`);
    const genericsSuffix = useGenricEvents ? "<unknown>" : "";

    console.log(`Processing ${packageName}: ${exportName}`);

    const elementExportName = `${exportName}Element`;

    outFileImports += `import type * as ${elementExportName} from "${importPath}/${packageName}/${elementName}";`;

    const elementConfig = componentsConfig[elementName];
    const elementRenderers = elementConfig?.renderers;

    const rendererAPINames = elementRenderers
      ? [...Object.keys(elementRenderers.itemRenderers || {})]
      : [];

    const rendererFunctionNames = elementRenderers
      ? [
          ...Object.values(elementRenderers.components || {}),
          ...Object.values(elementRenderers.itemRenderers || {}),
        ].filter((n) => n)
      : [];

    if (elementRenderers?.itemRenderers) {
      usesPropType = true;
    }

    let extendedClassType = elementRenderers
      ? `
        type ${exportName}ClassExtended = Omit<${exportName}Class, ${rendererFunctionNames
          .map((name) => `'${name}'`)
          .join("|")}> & {
          ${Object.keys(elementRenderers?.itemRenderers || {})
            .map(
              (api) =>
                `${api}: (model: Parameters<Exclude<PropType<${exportName}Class, '${elementRenderers?.itemRenderers[api]}'>, undefined | null>>[2]) => React.ReactNode;`
            )
            .join("\n")}
        };
      `
      : "";

    // Exceptions
    if (elementName === "vaadin-form-item") {
      // Form item
      extendedClassType = `
        type ${exportName}ClassExtended = ${exportName}Class & {
          colspan?: string;
        };
      `;
    }

    const preRenderConfig = {
      ...(elementConfig?.preRenderConfig || {}),
    };

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

      type ${exportName}Class = ${elementExportName}.${exportName};

        ${
          hasEvents
            ? `

            type ${eventMapName} = ${elementExportName}.${eventMapName}${genericsSuffix};

        const ${exportName}EventMapper = eventMapper<${eventMapName}>();
        const ${exportName}Events = {
            ${
              tag.events
                ? tag.events
                    .map((event) => {
                      const eventName = event.name;
                      const apiName = `on${eventName
                        .split("-")
                        .map(capitalize)
                        .join("")}`;
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
                    .map((property) => `${property.name}: ''`)
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
                .replace(/`/g, "\\`")}\`` || '""'
            },
            ${
              preRenderConfig.postRender
                ? `postRender: ${preRenderConfig.postRender},`
                : ""
            }
          }
        }

        export const ${exportName} = createVaadinComponent<${exportName}Class${
      extendedClassType ? "Extended" : ""
    }, typeof ${exportName}Events>(
        "${elementName}",
        ${exportName}Properties,
        ${exportName}Events,
        () => import("${importPath}/${packageName}/${elementName}"),
        "${exportName}",
        ${elementRenderers ? JSON.stringify(elementRenderers) : "undefined"},
        get${exportName}PreRenderConfig
        );

        export { ${elementExportName} };
        `;

    // Exceptions
    if (elementName === "vaadin-accordion-panel") {
      // Accordion panel
      outFileImports +=
        '\nimport type * as DetailsElement from "@vaadin/details";';

      outFileComponents = outFileComponents.replace(
        "AccordionPanelElement.AccordionPanelEventMap",
        "DetailsElement.DetailsEventMap"
      );
    }
  }

  let outFileContent = `${GENERATED_FILE_HEADER}
        /* eslint-disable import/prefer-default-export */
        /* eslint-disable import/no-extraneous-dependencies */
        /* eslint-disable @typescript-eslint/no-unused-vars */
        /* eslint-disable import/no-unresolved */

        import React from "react";

        ${
          usesPropType
            ? "type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];"
            : ""
        }
        ${outFileImports}
        ${outFileComponents}
    `;

  const packageConfig = packagesConfig[packageName];

  if (packageConfig?.componentFileContent) {
    // The package's output file is already defined in the config. Use it for the final output.
    outFileContent = `${GENERATED_FILE_HEADER}\n${packageConfig.componentFileContent}`;
  }

  if (packageConfig?.componentFileAdditionalContent) {
    // The config has additional content to be added to the output file.
    outFileContent += packageConfig.componentFileAdditionalContent;
  }

  const filePath = path.resolve(componentsOutPath, `${outFileName}.ts`);

  writeFile(filePath, outFileContent);
}

async function generateComponents(
  componentsPath,
  componentsOutPath,
  importPath
) {
  // Start up Web Dev Server
  const server = exec(`npx wds --node-resolve -r ${componentsPath}`);
  process.on("exit", () => server.kill());

  if (!fs.existsSync(componentsOutPath)) {
    fs.mkdirSync(componentsOutPath);
  }

  const indexOutPath = path.resolve(componentsOutPath, "..");
  let indexContent = "/* eslint-disable import/no-unresolved */\n";

  for (const packageName of getPackages(componentsPath)) {
    const outFileName = packageName.split("-").map(capitalize).join("");

    // Add the export to the index file
    indexContent += `export * from './components/${outFileName}.js';\n`;

    // Generate the component
    await generateComponentForPackage(
      componentsPath,
      packageName,
      importPath,
      componentsOutPath,
      outFileName
    );
  }

  writeFile(path.resolve(indexOutPath, "index.ts"), indexContent);

  server.kill();
}

async function generateStyles() {
  execSync(
    "NODE_OPTIONS=--experimental-vm-modules npx jest --rootDir ./scripts --testRegex generate-styles.js --coverage false"
  );
}

async function run() {
  // Generate test components
  const testComponentsPath = path.resolve(currentDir, "../test/web-components");
  const testComponentsOutPath = path.resolve(currentDir, "../test/components");

  await generateComponents(
    testComponentsPath,
    testComponentsOutPath,
    "../web-components"
  );

  // Generate Vaadin components
  const vaadinComponentsOutPath = path.resolve(currentDir, "../src/components");

  // Read the version of @vaadin/vaadin-core from package.json
  const vaadinComponentsVersion = JSON.parse(
    fs.readFileSync(path.resolve(currentDir, "../package.json"))
  ).dependencies["@vaadin/vaadin-core"];

  const vaadinComponentsPath = path.resolve(
    currentDir,
    "./tmp/web-components/packages"
  );
  const vaadinComponentsParentPath = path.resolve(
    vaadinComponentsPath,
    "../.."
  );

  if (!fs.existsSync(vaadinComponentsPath)) {
    // Clone the @vaadin/web-components repo to a temporary directory
    console.log(
      `Cloning @vaadin/web-components@v${vaadinComponentsVersion} to a temporary directory...`
    );

    fs.mkdirSync(vaadinComponentsParentPath, { recursive: true });

    execSync(
      `git clone --depth 1 --branch v${vaadinComponentsVersion} https://github.com/vaadin/web-components.git`,
      { cwd: vaadinComponentsParentPath, stdio: "ignore" }
    );
  }

  await generateComponents(
    vaadinComponentsPath,
    vaadinComponentsOutPath,
    "@vaadin"
  );

  if (fs.existsSync(vaadinComponentsPath)) {
    // Remove the temporary web-compoenents directory
    fs.rmdirSync(vaadinComponentsParentPath, { recursive: true });
  }

  await generateStyles();

  process.exit(0);
}

run();
