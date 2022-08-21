// Generated file. Do not edit.

import React from "react";

import type * as FormItemElement from "@vaadin/form-layout/vaadin-form-item";
import type * as FormLayoutElement from "@vaadin/form-layout/vaadin-form-layout";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type FormItemClass = FormItemElement.FormItem;

const FormItemEvents = {};

const FormItemProperties = {};

type FormItemClassExtended = FormItemClass & {
  colspan?: string;
};

const getFormItemPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          flex-direction: row;\n          align-items: baseline;\n          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;\n        }\n\n        :host([label-position='top']) {\n          flex-direction: column;\n          align-items: stretch;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        #label {\n          width: var(--vaadin-form-item-label-width, 8em);\n          flex: 0 0 auto;\n        }\n\n        :host([label-position='top']) #label {\n          width: auto;\n        }\n\n        #spacing {\n          width: var(--vaadin-form-item-label-spacing, 1em);\n          flex: 0 0 auto;\n        }\n\n        #content {\n          flex: 1 1 auto;\n        }\n\n        #content ::slotted(.full-width) {\n          box-sizing: border-box;\n          width: 100%;\n          min-width: 0;\n        }\n      </style>\n      <div id="label" part="label">\n        <slot name="label" id="labelSlot"></slot>\n        <span part="required-indicator" aria-hidden="true"></span>\n      </div>\n      <div id="spacing"></div>\n      <div id="content">\n        <slot id="contentSlot"></slot>\n      </div>\n    <style>\n    :host {\n      --vaadin-form-item-row-spacing: 0;\n    }\n\n    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */\n    [part='label'] {\n      color: var(--lumo-secondary-text-color);\n      font-family: var(--lumo-font-family);\n      font-size: var(--lumo-font-size-s);\n      font-weight: 500;\n      margin-top: var(--lumo-space-m);\n      margin-left: calc(var(--lumo-border-radius-m) / 4);\n      margin-bottom: var(--lumo-space-xs);\n      transition: color 0.4s;\n      line-height: 1.333;\n    }\n\n    [part='required-indicator']::after {\n      content: var(--lumo-required-field-indicator, '•');\n      transition: opacity 0.2s;\n      opacity: 0;\n      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n      position: relative;\n      width: 1em;\n      text-align: center;\n    }\n\n    :host([required]) [part='required-indicator']::after {\n      opacity: 1;\n    }\n\n    :host([invalid]) [part='required-indicator']::after {\n      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n    }\n  </style>`,
});

export const FormItem = createVaadinComponent<
  FormItemClassExtended,
  typeof FormItemEvents
>(
  "vaadin-form-item",
  FormItemProperties,
  FormItemEvents,
  () => import("@vaadin/form-layout/vaadin-form-item.js"),
  "FormItem",
  undefined,
  getFormItemPreRenderConfig
);

export { FormItemElement };

type FormLayoutClass = FormLayoutElement.FormLayout;

const FormLayoutEvents = {};

const FormLayoutProperties = {
  responsiveSteps: "",
  version: "",
};

const getFormLayoutPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n          max-width: 100%;\n          animation: 1ms vaadin-form-layout-appear;\n          /* CSS API for host */\n          --vaadin-form-item-label-width: 8em;\n          --vaadin-form-item-label-spacing: 1em;\n          --vaadin-form-item-row-spacing: 1em;\n          --vaadin-form-layout-column-spacing: 2em; /* (default) */\n          align-self: stretch;\n        }\n\n        @keyframes vaadin-form-layout-appear {\n          to {\n            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */\n          }\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        #layout {\n          display: flex;\n\n          align-items: baseline; /* default \`stretch\` is not appropriate */\n\n          flex-wrap: wrap; /* the items should wrap */\n        }\n\n        #layout ::slotted(*) {\n          /* Items should neither grow nor shrink. */\n          flex-grow: 0;\n          flex-shrink: 0;\n\n          /* Margins make spacing between the columns */\n          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));\n          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));\n        }\n\n        #layout ::slotted(br) {\n          display: none;\n        }\n      </style>\n      <div id="layout" style="">\n        <slot id="slot"></slot>\n      </div>\n    <style>\n    :host {\n      --vaadin-form-layout-column-spacing: var(--lumo-space-l);\n    }\n  </style>`,
});

export const FormLayout = createVaadinComponent<
  FormLayoutClass,
  typeof FormLayoutEvents
>(
  "vaadin-form-layout",
  FormLayoutProperties,
  FormLayoutEvents,
  () => import("@vaadin/form-layout/vaadin-form-layout.js"),
  "FormLayout",
  undefined,
  getFormLayoutPreRenderConfig
);

export { FormLayoutElement };
