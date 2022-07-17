// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type { GridColumnGroup as GridColumnGroupClass } from "@vaadin/grid/vaadin-grid-column-group";

import type { GridColumn as GridColumnClass } from "@vaadin/grid/vaadin-grid-column";

import type { GridFilterColumn as GridFilterColumnClass } from "@vaadin/grid/vaadin-grid-filter-column";

import type {
  GridFilter as GridFilterClass,
  GridFilterEventMap,
} from "@vaadin/grid/vaadin-grid-filter";

import type {
  GridSelectionColumn as GridSelectionColumnClass,
  GridSelectionColumnEventMap,
} from "@vaadin/grid/vaadin-grid-selection-column";

import type {
  GridSortColumn as GridSortColumnClass,
  GridSortColumnEventMap,
} from "@vaadin/grid/vaadin-grid-sort-column";

import type {
  GridSorter as GridSorterClass,
  GridSorterEventMap,
} from "@vaadin/grid/vaadin-grid-sorter";

import type { GridTreeColumn as GridTreeColumnClass } from "@vaadin/grid/vaadin-grid-tree-column";

import type {
  GridTreeToggle as GridTreeToggleClass,
  GridTreeToggleEventMap,
} from "@vaadin/grid/vaadin-grid-tree-toggle";

import type { Grid as GridClass, GridEventMap } from "@vaadin/grid/vaadin-grid";
import { createVaadinComponent, eventMapper } from "../create-component";

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

const GridColumnGroupEvents = {};

const GridColumnGroupProperties = {
  flexGrow: "",
  width: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
};

type GridColumnGroupClassExtended = Omit<
  GridColumnGroupClass,
  "headerRenderer" | "footerRenderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
};

const getGridColumnGroupPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const GridColumnGroup = createVaadinComponent<
  GridColumnGroupClassExtended,
  typeof GridColumnGroupEvents
>(
  "vaadin-grid-column-group",
  GridColumnGroupProperties,
  GridColumnGroupEvents,
  () => import("@vaadin/grid/vaadin-grid-column-group"),
  "GridColumnGroup",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
  },
  getGridColumnGroupPreRenderConfig
);

const GridColumnEvents = {};

const GridColumnProperties = {
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  itemRenderer: "",
};

