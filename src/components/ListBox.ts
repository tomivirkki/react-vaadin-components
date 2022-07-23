// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type * as ListBoxElement from "@vaadin/list-box/vaadin-list-box";
import { createVaadinComponent, eventMapper } from "../create-component";

type ListBoxClass = ListBoxElement.ListBox;

type ListBoxEventMap = ListBoxElement.ListBoxEventMap;

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

const getListBoxPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: flex;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [part='items'] {\n          height: 100%;\n          width: 100%;\n          overflow-y: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n      </style>\n      <div part="items">\n        <slot></slot>\n      </div>\n    <style>\n    :host {\n      -webkit-tap-highlight-color: transparent;\n      --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);\n    }\n\n    /* Dividers */\n    [part='items'] ::slotted(hr) {\n      height: 1px;\n      border: 0;\n      padding: 0;\n      margin: var(--lumo-space-s) var(--lumo-border-radius-m);\n      background-color: var(--lumo-contrast-10pct);\n    }\n  </style>`,
});

export const ListBox = createVaadinComponent<
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

export { ListBoxElement };
