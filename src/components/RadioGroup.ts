// Generated file. Do not edit.

import { createVaadinComponent, eventMapper } from "../create-component";

import type {
  RadioButton as RadioButtonClass,
  RadioButtonEventMap,
} from "@vaadin/radio-group/vaadin-radio-button";

import type {
  RadioGroup as RadioGroupClass,
  RadioGroupEventMap,
} from "@vaadin/radio-group/vaadin-radio-group";

const RadioButtonEventMapper = eventMapper<RadioButtonEventMap>();
const RadioButtonEvents = {
  ...RadioButtonEventMapper("onCheckedChanged", "checked-changed"),
};

const RadioButtonProperties = {
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

const getRadioButtonPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host([disabled]) {\n          -webkit-tap-highlight-color: transparent;\n        }\n\n        .vaadin-radio-button-container {\n          display: grid;\n          grid-template-columns: auto 1fr;\n          align-items: baseline;\n        }\n\n        .vaadin-radio-button-wrapper {\n          position: relative;\n          height: 100%;\n        }\n\n        /* visually hidden */\n        ::slotted(input) {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n          cursor: inherit;\n          margin: 0;\n        }\n      </style>\n      <div class="vaadin-radio-button-container">\n        <div class="vaadin-radio-button-wrapper">\n          <div part="radio"></div>\n          <slot name="input"></slot>\n        </div>\n\n        <slot name="label"></slot>\n\n        <div style="display: none !important">\n          <slot id="noop"></slot>\n        </div>\n      </div>\n    <style>\n    :host {\n      color: var(--lumo-body-text-color);\n      font-size: var(--lumo-font-size-m);\n      font-family: var(--lumo-font-family);\n      line-height: var(--lumo-line-height-s);\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none;\n      cursor: default;\n      outline: none;\n    }\n\n    :host([has-label]) ::slotted(label) {\n      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);\n    }\n\n    [part='radio'] {\n      width: calc(var(--lumo-size-m) / 2);\n      height: calc(var(--lumo-size-m) / 2);\n      margin: var(--lumo-space-xs);\n      position: relative;\n      border-radius: 50%;\n      background-color: var(--lumo-contrast-20pct);\n      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;\n      will-change: transform;\n      line-height: 1.2;\n      cursor: var(--lumo-clickable-cursor);\n    }\n\n    /* Used for activation "halo" */\n    [part='radio']::before {\n      /* Needed to align the radio-button nicely on the baseline */\n      content: '\\2003';\n      pointer-events: none;\n      color: transparent;\n      display: inline-block;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      background-color: inherit;\n      transform: scale(1.4);\n      opacity: 0;\n      transition: transform 0.1s, opacity 0.8s;\n      will-change: transform, opacity;\n    }\n\n    /* Used for the dot */\n    [part='radio']::after {\n      content: '';\n      pointer-events: none;\n      width: 0;\n      height: 0;\n      border: 3px solid var(--lumo-primary-contrast-color);\n      border-radius: 50%;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%) scale(0);\n      transition: 0.25s transform;\n      will-change: transform;\n      background-clip: content-box;\n    }\n\n    :host([checked]) [part='radio'] {\n      background-color: var(--lumo-primary-color);\n    }\n\n    :host([checked]) [part='radio']::after {\n      transform: translate(-50%, -50%) scale(1);\n    }\n\n    :host(:not([checked]):not([disabled]):hover) [part='radio'] {\n      background-color: var(--lumo-contrast-30pct);\n    }\n\n    :host([active]) [part='radio'] {\n      transform: scale(0.9);\n      transition-duration: 0.05s;\n    }\n\n    :host([active][checked]) [part='radio'] {\n      transform: scale(1.1);\n    }\n\n    :host([active]:not([checked])) [part='radio']::before {\n      transition-duration: 0.01s, 0.01s;\n      transform: scale(0);\n      opacity: 0.4;\n    }\n\n    :host([focus-ring]) [part='radio'] {\n      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n    }\n\n    :host([disabled]) {\n      pointer-events: none;\n      color: var(--lumo-disabled-text-color);\n    }\n\n    :host([disabled]) ::slotted(label) {\n      color: inherit;\n    }\n\n    :host([disabled]) [part='radio'] {\n      background-color: var(--lumo-contrast-10pct);\n    }\n\n    :host([disabled]) [part='radio']::after {\n      border-color: var(--lumo-contrast-30pct);\n    }\n\n    /* RTL specific styles */\n    :host([dir='rtl'][has-label]) ::slotted(label) {\n      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);\n    }\n  </style>`,
  };
};

export const RadioButton = createVaadinComponent<
  RadioButtonClass,
  typeof RadioButtonEvents
>(
  "vaadin-radio-button",
  RadioButtonProperties,
  RadioButtonEvents,
  () => import("@vaadin/radio-group/vaadin-radio-button"),
  "RadioButton",
  undefined,
  getRadioButtonPreRenderConfig
);

const RadioGroupEventMapper = eventMapper<RadioGroupEventMap>();
const RadioGroupEvents = {
  ...RadioGroupEventMapper("onInvalidChanged", "invalid-changed"),
  ...RadioGroupEventMapper("onValueChanged", "value-changed"),
  ...RadioGroupEventMapper("onValidated", "validated"),
};

const RadioGroupProperties = {
  value: "",
  readonly: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  disabled: "",
  version: "",
};

const getRadioGroupPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n        }\n\n        :host::before {\n          content: '\\2003';\n          width: 0;\n          display: inline-block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        .vaadin-group-field-container {\n          display: flex;\n          flex-direction: column;\n          width: 100%;\n        }\n\n        :host(:not([has-label])) [part='label'] {\n          display: none;\n        }\n      </style>\n      <div class="vaadin-group-field-container">\n        <div part="label">\n          <slot name="label"></slot>\n          <span part="required-indicator" aria-hidden="true"></span>\n        </div>\n\n        <div part="group-field">\n          <slot></slot>\n        </div>\n\n        <div part="helper-text">\n          <slot name="helper"></slot>\n        </div>\n\n        <div part="error-message">\n          <slot name="error-message"></slot>\n        </div>\n      </div>\n    <style>\n  [part='label'] {\n    align-self: flex-start;\n    color: var(--lumo-secondary-text-color);\n    font-weight: 500;\n    font-size: var(--lumo-font-size-s);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n    line-height: 1;\n    padding-right: 1em;\n    padding-bottom: 0.5em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    position: relative;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  :host([has-label])::before {\n    margin-top: calc(var(--lumo-font-size-s) * 1.5);\n  }\n\n  :host([has-label][theme~='small'])::before {\n    margin-top: calc(var(--lumo-font-size-xs) * 1.5);\n  }\n\n  :host([has-label]) {\n    padding-top: var(--lumo-space-m);\n  }\n\n  :host([required]) [part='required-indicator']::after {\n    content: var(--lumo-required-field-indicator, '•');\n    transition: opacity 0.2s;\n    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n    position: absolute;\n    right: 0;\n    width: 1em;\n    text-align: center;\n  }\n\n  :host([invalid]) [part='required-indicator']::after {\n    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n  }\n\n  [part='error-message'] {\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-error-text-color);\n    will-change: max-height;\n    transition: 0.4s max-height;\n    max-height: 5em;\n  }\n\n  :host([has-error-message]) [part='error-message']::before,\n  :host([has-error-message]) [part='error-message']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host(:not([invalid])) [part='error-message'] {\n    max-height: 0;\n    overflow: hidden;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='label'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n  :host([dir='rtl']) [part='label'] {\n    padding-left: 1em;\n    padding-right: 0;\n  }\n\n  :host([dir='rtl']) [part='required-indicator']::after {\n    right: auto;\n    left: 0;\n  }\n\n  :host([dir='rtl']) [part='error-message'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n\n  :host([has-helper]) [part='helper-text']::before {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  [part='helper-text'] {\n    display: block;\n    color: var(--lumo-secondary-text-color);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n  }\n\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([disabled]) [part='helper-text'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {\n    display: none;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] {\n    order: 0;\n    padding-bottom: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {\n    order: 1;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {\n    order: 2;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {\n    order: 3;\n  }\n\n\n  :host {\n    color: var(--lumo-body-text-color);\n    font-size: var(--lumo-font-size-m);\n    font-family: var(--lumo-font-family);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    padding: var(--lumo-space-xs) 0;\n  }\n\n  :host::before {\n    /* Effective height of vaadin-radio-button */\n    height: var(--lumo-size-s);\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n  }\n\n  :host([theme~='vertical']) [part='group-field'] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  :host([focused]:not([readonly])) [part='label'] {\n    color: var(--lumo-primary-text-color);\n  }\n\n  :host(:hover:not([readonly]):not([focused])) [part='label'],\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  /* Touch device adjustment */\n  @media (pointer: coarse) {\n    :host(:hover:not([readonly]):not([focused])) [part='label'] {\n      color: var(--lumo-secondary-text-color);\n    }\n  }\n</style>`,
  };
};

export const RadioGroup = createVaadinComponent<
  RadioGroupClass,
  typeof RadioGroupEvents
>(
  "vaadin-radio-group",
  RadioGroupProperties,
  RadioGroupEvents,
  () => import("@vaadin/radio-group/vaadin-radio-group"),
  "RadioGroup",
  undefined,
  getRadioGroupPreRenderConfig
);