type GridColumnClassExtended = Omit<
  GridColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  itemRenderer: (
    model: Parameters<
      Exclude<PropType<GridColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

const getGridColumnPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const GridColumn = createVaadinComponent<
  GridColumnClassExtended,
  typeof GridColumnEvents
>(
  "vaadin-grid-column",
  GridColumnProperties,
  GridColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-column"),
  "GridColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getGridColumnPreRenderConfig
);

const GridFilterColumnEvents = {};

const GridFilterColumnProperties = {
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  itemRenderer: "",
};

type GridFilterColumnClassExtended = Omit<
  GridFilterColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  itemRenderer: (
    model: Parameters<
      Exclude<PropType<GridFilterColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

const getGridFilterColumnPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const GridFilterColumn = createVaadinComponent<
  GridFilterColumnClassExtended,
  typeof GridFilterColumnEvents
>(
  "vaadin-grid-filter-column",
  GridFilterColumnProperties,
  GridFilterColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-filter-column"),
  "GridFilterColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getGridFilterColumnPreRenderConfig
);

const GridFilterEventMapper = eventMapper<GridFilterEventMap>();
const GridFilterEvents = {
  ...GridFilterEventMapper("onValueChanged", "value-changed"),
};

const GridFilterProperties = {
  path: "",
  value: "",
};

const getGridFilterPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          max-width: 100%;\n        }\n\n        #filter {\n          width: 100%;\n          box-sizing: border-box;\n        }\n      </style>\n      <slot name="filter">\n        <vaadin-text-field id="filter"><label slot="label" id="label-vaadin-text-field-0" for="input-vaadin-text-field-3"></label><div slot="error-message" id="error-message-vaadin-text-field-2" hidden=""></div><input slot="input" type="text" id="input-vaadin-text-field-3"><template shadowroot="open">\n      <style>\n        [part='input-field'] {\n          flex-grow: 0;\n        }\n      </style>\n\n      <div class="vaadin-field-container">\n        <div part="label">\n          <slot name="label"></slot>\n          <span part="required-indicator" aria-hidden="true"></span>\n        </div>\n\n        <vaadin-input-container part="input-field">\n          <slot name="prefix" slot="prefix"></slot>\n          <slot name="input"></slot>\n          <slot name="suffix" slot="suffix"></slot>\n          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>\n        <template shadowroot="open">\n      <style>\n        :host {\n          display: flex;\n          align-items: center;\n          flex: 0 1 auto;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Reset the native input styles */\n        ::slotted(input) {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          flex: auto;\n          white-space: nowrap;\n          overflow: hidden;\n          width: 100%;\n          height: 100%;\n          outline: none;\n          margin: 0;\n          padding: 0;\n          border: 0;\n          border-radius: 0;\n          min-width: 0;\n          font: inherit;\n          line-height: normal;\n          color: inherit;\n          background-color: transparent;\n          /* Disable default invalid style in Firefox */\n          box-shadow: none;\n        }\n\n        ::slotted(*) {\n          flex: none;\n        }\n\n        ::slotted(:is(input, textarea))::placeholder {\n          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */\n          /* because ::slotted(...)::placeholder does not work in Safari. */\n          /* See the workaround at the end of this file. */\n          font: inherit;\n          color: inherit;\n          /* Override default opacity in Firefox */\n          opacity: 1;\n        }\n      </style>\n      <slot name="prefix"></slot>\n      <slot></slot>\n      <slot name="suffix"></slot>\n    <style>\n    :host {\n      border-radius: var(--lumo-border-radius-m);\n      background-color: var(--lumo-contrast-10pct);\n      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);\n      font-weight: 500;\n      line-height: 1;\n      position: relative;\n      cursor: text;\n      box-sizing: border-box;\n    }\n\n    /* Used for hover and activation effects */\n    :host::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      border-radius: inherit;\n      pointer-events: none;\n      background-color: var(--lumo-contrast-50pct);\n      opacity: 0;\n      transition: transform 0.15s, opacity 0.2s;\n      transform-origin: 100% 0;\n    }\n\n    ::slotted(:not([slot$='fix'])) {\n      cursor: inherit;\n      min-height: var(--lumo-text-field-size, var(--lumo-size-m));\n      padding: 0 0.25em;\n      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      mask-image: var(--_lumo-text-field-overflow-mask-image);\n    }\n\n    /* Read-only */\n    :host([readonly]) {\n      color: var(--lumo-secondary-text-color);\n      background-color: transparent;\n      cursor: default;\n    }\n\n    :host([readonly])::after {\n      background-color: transparent;\n      opacity: 1;\n      border: 1px dashed var(--lumo-contrast-30pct);\n    }\n\n    /* Disabled */\n    :host([disabled]) {\n      background-color: var(--lumo-contrast-5pct);\n    }\n\n    :host([disabled]) ::slotted(*) {\n      color: var(--lumo-disabled-text-color);\n      -webkit-text-fill-color: var(--lumo-disabled-text-color);\n    }\n\n    /* Invalid */\n    :host([invalid]) {\n      background-color: var(--lumo-error-color-10pct);\n    }\n\n    :host([invalid])::after {\n      background-color: var(--lumo-error-color-50pct);\n    }\n\n    /* Slotted icons */\n    ::slotted(iron-icon),\n    ::slotted(vaadin-icon) {\n      color: var(--lumo-contrast-60pct);\n      width: var(--lumo-icon-size-m);\n      height: var(--lumo-icon-size-m);\n    }\n\n    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n    ::slotted(iron-icon[icon^='vaadin:']),\n    ::slotted(vaadin-icon[icon^='vaadin:']) {\n      padding: 0.25em;\n      box-sizing: border-box !important;\n    }\n\n    /* Text align */\n    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);\n    }\n\n    @-moz-document url-prefix() {\n      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n    }\n\n    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {\n      text-align: start;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {\n      text-align: center;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {\n      text-align: end;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    /* RTL specific styles */\n    :host([dir='rtl'])::after {\n      transform-origin: 0% 0;\n    }\n\n    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);\n      }\n    }\n  </style></template></vaadin-input-container>\n\n        <div part="helper-text">\n          <slot name="helper"></slot>\n        </div>\n\n        <div part="error-message">\n          <slot name="error-message"></slot>\n        </div>\n      </div>\n    <style>\n  :host {\n    display: inline-flex;\n    outline: none;\n  }\n\n  :host::before {\n    content: '\\2003';\n    width: 0;\n    display: inline-block;\n    /* Size and position this element on the same vertical position as the input-field element\n          to make vertical align for the host element work as expected */\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:not([has-label])) [part='label'] {\n    display: none;\n  }\n\n\n  [class$='container'] {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    max-width: 100%;\n    width: var(--vaadin-field-default-width, 12em);\n  }\n\n\n  [part='clear-button'] {\n    display: none;\n    cursor: default;\n  }\n\n  [part='clear-button']::before {\n    content: '✕';\n  }\n\n  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {\n    display: block;\n  }\n\n\n  [part='label'] {\n    align-self: flex-start;\n    color: var(--lumo-secondary-text-color);\n    font-weight: 500;\n    font-size: var(--lumo-font-size-s);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n    line-height: 1;\n    padding-right: 1em;\n    padding-bottom: 0.5em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    position: relative;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  :host([has-label])::before {\n    margin-top: calc(var(--lumo-font-size-s) * 1.5);\n  }\n\n  :host([has-label][theme~='small'])::before {\n    margin-top: calc(var(--lumo-font-size-xs) * 1.5);\n  }\n\n  :host([has-label]) {\n    padding-top: var(--lumo-space-m);\n  }\n\n  :host([required]) [part='required-indicator']::after {\n    content: var(--lumo-required-field-indicator, '•');\n    transition: opacity 0.2s;\n    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n    position: absolute;\n    right: 0;\n    width: 1em;\n    text-align: center;\n  }\n\n  :host([invalid]) [part='required-indicator']::after {\n    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n  }\n\n  [part='error-message'] {\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-error-text-color);\n    will-change: max-height;\n    transition: 0.4s max-height;\n    max-height: 5em;\n  }\n\n  :host([has-error-message]) [part='error-message']::before,\n  :host([has-error-message]) [part='error-message']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host(:not([invalid])) [part='error-message'] {\n    max-height: 0;\n    overflow: hidden;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='label'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n  :host([dir='rtl']) [part='label'] {\n    padding-left: 1em;\n    padding-right: 0;\n  }\n\n  :host([dir='rtl']) [part='required-indicator']::after {\n    right: auto;\n    left: 0;\n  }\n\n  :host([dir='rtl']) [part='error-message'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n\n  [part$='button'] {\n    flex: none;\n    width: 1em;\n    height: 1em;\n    line-height: 1;\n    font-size: var(--lumo-icon-size-m);\n    text-align: center;\n    color: var(--lumo-contrast-60pct);\n    transition: 0.2s color;\n    cursor: var(--lumo-clickable-cursor);\n  }\n\n  [part$='button']:hover {\n    color: var(--lumo-contrast-90pct);\n  }\n\n  :host([disabled]) [part$='button'],\n  :host([readonly]) [part$='button'] {\n    color: var(--lumo-contrast-20pct);\n    cursor: default;\n  }\n\n  [part$='button']::before {\n    font-family: 'lumo-icons';\n    display: block;\n  }\n\n\n  :host([has-helper]) [part='helper-text']::before {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  [part='helper-text'] {\n    display: block;\n    color: var(--lumo-secondary-text-color);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n  }\n\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([disabled]) [part='helper-text'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {\n    display: none;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] {\n    order: 0;\n    padding-bottom: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {\n    order: 1;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {\n    order: 2;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {\n    order: 3;\n  }\n\n\n  :host {\n    --lumo-text-field-size: var(--lumo-size-m);\n    color: var(--lumo-body-text-color);\n    font-size: var(--lumo-font-size-m);\n    font-family: var(--lumo-font-family);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    padding: var(--lumo-space-xs) 0;\n  }\n\n  :host::before {\n    height: var(--lumo-text-field-size);\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n  }\n\n  :host([focused]:not([readonly])) [part='label'] {\n    color: var(--lumo-primary-text-color);\n  }\n\n  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n\n  ::slotted(:is(input, textarea):placeholder-shown) {\n    color: var(--lumo-secondary-text-color);\n  }\n\n  /* Hover */\n  :host(:hover:not([readonly]):not([focused])) [part='label'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {\n    opacity: 0.1;\n  }\n\n  /* Touch device adjustment */\n  @media (pointer: coarse) {\n    :host(:hover:not([readonly]):not([focused])) [part='label'] {\n      color: var(--lumo-secondary-text-color);\n    }\n\n    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {\n      opacity: 0;\n    }\n\n    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {\n      opacity: 0.2;\n    }\n  }\n\n  /* Trigger when not focusing using the keyboard */\n  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {\n    transform: scaleX(0);\n    transition-duration: 0.15s, 1s;\n  }\n\n  /* Focus-ring */\n  :host([focus-ring]) [part='input-field'] {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  /* Read-only and disabled */\n  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {\n    opacity: 0;\n  }\n\n  /* Disabled style */\n  :host([disabled]) {\n    pointer-events: none;\n  }\n\n  :host([disabled]) [part='label'],\n  :host([disabled]) [part='input-field'] ::slotted(*) {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  /* Invalid style */\n  :host([invalid][focus-ring]) [part='input-field'] {\n    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n  }\n\n  :host([input-prevented]) [part='input-field'] {\n    animation: shake 0.15s infinite;\n  }\n\n  @keyframes shake {\n    25% {\n      transform: translateX(4px);\n    }\n    75% {\n      transform: translateX(-4px);\n    }\n  }\n\n  /* Small theme */\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-text-field-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='small']) [part='label'] {\n    font-size: var(--lumo-font-size-xs);\n  }\n\n  :host([theme~='small']) [part='error-message'] {\n    font-size: var(--lumo-font-size-xxs);\n  }\n\n  /* Slotted content */\n  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {\n    color: var(--lumo-secondary-text-color);\n    font-weight: 400;\n  }\n\n  [part='clear-button']::before {\n    content: var(--lumo-icons-cross);\n  }\n</style></template></vaadin-text-field>\n      </slot>\n    `,
});

