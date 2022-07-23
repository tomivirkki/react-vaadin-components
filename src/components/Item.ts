// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type * as ItemElement from "@vaadin/item/vaadin-item";
import { createVaadinComponent, eventMapper } from "../create-component";

type ItemClass = ItemElement.Item;

const ItemEvents = {};

const ItemProperties = {
  value: "",
  selected: "",
  disabled: "",
};

const getItemPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n      <span part="checkmark" aria-hidden="true"></span>\n      <div part="content">\n        <slot></slot>\n      </div>\n    <style>\n  :host {\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    line-height: var(--lumo-line-height-xs);\n    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em\n      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));\n    min-height: var(--lumo-size-m);\n    outline: none;\n    border-radius: var(--lumo-border-radius-m);\n    cursor: var(--lumo-clickable-cursor);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n  }\n\n  /* Checkmark */\n  [part='checkmark']::before {\n    display: var(--_lumo-item-selected-icon-display, none);\n    content: var(--lumo-icons-checkmark);\n    font-family: lumo-icons;\n    font-size: var(--lumo-icon-size-m);\n    line-height: 1;\n    font-weight: normal;\n    width: 1em;\n    height: 1em;\n    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n    color: var(--lumo-primary-text-color);\n    flex: none;\n    opacity: 0;\n    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;\n  }\n\n  :host([selected]) [part='checkmark']::before {\n    opacity: 1;\n  }\n\n  :host([active]:not([selected])) [part='checkmark']::before {\n    transform: scale(0.8);\n    opacity: 0;\n    transition-duration: 0s;\n  }\n\n  [part='content'] {\n    flex: auto;\n  }\n\n  /* Disabled */\n  :host([disabled]) {\n    color: var(--lumo-disabled-text-color);\n    cursor: default;\n    pointer-events: none;\n  }\n\n  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */\n  @media (any-hover: hover) {\n    :host(:hover:not([disabled])) {\n      background-color: var(--lumo-primary-color-10pct);\n    }\n\n    :host([focus-ring]:not([disabled])) {\n      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n    }\n  }\n\n  /* RTL specific styles */\n  :host([dir='rtl']) {\n    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);\n    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));\n  }\n\n  /* Slotted icons */\n  :host ::slotted(vaadin-icon),\n  :host ::slotted(iron-icon) {\n    width: var(--lumo-icon-size-m);\n    height: var(--lumo-icon-size-m);\n  }\n</style>`,
});

export const Item = createVaadinComponent<ItemClass, typeof ItemEvents>(
  "vaadin-item",
  ItemProperties,
  ItemEvents,
  () => import("@vaadin/item/vaadin-item"),
  "Item",
  undefined,
  getItemPreRenderConfig
);

export { ItemElement };
