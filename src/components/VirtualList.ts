// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { VirtualList as VirtualListClass } from "@vaadin/virtual-list/vaadin-virtual-list";

const VirtualListEvents = {};

const VirtualListProperties = {
  firstVisibleIndex: "",
  lastVisibleIndex: "",
  renderer: "",
  items: "",
  version: "",
};

const getVirtualListPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n          height: 400px;\n          overflow: auto;\n          flex: auto;\n          align-self: stretch;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host(:not([grid])) #items > ::slotted(*) {\n          width: 100%;\n        }\n      </style>\n\n      <div id="items" style="position: relative;">\n        <slot></slot>\n      </div>\n    <style></style>`,
  };
};

export const VirtualList = createPolymerComponent<
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