export const GridFilter = createVaadinComponent<
  GridFilterClass,
  typeof GridFilterEvents
>(
  "vaadin-grid-filter",
  GridFilterProperties,
  GridFilterEvents,
  () => import("@vaadin/grid/vaadin-grid-filter"),
  "GridFilter",
  undefined,
  getGridFilterPreRenderConfig
);

const GridSelectionColumnEventMapper =
  eventMapper<GridSelectionColumnEventMap>();
const GridSelectionColumnEvents = {
  ...GridSelectionColumnEventMapper("onSelectAllChanged", "select-all-changed"),
};

const GridSelectionColumnProperties = {
  selectAll: "",
  autoSelect: "",
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  itemRenderer: "",
};

type GridSelectionColumnClassExtended = Omit<
  GridSelectionColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  itemRenderer: (
    model: Parameters<
      Exclude<PropType<GridSelectionColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

const getGridSelectionColumnPreRenderConfig = (props: {
  [key: string]: any;
}) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const GridSelectionColumn = createVaadinComponent<
  GridSelectionColumnClassExtended,
  typeof GridSelectionColumnEvents
>(
  "vaadin-grid-selection-column",
  GridSelectionColumnProperties,
  GridSelectionColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-selection-column"),
  "GridSelectionColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getGridSelectionColumnPreRenderConfig
);

const GridSortColumnEventMapper = eventMapper<GridSortColumnEventMap>();
const GridSortColumnEvents = {
  ...GridSortColumnEventMapper("onDirectionChanged", "direction-changed"),
};

const GridSortColumnProperties = {
  direction: "",
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  itemRenderer: "",
};

type GridSortColumnClassExtended = Omit<
  GridSortColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  itemRenderer: (
    model: Parameters<
      Exclude<PropType<GridSortColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

const getGridSortColumnPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const GridSortColumn = createVaadinComponent<
  GridSortColumnClassExtended,
  typeof GridSortColumnEvents
>(
  "vaadin-grid-sort-column",
  GridSortColumnProperties,
  GridSortColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-sort-column"),
  "GridSortColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getGridSortColumnPreRenderConfig
);

const GridSorterEventMapper = eventMapper<GridSorterEventMap>();
const GridSorterEvents = {
  ...GridSorterEventMapper("onDirectionChanged", "direction-changed"),
  ...GridSorterEventMapper("onSorterChanged", "sorter-changed"),
};

const GridSorterProperties = {
  path: "",
  direction: "",
};

const getGridSorterPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          cursor: pointer;\n          max-width: 100%;\n        }\n\n        [part='content'] {\n          flex: 1 1 auto;\n        }\n\n        [part='indicators'] {\n          position: relative;\n          align-self: center;\n          flex: none;\n        }\n\n        [part='order'] {\n          display: inline;\n          vertical-align: super;\n        }\n\n        [part='indicators']::before {\n          font-family: 'vaadin-grid-sorter-icons';\n          display: inline-block;\n        }\n\n        :host(:not([direction])) [part='indicators']::before {\n          content: '\\e901';\n        }\n\n        :host([direction='asc']) [part='indicators']::before {\n          content: '\\e900';\n        }\n\n        :host([direction='desc']) [part='indicators']::before {\n          content: '\\e902';\n        }\n      </style>\n\n      <div part="content">\n        <slot></slot>\n      </div>\n      <div part="indicators">\n        <span part="order"></span>\n      </div>\n    <style>\n    :host {\n      justify-content: flex-start;\n      align-items: baseline;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none;\n      cursor: var(--lumo-clickable-cursor);\n    }\n\n    [part='content'] {\n      display: inline-block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    [part='indicators'] {\n      margin-left: var(--lumo-space-s);\n    }\n\n    [part='indicators']::before {\n      transform: scale(0.8);\n    }\n\n    :host(:not([direction]):not(:hover)) [part='indicators'] {\n      color: var(--lumo-tertiary-text-color);\n    }\n\n    :host([direction]) {\n      color: var(--lumo-primary-text-color);\n    }\n\n    [part='order'] {\n      font-size: var(--lumo-font-size-xxs);\n      line-height: 1;\n    }\n\n    /* RTL specific styles */\n\n    :host([dir='rtl']) [part='indicators'] {\n      margin-right: var(--lumo-space-s);\n      margin-left: 0;\n    }\n  </style>`,
});

export const GridSorter = createVaadinComponent<
  GridSorterClass,
  typeof GridSorterEvents
>(
  "vaadin-grid-sorter",
  GridSorterProperties,
  GridSorterEvents,
  () => import("@vaadin/grid/vaadin-grid-sorter"),
  "GridSorter",
  undefined,
  getGridSorterPreRenderConfig
);

const GridTreeColumnEvents = {};

const GridTreeColumnProperties = {
  itemHasChildrenPath: "",
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  itemRenderer: "",
};

type GridTreeColumnClassExtended = Omit<
  GridTreeColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  itemRenderer: (
    model: Parameters<
      Exclude<PropType<GridTreeColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

const getGridTreeColumnPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const GridTreeColumn = createVaadinComponent<
  GridTreeColumnClassExtended,
  typeof GridTreeColumnEvents
>(
  "vaadin-grid-tree-column",
  GridTreeColumnProperties,
  GridTreeColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-tree-column"),
  "GridTreeColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getGridTreeColumnPreRenderConfig
);

const GridTreeToggleEventMapper = eventMapper<GridTreeToggleEventMap>();
const GridTreeToggleEvents = {
  ...GridTreeToggleEventMapper("onExpandedChanged", "expanded-changed"),
};

const GridTreeToggleProperties = {
  level: "",
  leaf: "",
  expanded: "",
};

const getGridTreeTogglePreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          align-items: baseline;\n          max-width: 100%;\n\n          /* CSS API for :host */\n          --vaadin-grid-tree-toggle-level-offset: 1em;\n          --_collapsed-icon: '\\e7be\\00a0';\n        }\n\n        :host([dir='rtl']) {\n          --_collapsed-icon: '\\e7bd\\00a0';\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host(:not([leaf])) {\n          cursor: pointer;\n        }\n\n        #level-spacer,\n        [part='toggle'] {\n          flex: none;\n        }\n\n        #level-spacer {\n          display: inline-block;\n          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));\n        }\n\n        [part='toggle']::before {\n          font-family: 'vaadin-grid-tree-icons';\n          line-height: 1em; /* make icon font metrics not affect baseline */\n        }\n\n        :host(:not([expanded])) [part='toggle']::before {\n          content: var(--_collapsed-icon);\n        }\n\n        :host([expanded]) [part='toggle']::before {\n          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */\n        }\n\n        :host([leaf]) [part='toggle'] {\n          visibility: hidden;\n        }\n\n        slot {\n          display: block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      </style>\n\n      <span id="level-spacer"></span>\n      <span part="toggle"></span>\n      <slot></slot>\n    <style>\n    :host {\n      --vaadin-grid-tree-toggle-level-offset: 2em;\n      align-items: center;\n      vertical-align: middle;\n      margin-left: calc(var(--lumo-space-s) * -1);\n      -webkit-tap-highlight-color: transparent;\n    }\n\n    :host(:not([leaf])) {\n      cursor: default;\n    }\n\n    [part='toggle'] {\n      display: inline-block;\n      font-size: 1.5em;\n      line-height: 1;\n      width: 1em;\n      height: 1em;\n      text-align: center;\n      color: var(--lumo-contrast-50pct);\n      cursor: var(--lumo-clickable-cursor);\n      /* Increase touch target area */\n      padding: calc(1em / 3);\n      margin: calc(1em / -3);\n    }\n\n    :host(:not([dir='rtl'])) [part='toggle'] {\n      margin-right: 0;\n    }\n\n    @media (hover: hover) {\n      :host(:hover) [part='toggle'] {\n        color: var(--lumo-contrast-80pct);\n      }\n    }\n\n    [part='toggle']::before {\n      font-family: 'lumo-icons';\n      display: inline-block;\n      height: 100%;\n    }\n\n    :host(:not([expanded])) [part='toggle']::before {\n      content: var(--lumo-icons-angle-right);\n    }\n\n    :host([expanded]) [part='toggle']::before {\n      content: var(--lumo-icons-angle-right);\n      transform: rotate(90deg);\n    }\n\n    /* Experimental support for hierarchy connectors, using an unsupported selector */\n    :host([theme~='connectors']) #level-spacer {\n      position: relative;\n      z-index: -1;\n      font-size: 1em;\n      height: 1.5em;\n    }\n\n    :host([theme~='connectors']) #level-spacer::before {\n      display: block;\n      content: '';\n      margin-top: calc(var(--lumo-space-m) * -1);\n      height: calc(var(--lumo-space-m) + 3em);\n      background-image: linear-gradient(\n        to right,\n        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),\n        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)\n      );\n      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);\n      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;\n    }\n\n    /* RTL specific styles */\n\n    :host([dir='rtl']) {\n      margin-left: 0;\n      margin-right: calc(var(--lumo-space-s) * -1);\n    }\n\n    :host([dir='rtl']) [part='toggle'] {\n      margin-left: 0;\n    }\n\n    :host([dir='rtl'][expanded]) [part='toggle']::before {\n      transform: rotate(-90deg);\n    }\n\n    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {\n      background-image: linear-gradient(\n        to left,\n        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),\n        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)\n      );\n      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;\n    }\n\n    :host([dir='rtl']:not([expanded])) [part='toggle']::before,\n    :host([dir='rtl'][expanded]) [part='toggle']::before {\n      content: var(--lumo-icons-angle-left);\n    }\n  </style>`,
});

