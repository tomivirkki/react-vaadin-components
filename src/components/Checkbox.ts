// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  Checkbox as CheckboxClass,
  CheckboxEventMap,
} from "@vaadin/checkbox/vaadin-checkbox";
import { createVaadinComponent, eventMapper } from "../create-component";

const CheckboxEventMapper = eventMapper<CheckboxEventMap>();
const CheckboxEvents = {
  ...CheckboxEventMapper("onCheckedChanged", "checked-changed"),
  ...CheckboxEventMapper("onIndeterminateChanged", "indeterminate-changed"),
};

const CheckboxProperties = {
  indeterminate: "",
  name: "",
  label: "",
  checked: "",
  stateTarget: "",
  inputElement: "",
  value: "",
  autofocus: "",
  focusElement: "",
  tabindex: "",
  disabled: "",
  version: "",
};

const getCheckboxPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {
    "has-label": props.label ? "" : undefined,
    "has-value": props.value ? "" : undefined,
  },
  children: [
    { tag: "label", textContent: props.label, properties: { slot: "label" } },
    { tag: "input", properties: { slot: "input", type: "checkbox" } },
  ],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host([disabled]) {\n          -webkit-tap-highlight-color: transparent;\n        }\n\n        .vaadin-checkbox-container {\n          display: grid;\n          grid-template-columns: auto 1fr;\n          align-items: baseline;\n        }\n\n        .vaadin-checkbox-wrapper {\n          position: relative;\n          height: 100%;\n        }\n\n        /* visually hidden */\n        ::slotted(input) {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n          cursor: inherit;\n          margin: 0;\n        }\n      </style>\n      <div class="vaadin-checkbox-container">\n        <div class="vaadin-checkbox-wrapper">\n          <div part="checkbox"></div>\n          <slot name="input"></slot>\n        </div>\n\n        <slot name="label"></slot>\n\n        <div style="display: none !important">\n          <slot id="noop"></slot>\n        </div>\n      </div>\n    <style>\n    :host {\n      color: var(--lumo-body-text-color);\n      font-size: var(--lumo-font-size-m);\n      font-family: var(--lumo-font-family);\n      line-height: var(--lumo-line-height-s);\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none;\n      cursor: default;\n      outline: none;\n    }\n\n    :host([has-label]) ::slotted(label) {\n      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);\n    }\n\n    [part='checkbox'] {\n      width: calc(var(--lumo-size-m) / 2);\n      height: calc(var(--lumo-size-m) / 2);\n      margin: var(--lumo-space-xs);\n      position: relative;\n      border-radius: var(--lumo-border-radius-s);\n      background-color: var(--lumo-contrast-20pct);\n      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;\n      line-height: 1.2;\n      cursor: var(--lumo-clickable-cursor);\n      flex: none;\n    }\n\n    :host([indeterminate]) [part='checkbox'],\n    :host([checked]) [part='checkbox'] {\n      background-color: var(--lumo-primary-color);\n    }\n\n    /* Needed to align the checkbox nicely on the baseline */\n    [part='checkbox']::before {\n      content: '\\2003';\n    }\n\n    /* Checkmark */\n    [part='checkbox']::after {\n      pointer-events: none;\n      font-family: 'lumo-icons';\n      content: var(--lumo-icons-checkmark);\n      color: var(--lumo-primary-contrast-color);\n      font-size: calc(var(--lumo-size-m) / 2 + 2px);\n      line-height: 1;\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      contain: content;\n      opacity: 0;\n    }\n\n    :host([checked]) [part='checkbox']::after {\n      opacity: 1;\n    }\n\n    /* Indeterminate checkmark */\n    :host([indeterminate]) [part='checkbox']::after {\n      content: '';\n      opacity: 1;\n      top: 45%;\n      height: 10%;\n      left: 22%;\n      right: 22%;\n      width: auto;\n      border: 0;\n      background-color: var(--lumo-primary-contrast-color);\n    }\n\n    /* Focus ring */\n    :host([focus-ring]) [part='checkbox'] {\n      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n    }\n\n    /* Disabled */\n    :host([disabled]) {\n      pointer-events: none;\n      color: var(--lumo-disabled-text-color);\n    }\n\n    :host([disabled]) ::slotted(label) {\n      color: inherit;\n    }\n\n    :host([disabled]) [part='checkbox'] {\n      background-color: var(--lumo-contrast-10pct);\n    }\n\n    :host([disabled]) [part='checkbox']::after {\n      color: var(--lumo-contrast-30pct);\n    }\n\n    :host([indeterminate][disabled]) [part='checkbox']::after {\n      background-color: var(--lumo-contrast-30pct);\n    }\n\n    /* RTL specific styles */\n    :host([dir='rtl'][has-label]) ::slotted(label) {\n      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);\n    }\n\n    /* Used for activation "halo" */\n    [part='checkbox']::before {\n      pointer-events: none;\n      color: transparent;\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      background-color: inherit;\n      transform: scale(1.4);\n      opacity: 0;\n      transition: transform 0.1s, opacity 0.8s;\n    }\n\n    /* Hover */\n    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {\n      background-color: var(--lumo-contrast-30pct);\n    }\n\n    /* Disable hover for touch devices */\n    @media (pointer: coarse) {\n      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {\n        background-color: var(--lumo-contrast-20pct);\n      }\n    }\n\n    /* Active */\n    :host([active]) [part='checkbox'] {\n      transform: scale(0.9);\n      transition-duration: 0.05s;\n    }\n\n    :host([active][checked]) [part='checkbox'] {\n      transform: scale(1.1);\n    }\n\n    :host([active]:not([checked])) [part='checkbox']::before {\n      transition-duration: 0.01s, 0.01s;\n      transform: scale(0);\n      opacity: 0.4;\n    }\n  </style>`,
});

export const Checkbox = createVaadinComponent<
  CheckboxClass,
  typeof CheckboxEvents
>(
  "vaadin-checkbox",
  CheckboxProperties,
  CheckboxEvents,
  () => import("@vaadin/checkbox/vaadin-checkbox"),
  "Checkbox",
  undefined,
  getCheckboxPreRenderConfig
);
