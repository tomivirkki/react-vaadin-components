// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  CustomField as CustomFieldClass,
  CustomFieldEventMap,
} from "@vaadin/custom-field/vaadin-custom-field";

const CustomFieldEventMapper = eventMapper<CustomFieldEventMap>();
const CustomFieldEvents = {
  ...CustomFieldEventMapper("onChange", "change"),
  ...CustomFieldEventMapper("onInternalTab", "internal-tab"),
  ...CustomFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...CustomFieldEventMapper("onValueChanged", "value-changed"),
  ...CustomFieldEventMapper("onValidated", "validated"),
};

const CustomFieldProperties = {
  inputs: "",
  i18n: "",
  name: "",
  value: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  version: "",
};

const getCustomFieldPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n        }\n\n        :host::before {\n          content: '\\2003';\n          width: 0;\n          display: inline-block;\n          /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        .vaadin-custom-field-container {\n          width: 100%;\n          display: flex;\n          flex-direction: column;\n        }\n\n        .inputs-wrapper {\n          flex: none;\n        }\n      </style>\n\n      <div class="vaadin-custom-field-container">\n        <div part="label">\n          <slot name="label"></slot>\n          <span part="required-indicator" aria-hidden="true"></span>\n        </div>\n\n        <div class="inputs-wrapper">\n          <slot id="slot"></slot>\n        </div>\n\n        <div part="helper-text">\n          <slot name="helper"></slot>\n        </div>\n\n        <div part="error-message">\n          <slot name="error-message"></slot>\n        </div>\n      </div>\n    <style>\n  [part='label'] {\n    align-self: flex-start;\n    color: var(--lumo-secondary-text-color);\n    font-weight: 500;\n    font-size: var(--lumo-font-size-s);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n    line-height: 1;\n    padding-right: 1em;\n    padding-bottom: 0.5em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    position: relative;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  :host([has-label])::before {\n    margin-top: calc(var(--lumo-font-size-s) * 1.5);\n  }\n\n  :host([has-label][theme~='small'])::before {\n    margin-top: calc(var(--lumo-font-size-xs) * 1.5);\n  }\n\n  :host([has-label]) {\n    padding-top: var(--lumo-space-m);\n  }\n\n  :host([required]) [part='required-indicator']::after {\n    content: var(--lumo-required-field-indicator, '•');\n    transition: opacity 0.2s;\n    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n    position: absolute;\n    right: 0;\n    width: 1em;\n    text-align: center;\n  }\n\n  :host([invalid]) [part='required-indicator']::after {\n    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n  }\n\n  [part='error-message'] {\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-error-text-color);\n    will-change: max-height;\n    transition: 0.4s max-height;\n    max-height: 5em;\n  }\n\n  :host([has-error-message]) [part='error-message']::before,\n  :host([has-error-message]) [part='error-message']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host(:not([invalid])) [part='error-message'] {\n    max-height: 0;\n    overflow: hidden;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='label'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n  :host([dir='rtl']) [part='label'] {\n    padding-left: 1em;\n    padding-right: 0;\n  }\n\n  :host([dir='rtl']) [part='required-indicator']::after {\n    right: auto;\n    left: 0;\n  }\n\n  :host([dir='rtl']) [part='error-message'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n\n  :host([has-helper]) [part='helper-text']::before {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  [part='helper-text'] {\n    display: block;\n    color: var(--lumo-secondary-text-color);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n  }\n\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([disabled]) [part='helper-text'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {\n    display: none;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] {\n    order: 0;\n    padding-bottom: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {\n    order: 1;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {\n    order: 2;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {\n    order: 3;\n  }\n\n\n  :host {\n    --lumo-text-field-size: var(--lumo-size-m);\n    color: var(--lumo-body-text-color);\n    font-size: var(--lumo-font-size-m);\n    /* align with text-field height + vertical paddings */\n    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));\n    font-family: var(--lumo-font-family);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    padding: 0;\n  }\n\n  :host::before {\n    margin-top: var(--lumo-space-xs);\n    height: var(--lumo-text-field-size);\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n  }\n\n  /* align with text-field label */\n  :host([has-label]) [part='label'] {\n    padding-bottom: calc(0.5em - var(--lumo-space-xs));\n  }\n\n  :host(:not([has-label])) [part='label'],\n  :host(:not([has-label]))::before {\n    display: none;\n  }\n\n  /* align with text-field error message */\n  :host([has-error-message]) [part='error-message']::before {\n    height: calc(0.4em - var(--lumo-space-xs));\n  }\n\n  :host([focused]:not([readonly]):not([disabled])) [part='label'] {\n    color: var(--lumo-primary-text-color);\n  }\n\n  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],\n  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  /* Touch device adjustment */\n  @media (pointer: coarse) {\n    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {\n      color: var(--lumo-secondary-text-color);\n    }\n  }\n\n  /* Disabled */\n  :host([disabled]) [part='label'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  /* Small theme */\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-text-field-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='small'][has-label]) [part='label'] {\n    font-size: var(--lumo-font-size-xs);\n  }\n\n  :host([theme~='small'][has-label]) [part='error-message'] {\n    font-size: var(--lumo-font-size-xxs);\n  }\n\n  /* When custom-field is used with components without outer margin */\n  :host([theme~='whitespace'][has-label]) [part='label'] {\n    padding-bottom: 0.5em;\n  }\n</style>`,
  };
};

export const CustomField = createPolymerComponent<
  CustomFieldClass,
  typeof CustomFieldEvents
>(
  "vaadin-custom-field",
  CustomFieldProperties,
  CustomFieldEvents,
  () => import("@vaadin/custom-field/vaadin-custom-field"),
  "CustomField",
  undefined,
  getCustomFieldPreRenderConfig
);