export const GridTreeToggle = createVaadinComponent<
  GridTreeToggleClass,
  typeof GridTreeToggleEvents
>(
  "vaadin-grid-tree-toggle",
  GridTreeToggleProperties,
  GridTreeToggleEvents,
  () => import("@vaadin/grid/vaadin-grid-tree-toggle"),
  "GridTreeToggle",
  undefined,
  getGridTreeTogglePreRenderConfig
);

const GridEventMapper = eventMapper<GridEventMap<unknown>>();
const GridEvents = {
  ...GridEventMapper("onActiveItemChanged", "active-item-changed"),
  ...GridEventMapper("onCellActivate", "cell-activate"),
  ...GridEventMapper("onCellFocus", "cell-focus"),
  ...GridEventMapper("onColumnReorder", "column-reorder"),
  ...GridEventMapper("onColumnResize", "column-resize"),
  ...GridEventMapper("onExpandedItemsChanged", "expanded-items-changed"),
  ...GridEventMapper("onGridDragstart", "grid-dragstart"),
  ...GridEventMapper("onGridDragend", "grid-dragend"),
  ...GridEventMapper("onGridDrop", "grid-drop"),
  ...GridEventMapper("onLoadingChanged", "loading-changed"),
  ...GridEventMapper("onSelectedItemsChanged", "selected-items-changed"),
};

