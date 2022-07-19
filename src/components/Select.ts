// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  Select as SelectClass,
  SelectEventMap,
} from "@vaadin/select/vaadin-select";
import { createVaadinComponent, eventMapper } from "../create-component";

const SelectEventMapper = eventMapper<SelectEventMap>();
const SelectEvents = {
  ...SelectEventMapper("onChange", "change"),
  ...SelectEventMapper("onInvalidChanged", "invalid-changed"),
  ...SelectEventMapper("onOpenedChanged", "opened-changed"),
  ...SelectEventMapper("onValueChanged", "value-changed"),
  ...SelectEventMapper("onValidated", "validated"),
};

const SelectProperties = {
  items: "",
  opened: "",
  renderer: "",
  value: "",
  name: "",
  placeholder: "",
  readonly: "",
  autofocus: "",
  focusElement: "",
  disabled: "",
  tabindex: "",
  stateTarget: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  version: "",
};

const getSelectPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {
    "has-label": props.label ? "" : undefined,
    "has-value": props.value ? "" : undefined,
  },
  children: [
    { tag: "label", textContent: props.label, properties: { slot: "label" } },
    { tag: "vaadin-select-value-button", properties: { slot: "value" } },
  ],
  shadowDomContent: `\n      <style>\n        ::slotted([slot='value']) {\n          flex-grow: 1;\n        }\n      </style>\n\n      <div class="vaadin-select-container">\n        <div part="label">\n          <slot name="label"></slot>\n          <span part="required-indicator" aria-hidden="true"></span>\n        </div>\n\n        <vaadin-input-container part="input-field">\n          <slot name="prefix" slot="prefix"></slot>\n          <slot name="value"></slot>\n          <div part="toggle-button" slot="suffix" aria-hidden="true"></div>\n        <template shadowroot="open">\n      <style>\n        :host {\n          display: flex;\n          align-items: center;\n          flex: 0 1 auto;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Reset the native input styles */\n        ::slotted(input) {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          flex: auto;\n          white-space: nowrap;\n          overflow: hidden;\n          width: 100%;\n          height: 100%;\n          outline: none;\n          margin: 0;\n          padding: 0;\n          border: 0;\n          border-radius: 0;\n          min-width: 0;\n          font: inherit;\n          line-height: normal;\n          color: inherit;\n          background-color: transparent;\n          /* Disable default invalid style in Firefox */\n          box-shadow: none;\n        }\n\n        ::slotted(*) {\n          flex: none;\n        }\n\n        ::slotted(:is(input, textarea))::placeholder {\n          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */\n          /* because ::slotted(...)::placeholder does not work in Safari. */\n          /* See the workaround at the end of this file. */\n          font: inherit;\n          color: inherit;\n          /* Override default opacity in Firefox */\n          opacity: 1;\n        }\n      </style>\n      <slot name="prefix"></slot>\n      <slot></slot>\n      <slot name="suffix"></slot>\n    <style>\n    :host {\n      border-radius: var(--lumo-border-radius-m);\n      background-color: var(--lumo-contrast-10pct);\n      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);\n      font-weight: 500;\n      line-height: 1;\n      position: relative;\n      cursor: text;\n      box-sizing: border-box;\n    }\n\n    /* Used for hover and activation effects */\n    :host::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      border-radius: inherit;\n      pointer-events: none;\n      background-color: var(--lumo-contrast-50pct);\n      opacity: 0;\n      transition: transform 0.15s, opacity 0.2s;\n      transform-origin: 100% 0;\n    }\n\n    ::slotted(:not([slot$='fix'])) {\n      cursor: inherit;\n      min-height: var(--lumo-text-field-size, var(--lumo-size-m));\n      padding: 0 0.25em;\n      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      mask-image: var(--_lumo-text-field-overflow-mask-image);\n    }\n\n    /* Read-only */\n    :host([readonly]) {\n      color: var(--lumo-secondary-text-color);\n      background-color: transparent;\n      cursor: default;\n    }\n\n    :host([readonly])::after {\n      background-color: transparent;\n      opacity: 1;\n      border: 1px dashed var(--lumo-contrast-30pct);\n    }\n\n    /* Disabled */\n    :host([disabled]) {\n      background-color: var(--lumo-contrast-5pct);\n    }\n\n    :host([disabled]) ::slotted(*) {\n      color: var(--lumo-disabled-text-color);\n      -webkit-text-fill-color: var(--lumo-disabled-text-color);\n    }\n\n    /* Invalid */\n    :host([invalid]) {\n      background-color: var(--lumo-error-color-10pct);\n    }\n\n    :host([invalid])::after {\n      background-color: var(--lumo-error-color-50pct);\n    }\n\n    /* Slotted icons */\n    ::slotted(iron-icon),\n    ::slotted(vaadin-icon) {\n      color: var(--lumo-contrast-60pct);\n      width: var(--lumo-icon-size-m);\n      height: var(--lumo-icon-size-m);\n    }\n\n    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n    ::slotted(iron-icon[icon^='vaadin:']),\n    ::slotted(vaadin-icon[icon^='vaadin:']) {\n      padding: 0.25em;\n      box-sizing: border-box !important;\n    }\n\n    /* Text align */\n    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);\n    }\n\n    @-moz-document url-prefix() {\n      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n    }\n\n    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {\n      text-align: start;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {\n      text-align: center;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {\n      text-align: end;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    /* RTL specific styles */\n    :host([dir='rtl'])::after {\n      transform-origin: 0% 0;\n    }\n\n    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);\n      }\n    }\n  </style></template></vaadin-input-container>\n\n        <div part="helper-text">\n          <slot name="helper"></slot>\n        </div>\n\n        <div part="error-message">\n          <slot name="error-message"></slot>\n        </div>\n      </div>\n\n      <vaadin-select-overlay><template shadowroot="open">\n      <style>\n        :host {\n          z-index: 200;\n          position: fixed;\n\n          /* Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part. */\n\n          /* Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport. */\n          top: 0;\n          right: 0;\n          bottom: var(--vaadin-overlay-viewport-bottom);\n          left: 0;\n\n          /* Use flexbox alignment for the overlay part. */\n          display: flex;\n          flex-direction: column; /* makes dropdowns sizing easier */\n          /* Align to center by default. */\n          align-items: center;\n          justify-content: center;\n\n          /* Allow centering when max-width/max-height applies. */\n          margin: auto;\n\n          /* The host is not clickable, only the overlay part is. */\n          pointer-events: none;\n\n          /* Remove tap highlight on touch devices. */\n          -webkit-tap-highlight-color: transparent;\n\n          /* CSS API for host */\n          --vaadin-overlay-viewport-bottom: 0;\n        }\n\n        :host([hidden]),\n        :host(:not([opened]):not([closing])) {\n          display: none !important;\n        }\n\n        [part='overlay'] {\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          pointer-events: auto;\n\n          /* Prevent overflowing the host in MSIE 11 */\n          max-width: 100%;\n          box-sizing: border-box;\n\n          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n        }\n\n        [part='backdrop'] {\n          z-index: -1;\n          content: '';\n          background: rgba(0, 0, 0, 0.5);\n          position: fixed;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          pointer-events: auto;\n        }\n      </style>\n\n      <div id="backdrop" part="backdrop" hidden=""></div>\n      <div part="overlay" id="overlay" tabindex="0">\n        <div part="content" id="content">\n          <slot></slot>\n        </div>\n      </div>\n    <style>\n    :host {\n      align-items: flex-start;\n      justify-content: flex-start;\n    }\n  \n\n  :host {\n    top: var(--lumo-space-m);\n    right: var(--lumo-space-m);\n    bottom: var(--lumo-space-m);\n    left: var(--lumo-space-m);\n    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n    /* stylelint-disable-next-line */\n    outline: 0px solid transparent;\n  }\n\n  [part='overlay'] {\n    background-color: var(--lumo-base-color);\n    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n    color: var(--lumo-body-text-color);\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 400;\n    line-height: var(--lumo-line-height-m);\n    letter-spacing: 0;\n    text-transform: none;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  [part='content'] {\n    padding: var(--lumo-space-xs);\n  }\n\n  [part='backdrop'] {\n    background-color: var(--lumo-shade-20pct);\n    animation: 0.2s lumo-overlay-backdrop-enter both;\n    will-change: opacity;\n  }\n\n  @keyframes lumo-overlay-backdrop-enter {\n    0% {\n      opacity: 0;\n    }\n  }\n\n  :host([closing]) [part='backdrop'] {\n    animation: 0.2s lumo-overlay-backdrop-exit both;\n  }\n\n  @keyframes lumo-overlay-backdrop-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n  @keyframes lumo-overlay-dummy-animation {\n    0% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  }\n\n\n  :host([opening]),\n  :host([closing]) {\n    animation: 0.14s lumo-overlay-dummy-animation;\n  }\n\n  [part='overlay'] {\n    will-change: opacity, transform;\n  }\n\n  :host([opening]) [part='overlay'] {\n    animation: 0.1s lumo-menu-overlay-enter ease-out both;\n  }\n\n  @keyframes lumo-menu-overlay-enter {\n    0% {\n      opacity: 0;\n      transform: translateY(-4px);\n    }\n  }\n\n  :host([closing]) [part='overlay'] {\n    animation: 0.1s lumo-menu-overlay-exit both;\n  }\n\n  @keyframes lumo-menu-overlay-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n\n  /* Small viewport (bottom sheet) styles */\n  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */\n  @media (max-width: 420px), (max-height: 420px) {\n    :host {\n      top: 0 !important;\n      right: 0 !important;\n      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n      left: 0 !important;\n      align-items: stretch !important;\n      justify-content: flex-end !important;\n    }\n\n    [part='overlay'] {\n      max-height: 50vh;\n      width: 100vw;\n      border-radius: 0;\n      box-shadow: var(--lumo-box-shadow-xl);\n    }\n\n    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n    [part='content'] {\n      padding: 30px var(--lumo-space-m);\n      max-height: inherit;\n      box-sizing: border-box;\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n    }\n\n    [part='backdrop'] {\n      display: block;\n    }\n\n    /* Animations */\n\n    :host([opening]) [part='overlay'] {\n      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;\n    }\n\n    :host([closing]),\n    :host([closing]) [part='backdrop'] {\n      animation-delay: 0.14s;\n    }\n\n    :host([closing]) [part='overlay'] {\n      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;\n    }\n  }\n\n  @keyframes lumo-mobile-menu-overlay-enter {\n    0% {\n      transform: translateY(150%);\n    }\n  }\n\n  @keyframes lumo-mobile-menu-overlay-exit {\n    100% {\n      transform: translateY(150%);\n    }\n  }\n\n\n  :host {\n    --_lumo-item-selected-icon-display: block;\n  }\n\n  [part~='overlay'] {\n    min-width: var(--vaadin-select-text-field-width);\n  }\n\n  /* Small viewport adjustment */\n  :host([phone]) {\n    top: 0 !important;\n    right: 0 !important;\n    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n    left: 0 !important;\n    align-items: stretch;\n    justify-content: flex-end;\n  }\n\n  :host([theme~='align-left']) {\n    text-align: left;\n  }\n\n  :host([theme~='align-right']) {\n    text-align: right;\n  }\n\n  :host([theme~='align-center']) {\n    text-align: center;\n  }\n</style></template></vaadin-select-overlay>\n    <style>\n  :host {\n    display: inline-flex;\n    outline: none;\n  }\n\n  :host::before {\n    content: '\\2003';\n    width: 0;\n    display: inline-block;\n    /* Size and position this element on the same vertical position as the input-field element\n          to make vertical align for the host element work as expected */\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:not([has-label])) [part='label'] {\n    display: none;\n  }\n\n\n  [class$='container'] {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    max-width: 100%;\n    width: var(--vaadin-field-default-width, 12em);\n  }\n\n\n  [part='label'] {\n    align-self: flex-start;\n    color: var(--lumo-secondary-text-color);\n    font-weight: 500;\n    font-size: var(--lumo-font-size-s);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n    line-height: 1;\n    padding-right: 1em;\n    padding-bottom: 0.5em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    position: relative;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  :host([has-label])::before {\n    margin-top: calc(var(--lumo-font-size-s) * 1.5);\n  }\n\n  :host([has-label][theme~='small'])::before {\n    margin-top: calc(var(--lumo-font-size-xs) * 1.5);\n  }\n\n  :host([has-label]) {\n    padding-top: var(--lumo-space-m);\n  }\n\n  :host([required]) [part='required-indicator']::after {\n    content: var(--lumo-required-field-indicator, '•');\n    transition: opacity 0.2s;\n    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n    position: absolute;\n    right: 0;\n    width: 1em;\n    text-align: center;\n  }\n\n  :host([invalid]) [part='required-indicator']::after {\n    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n  }\n\n  [part='error-message'] {\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-error-text-color);\n    will-change: max-height;\n    transition: 0.4s max-height;\n    max-height: 5em;\n  }\n\n  :host([has-error-message]) [part='error-message']::before,\n  :host([has-error-message]) [part='error-message']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host(:not([invalid])) [part='error-message'] {\n    max-height: 0;\n    overflow: hidden;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='label'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n  :host([dir='rtl']) [part='label'] {\n    padding-left: 1em;\n    padding-right: 0;\n  }\n\n  :host([dir='rtl']) [part='required-indicator']::after {\n    right: auto;\n    left: 0;\n  }\n\n  :host([dir='rtl']) [part='error-message'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n\n  [part$='button'] {\n    flex: none;\n    width: 1em;\n    height: 1em;\n    line-height: 1;\n    font-size: var(--lumo-icon-size-m);\n    text-align: center;\n    color: var(--lumo-contrast-60pct);\n    transition: 0.2s color;\n    cursor: var(--lumo-clickable-cursor);\n  }\n\n  [part$='button']:hover {\n    color: var(--lumo-contrast-90pct);\n  }\n\n  :host([disabled]) [part$='button'],\n  :host([readonly]) [part$='button'] {\n    color: var(--lumo-contrast-20pct);\n    cursor: default;\n  }\n\n  [part$='button']::before {\n    font-family: 'lumo-icons';\n    display: block;\n  }\n\n\n  :host([has-helper]) [part='helper-text']::before {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  [part='helper-text'] {\n    display: block;\n    color: var(--lumo-secondary-text-color);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n  }\n\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([disabled]) [part='helper-text'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {\n    display: none;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] {\n    order: 0;\n    padding-bottom: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {\n    order: 1;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {\n    order: 2;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {\n    order: 3;\n  }\n\n\n  :host {\n    --lumo-text-field-size: var(--lumo-size-m);\n    color: var(--lumo-body-text-color);\n    font-size: var(--lumo-font-size-m);\n    font-family: var(--lumo-font-family);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    padding: var(--lumo-space-xs) 0;\n  }\n\n  :host::before {\n    height: var(--lumo-text-field-size);\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n  }\n\n  :host([focused]:not([readonly])) [part='label'] {\n    color: var(--lumo-primary-text-color);\n  }\n\n  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n\n  ::slotted(:is(input, textarea):placeholder-shown) {\n    color: var(--lumo-secondary-text-color);\n  }\n\n  /* Hover */\n  :host(:hover:not([readonly]):not([focused])) [part='label'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {\n    opacity: 0.1;\n  }\n\n  /* Touch device adjustment */\n  @media (pointer: coarse) {\n    :host(:hover:not([readonly]):not([focused])) [part='label'] {\n      color: var(--lumo-secondary-text-color);\n    }\n\n    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {\n      opacity: 0;\n    }\n\n    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {\n      opacity: 0.2;\n    }\n  }\n\n  /* Trigger when not focusing using the keyboard */\n  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {\n    transform: scaleX(0);\n    transition-duration: 0.15s, 1s;\n  }\n\n  /* Focus-ring */\n  :host([focus-ring]) [part='input-field'] {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  /* Read-only and disabled */\n  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {\n    opacity: 0;\n  }\n\n  /* Disabled style */\n  :host([disabled]) {\n    pointer-events: none;\n  }\n\n  :host([disabled]) [part='label'],\n  :host([disabled]) [part='input-field'] ::slotted(*) {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  /* Invalid style */\n  :host([invalid][focus-ring]) [part='input-field'] {\n    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n  }\n\n  :host([input-prevented]) [part='input-field'] {\n    animation: shake 0.15s infinite;\n  }\n\n  @keyframes shake {\n    25% {\n      transform: translateX(4px);\n    }\n    75% {\n      transform: translateX(-4px);\n    }\n  }\n\n  /* Small theme */\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-text-field-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='small']) [part='label'] {\n    font-size: var(--lumo-font-size-xs);\n  }\n\n  :host([theme~='small']) [part='error-message'] {\n    font-size: var(--lumo-font-size-xxs);\n  }\n\n  /* Slotted content */\n  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {\n    color: var(--lumo-secondary-text-color);\n    font-weight: 400;\n  }\n\n  [part='clear-button']::before {\n    content: var(--lumo-icons-cross);\n  }\n\n\n  :host(:not([theme*='align'])) ::slotted([slot='value']) {\n    text-align: start;\n  }\n\n  [part='input-field'] {\n    cursor: var(--lumo-clickable-cursor);\n  }\n\n  [part='input-field'] ::slotted([slot='value']) {\n    font-weight: 500;\n  }\n\n  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {\n    color: var(--lumo-secondary-text-color);\n  }\n\n  /* placeholder styles */\n  [part='input-field'] ::slotted([slot='value'][placeholder]) {\n    color: inherit;\n    transition: opacity 0.175s 0.1s;\n    opacity: 0.5;\n  }\n\n  [part='toggle-button']::before {\n    content: var(--lumo-icons-dropdown);\n  }\n\n  /* Highlight the toggle button when hovering over the entire component */\n  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {\n    color: var(--lumo-contrast-80pct);\n  }\n\n  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {\n    --_lumo-selected-item-height: var(--lumo-size-s);\n    --_lumo-selected-item-padding: 0;\n  }\n</style>`,
});

export const Select = createVaadinComponent<SelectClass, typeof SelectEvents>(
  "vaadin-select",
  SelectProperties,
  SelectEvents,
  () => import("@vaadin/select/vaadin-select"),
  "Select",
  undefined,
  getSelectPreRenderConfig
);
