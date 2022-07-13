// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  ListBox as ListBoxClass,
  ListBoxEventMap,
} from "@vaadin/list-box/vaadin-list-box";

const ListBoxEventMapper = eventMapper<ListBoxEventMap>();
const ListBoxEvents = {
  ...ListBoxEventMapper("onItemsChanged", "items-changed"),
  ...ListBoxEventMapper("onSelectedChanged", "selected-changed"),
  ...ListBoxEventMapper("onSelectedValuesChanged", "selected-values-changed"),
};

const ListBoxProperties = {
  selected: "",
  orientation: "",
  items: "",
  focused: "",
  version: "",
};

const getListBoxPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: flex;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [part='items'] {\n          height: 100%;\n          width: 100%;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n      </style>\n      <div part="items">\n        <slot></slot>\n      </div>\n    <style>\n    :host {\n      -webkit-tap-highlight-color: transparent;\n      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);\n    }\n\n    /* Dividers */\n    [part='items'] ::slotted(hr) {\n      height: 1px;\n      border: 0;\n      padding: 0;\n      margin: var(--lumo-space-s) var(--lumo-border-radius-m);\n      background-color: var(--lumo-contrast-10pct);\n    }\n  </style>`,
  };
};

export const ListBox = createPolymerComponent<
  ListBoxClass,
  typeof ListBoxEvents
>(
  "vaadin-list-box",
  ListBoxProperties,
  ListBoxEvents,
  () => import("@vaadin/list-box/vaadin-list-box"),
  "ListBox",
  undefined,
  getListBoxPreRenderConfig
);