const GridProperties = {
  allRowsVisible: "",
  dropMode: "",
  rowsDraggable: "",
  dragFilter: "",
  dropFilter: "",
  cellClassNameGenerator: "",
  columnReorderingAllowed: "",
  multiSort: "",
  multiSortPriority: "",
  selectedItems: "",
  detailsOpenedItems: "",
  rowDetailsRenderer: "",
  pageSize: "",
  size: "",
  dataProvider: "",
  loading: "",
  itemHasChildrenPath: "",
  itemIdPath: "",
  expandedItems: "",
  items: "",
  activeItem: "",
  version: "",
  disabled: "",
};

const getGridPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `<style>\n    \n\n    :host {\n        display: block;\n        height: 400px;\n        flex: 1 1 auto;\n        align-self: stretch;\n        position: relative;\n    }\n\n    :host([hidden]) {\n        display: none !important;\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n    }\n\n    :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-s);\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n  \n        /* For internal use only */\n      --_lumo-grid-border-color: var(--lumo-contrast-20pct);\n      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);\n      --_lumo-grid-border-width: 1px;\n      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);\n    }\n\n    /* No (outer) border */\n\n    :host(:not([theme~='no-border'])) {\n        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);\n    }\n\n    :host([disabled]) {\n        opacity: 0.7;\n    }\n  </style>`,
});

export const Grid = createVaadinComponent<GridClass, typeof GridEvents>(
  "vaadin-grid",
  GridProperties,
  GridEvents,
  () => import("@vaadin/grid/vaadin-grid"),
  "Grid",
  undefined,
  getGridPreRenderConfig
);
