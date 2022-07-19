// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type { VirtualList as VirtualListClass } from "@vaadin/virtual-list/vaadin-virtual-list";
import { createVaadinComponent, eventMapper } from "../create-component";

const VirtualListEvents = {};

const VirtualListProperties = {
  firstVisibleIndex: "",
  lastVisibleIndex: "",
  renderer: "",
  items: "",
  version: "",
};

const getVirtualListPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n          height: 400px;\n          overflow: auto;\n          flex: auto;\n          align-self: stretch;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host(:not([grid])) #items > ::slotted(*) {\n          width: 100%;\n        }\n      </style>\n\n      <div id="items" style="position: relative;">\n        <slot></slot>\n      </div>\n    <style></style>`,
});

export const VirtualList = createVaadinComponent<
  VirtualListClass,
  typeof VirtualListEvents
>(
  "vaadin-virtual-list",
  VirtualListProperties,
  VirtualListEvents,
  () => import("@vaadin/virtual-list/vaadin-virtual-list"),
  "VirtualList",
  undefined,
  getVirtualListPreRenderConfig
);