// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  CheckboxGroup as CheckboxGroupClass,
  CheckboxGroupEventMap,
} from "@vaadin/checkbox-group/vaadin-checkbox-group";
import { createVaadinComponent, eventMapper } from "../create-component";

const CheckboxGroupEventMapper = eventMapper<CheckboxGroupEventMap>();
const CheckboxGroupEvents = {
  ...CheckboxGroupEventMapper("onInvalidChanged", "invalid-changed"),
  ...CheckboxGroupEventMapper("onValueChanged", "value-changed"),
};

const CheckboxGroupProperties = {
  value: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  disabled: "",
  version: "",
};

const getCheckboxGroupPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: { "has-label": props.label ? "" : undefined },
  children: [
    { tag: "label", textContent: props.label, properties: { slot: "label" } },
  ],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n        }\n\n        :host::before {\n          content: '\\2003';\n          width: 0;\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        .vaadin-group-field-container {\n          display: flex;\n          flex-direction: column;\n          width: 100%;\n        }\n\n        :host(:not([has-label])) [part='label'] {\n          display: none;\n        }\n      </style>\n\n      <div class="vaadin-group-field-container">\n        <div part="label">\n          <slot name="label"></slot>\n          <span part="required-indicator" aria-hidden="true"></span>\n        </div>\n\n        <div part="group-field">\n          <slot></slot>\n        </div>\n\n        <div part="helper-text">\n          <slot name="helper"></slot>\n        </div>\n\n        <div part="error-message">\n          <slot name="error-message"></slot>\n        </div>\n      </div>\n    <style>\n  [part='label'] {\n    align-self: flex-start;\n    color: var(--lumo-secondary-text-color);\n    font-weight: 500;\n    font-size: var(--lumo-font-size-s);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n    line-height: 1;\n    padding-right: 1em;\n    padding-bottom: 0.5em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    position: relative;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  :host([has-label])::before {\n    margin-top: calc(var(--lumo-font-size-s) * 1.5);\n  }\n\n  :host([has-label][theme~='small'])::before {\n    margin-top: calc(var(--lumo-font-size-xs) * 1.5);\n  }\n\n  :host([has-label]) {\n    padding-top: var(--lumo-space-m);\n  }\n\n  :host([required]) [part='required-indicator']::after {\n    content: var(--lumo-required-field-indicator, '•');\n    transition: opacity 0.2s;\n    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n    position: absolute;\n    right: 0;\n    width: 1em;\n    text-align: center;\n  }\n\n  :host([invalid]) [part='required-indicator']::after {\n    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n  }\n\n  [part='error-message'] {\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-error-text-color);\n    will-change: max-height;\n    transition: 0.4s max-height;\n    max-height: 5em;\n  }\n\n  :host([has-error-message]) [part='error-message']::before,\n  :host([has-error-message]) [part='error-message']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host(:not([invalid])) [part='error-message'] {\n    max-height: 0;\n    overflow: hidden;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='label'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n  :host([dir='rtl']) [part='label'] {\n    padding-left: 1em;\n    padding-right: 0;\n  }\n\n  :host([dir='rtl']) [part='required-indicator']::after {\n    right: auto;\n    left: 0;\n  }\n\n  :host([dir='rtl']) [part='error-message'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n\n  :host([has-helper]) [part='helper-text']::before {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  [part='helper-text'] {\n    display: block;\n    color: var(--lumo-secondary-text-color);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n  }\n\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([disabled]) [part='helper-text'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {\n    display: none;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] {\n    order: 0;\n    padding-bottom: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {\n    order: 1;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {\n    order: 2;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {\n    order: 3;\n  }\n\n\n  :host {\n    color: var(--lumo-body-text-color);\n    font-size: var(--lumo-font-size-m);\n    font-family: var(--lumo-font-family);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    padding: var(--lumo-space-xs) 0;\n  }\n\n  :host::before {\n    /* Effective height of vaadin-checkbox */\n    height: var(--lumo-size-s);\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n  }\n\n  :host([theme~='vertical']) [part='group-field'] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  :host([disabled]) [part='label'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([focused]:not([disabled])) [part='label'] {\n    color: var(--lumo-primary-text-color);\n  }\n\n  :host(:hover:not([disabled]):not([focused])) [part='label'],\n  :host(:hover:not([disabled]):not([focused])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  /* Touch device adjustment */\n  @media (pointer: coarse) {\n    :host(:hover:not([disabled]):not([focused])) [part='label'] {\n      color: var(--lumo-secondary-text-color);\n    }\n  }\n</style>`,
});

export const CheckboxGroup = createVaadinComponent<
  CheckboxGroupClass,
  typeof CheckboxGroupEvents
>(
  "vaadin-checkbox-group",
  CheckboxGroupProperties,
  CheckboxGroupEvents,
  () => import("@vaadin/checkbox-group/vaadin-checkbox-group"),
  "CheckboxGroup",
  undefined,
  getCheckboxGroupPreRenderConfig
);
