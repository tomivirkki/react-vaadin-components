import fs from "fs";
import path from "path";
import { execSync } from "child_process";

import { color, colorBase } from "@vaadin/vaadin-lumo-styles/color.js";
import { spacing } from "@vaadin/vaadin-lumo-styles/spacing.js";
import { sizing } from "@vaadin/vaadin-lumo-styles/sizing.js";
import { style } from "@vaadin/vaadin-lumo-styles/style.js";
import { font, typography } from "@vaadin/vaadin-lumo-styles/typography.js";
import { userColors } from "@vaadin/vaadin-lumo-styles/user-colors.js";
import "@vaadin/vaadin-lumo-styles/font-icons.js";
import "@vaadin/avatar/src/vaadin-avatar-icons.js";

const importUrl = import.meta.url;
const currentFile = importUrl.substring(importUrl.indexOf(":") + 1);
const currentDir = path.dirname(currentFile);
const cssDir = path.resolve(currentDir, "../src/css");

it("generate styles", () => {
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

  // Generate css from exported styles
  Object.entries(lumoModules).forEach(([moduleName, module]) => {
    const fileName = `${moduleName}.css`;
    const filePath = path.resolve(cssDir, fileName);
    const fileContent = module.cssText.replace(/:host/g, "html");
    fs.writeFileSync(filePath, GENERATED + fileContent);
    // Run prettier
    execSync(`npx prettier ${filePath} --write`);

    lumo += `@import url("./${fileName}");\n`;
  });

  // Generate css from styles added to document
  const styles = document.head.querySelectorAll("style");

  const modules = {
    avatar: "vaadin-avatar-icons",
    lumoIcons: "lumo-icons",
  };

  Object.entries(modules).forEach(([moduleName, markerString]) => {
    const style = [...styles].find((s) => s.textContent.includes(markerString));
    if (style) {
      const fileName = `${moduleName}.css`;
      const filePath = path.resolve(cssDir, fileName);
      let fileContent = style.textContent.replace(/:host/g, "html");

      if (markerString === modules.avatar) {
        // Exception for https://github.com/vaadin/web-components/pull/4058
        fileContent += `
        
          html {
            --vaadin-avatar-size: var(--lumo-size-m);
          }
        `;
      }

      fs.writeFileSync(filePath, GENERATED + fileContent);
      // Run prettier
      execSync(`npx prettier ${filePath} --write`);

      lumo += `@import url("./${fileName}");\n`;
    }
  });

  const lumoFilePath = path.resolve(cssDir, `lumo.css`);
  fs.writeFileSync(lumoFilePath, GENERATED + lumo);
});
