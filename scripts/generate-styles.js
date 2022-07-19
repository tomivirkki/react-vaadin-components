/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

import { color, colorBase } from "@vaadin/vaadin-lumo-styles/color";
import { spacing } from "@vaadin/vaadin-lumo-styles/spacing";
import { sizing } from "@vaadin/vaadin-lumo-styles/sizing";
import { style } from "@vaadin/vaadin-lumo-styles/style";
import { font, typography } from "@vaadin/vaadin-lumo-styles/typography";

import { accessibility } from "@vaadin/vaadin-lumo-styles/utilities/accessibility";
import { background } from "@vaadin/vaadin-lumo-styles/utilities/background";
import { border } from "@vaadin/vaadin-lumo-styles/utilities/border";
import { flexboxAndGrid } from "@vaadin/vaadin-lumo-styles/utilities/flexbox-grid";
import { layout } from "@vaadin/vaadin-lumo-styles/utilities/layout";
import { shadows } from "@vaadin/vaadin-lumo-styles/utilities/shadows";
import { sizing as utilitySizing } from "@vaadin/vaadin-lumo-styles/utilities/sizing";
import { spacing as utilitySpacing } from "@vaadin/vaadin-lumo-styles/utilities/spacing";
import { typography as utilityTypography } from "@vaadin/vaadin-lumo-styles/utilities/typography";

import { userColors } from "@vaadin/vaadin-lumo-styles/user-colors";
import "@vaadin/vaadin-lumo-styles/font-icons";
import "@vaadin/avatar/src/vaadin-avatar-icons";

const importUrl = import.meta.url;
const currentFile = importUrl.substring(importUrl.indexOf(":") + 1);
const currentDir = path.dirname(currentFile);
const cssDir = path.resolve(currentDir, "../src/css");

if (fs.existsSync(cssDir)) {
  fs.rmdirSync(cssDir, { recursive: true });
}

fs.mkdirSync(cssDir);

function writeFile(filePath, content) {
  // Write the file
  fs.writeFileSync(filePath, content);
  // Run prettier
  execSync(`npx prettier ${filePath} --write`);
}

it("generate lumo", () => {
  const lumoModules = {
    color,
    colorBase,
    spacing,
    sizing,
    style,
    font,
    typography,
    userColors,
  };

  const GENERATED = "/* Generated file. Do not edit. */\n\n";

  let lumo = "";

  fs.mkdirSync(path.resolve(cssDir, "lumo"));

  // Generate css from exported styles
  Object.entries(lumoModules).forEach(([moduleName, module]) => {
    const fileName = `${moduleName}.css`;
    const filePath = path.resolve(cssDir, "lumo", fileName);
    const fileContent = module.cssText.replace(/:host/g, "html");
    writeFile(filePath, GENERATED + fileContent);

    lumo += `@import url("./lumo/${fileName}");\n`;
  });

  // Generate css from styles added to document
  const styles = document.head.querySelectorAll("style");

  const modules = {
    avatar: "vaadin-avatar-icons",
    lumoIcons: "lumo-icons",
  };

  Object.entries(modules).forEach(([moduleName, markerString]) => {
    const matchingStyle = [...styles].find((s) =>
      s.textContent.includes(markerString)
    );
    if (matchingStyle) {
      const fileName = `${moduleName}.css`;
      const filePath = path.resolve(cssDir, "lumo", fileName);
      let fileContent = matchingStyle.textContent.replace(/:host/g, "html");

      if (markerString === modules.avatar) {
        // Exception for https://github.com/vaadin/web-components/pull/4058
        fileContent += `
        
          html {
            --vaadin-avatar-size: var(--lumo-size-m);
          }
        `;
      }

      writeFile(filePath, GENERATED + fileContent);

      lumo += `@import url("./lumo/${fileName}");\n`;
    }
  });

  const lumoFilePath = path.resolve(cssDir, `lumo.css`);
  fs.writeFileSync(lumoFilePath, GENERATED + lumo);
});

it("generate utility", () => {
  const utlilityModules = {
    accessibility,
    background,
    border,
    shadows,
    flexboxAndGrid,
    layout,
    sizing: utilitySizing,
    spacing: utilitySpacing,
    typography: utilityTypography,
  };

  const GENERATED = "/* Generated file. Do not edit. */\n\n";

  let utility = "";

  fs.mkdirSync(path.resolve(cssDir, "utility"));

  // Generate css from exported styles
  Object.entries(utlilityModules).forEach(([moduleName, module]) => {
    const fileName = `${moduleName}.css`;
    const filePath = path.resolve(cssDir, "utility", fileName);
    const fileContent = module.cssText.replace(/:host/g, "html");

    writeFile(filePath, GENERATED + fileContent);

    utility += `@import url("./utility/${fileName}");\n`;
  });

  const utilityFilePath = path.resolve(cssDir, `utility.css`);
  writeFile(utilityFilePath, GENERATED + utility);
});
