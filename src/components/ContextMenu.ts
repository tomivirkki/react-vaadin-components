// Generated file. Do not edit.

import React from "react";

import type * as ContextMenuElement from "@vaadin/context-menu/vaadin-context-menu";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type ContextMenuClass = ContextMenuElement.ContextMenu;

type ContextMenuEventMap = ContextMenuElement.ContextMenuEventMap;

const ContextMenuEventMapper = eventMapper<ContextMenuEventMap>();
const ContextMenuEvents = {
  ...ContextMenuEventMapper("onOpenedChanged", "opened-changed"),
  ...ContextMenuEventMapper("onItemSelected", "item-selected"),
};

const ContextMenuProperties = {
  selector: "",
  opened: "",
  openOn: "",
  listenOn: "",
  closeOn: "",
  renderer: "",
  version: "",
  items: "",
};

const getContextMenuPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n\n      <slot id="slot"></slot>\n\n      \n    `,
});

export const ContextMenu = createVaadinComponent<
  ContextMenuClass,
  typeof ContextMenuEvents
>(
  "vaadin-context-menu",
  ContextMenuProperties,
  ContextMenuEvents,
  () => import("@vaadin/context-menu/vaadin-context-menu.js"),
  "ContextMenu",
  undefined,
  getContextMenuPreRenderConfig
);

export { ContextMenuElement };
