// Generated file. Do not edit.

import React from "react";

import type * as MessageInputElement from "@vaadin/message-input/vaadin-message-input";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type MessageInputClass = MessageInputElement.MessageInput;

const MessageInputEvents = {};

const MessageInputProperties = {
  value: "",
  i18n: "",
  disabled: "",
  version: "",
};

const getMessageInputPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          align-items: flex-start;\n          box-sizing: border-box;\n          display: flex;\n          max-height: 50vh;\n          overflow: hidden;\n          flex-shrink: 0;\n        }\n      </style>\n      <vaadin-message-input-text-area placeholder="Message"><label slot="label" id="label-vaadin-message-input-text-area-0" for="textarea-vaadin-message-input-text-area-3"></label><div slot="error-message" id="error-message-vaadin-message-input-text-area-2" hidden=""></div><textarea slot="textarea" id="textarea-vaadin-message-input-text-area-3" rows="1" aria-label="Message" placeholder="Message" style="min-height: 0px; height: auto;"></textarea><template shadowroot="open">\n      <style>\n        :host {\n          animation: 1ms vaadin-text-area-appear;\n        }\n\n        .vaadin-text-area-container {\n          flex: auto;\n        }\n\n        /* The label, helper text and the error message should neither grow nor shrink. */\n        [part='label'],\n        [part='helper-text'],\n        [part='error-message'] {\n          flex: none;\n        }\n\n        [part='input-field'] {\n          flex: auto;\n          overflow: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        ::slotted(textarea) {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          flex: auto;\n          overflow: hidden;\n          width: 100%;\n          height: 100%;\n          outline: none;\n          resize: none;\n          margin: 0;\n          padding: 0 0.25em;\n          border: 0;\n          border-radius: 0;\n          min-width: 0;\n          font: inherit;\n          font-size: 1em;\n          line-height: normal;\n          color: inherit;\n          background-color: transparent;\n          /* Disable default invalid style in Firefox */\n          box-shadow: none;\n        }\n\n        /* Override styles from <vaadin-input-container> */\n        [part='input-field'] ::slotted(textarea) {\n          align-self: stretch;\n          white-space: pre-wrap;\n        }\n\n        [part='input-field'] ::slotted(:not(textarea)) {\n          align-self: flex-start;\n        }\n\n        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */\n        :host([disabled]) ::slotted(textarea) {\n          user-select: none;\n        }\n\n        @keyframes vaadin-text-area-appear {\n          to {\n            opacity: 1;\n          }\n        }\n      </style>\n\n      <div class="vaadin-text-area-container">\n        <div part="label">\n          <slot name="label"></slot>\n          <span part="required-indicator" aria-hidden="true"></span>\n        </div>\n\n        <vaadin-input-container part="input-field" style="--_text-area-vertical-scroll-position:0px;">\n          <slot name="prefix" slot="prefix"></slot>\n          <slot name="textarea"></slot>\n          <slot name="suffix" slot="suffix"></slot>\n          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>\n        <template shadowroot="open">\n      <style>\n        :host {\n          display: flex;\n          align-items: center;\n          flex: 0 1 auto;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Reset the native input styles */\n        ::slotted(input) {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          flex: auto;\n          white-space: nowrap;\n          overflow: hidden;\n          width: 100%;\n          height: 100%;\n          outline: none;\n          margin: 0;\n          padding: 0;\n          border: 0;\n          border-radius: 0;\n          min-width: 0;\n          font: inherit;\n          line-height: normal;\n          color: inherit;\n          background-color: transparent;\n          /* Disable default invalid style in Firefox */\n          box-shadow: none;\n        }\n\n        ::slotted(*) {\n          flex: none;\n        }\n\n        ::slotted(:is(input, textarea))::placeholder {\n          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */\n          /* because ::slotted(...)::placeholder does not work in Safari. */\n          /* See the workaround at the end of this file. */\n          font: inherit;\n          color: inherit;\n          /* Override default opacity in Firefox */\n          opacity: 1;\n        }\n      </style>\n      <slot name="prefix"></slot>\n      <slot></slot>\n      <slot name="suffix"></slot>\n    <style>\n    :host {\n      border-radius: var(--lumo-border-radius-m);\n      background-color: var(--lumo-contrast-10pct);\n      padding: 0 calc(0.375em + var(--lumo-border-radius-m) / 4 - 1px);\n      font-weight: 500;\n      line-height: 1;\n      position: relative;\n      cursor: text;\n      box-sizing: border-box;\n    }\n\n    /* Used for hover and activation effects */\n    :host::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      border-radius: inherit;\n      pointer-events: none;\n      background-color: var(--lumo-contrast-50pct);\n      opacity: 0;\n      transition: transform 0.15s, opacity 0.2s;\n      transform-origin: 100% 0;\n    }\n\n    ::slotted(:not([slot$='fix'])) {\n      cursor: inherit;\n      min-height: var(--lumo-text-field-size, var(--lumo-size-m));\n      padding: 0 0.25em;\n      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      mask-image: var(--_lumo-text-field-overflow-mask-image);\n    }\n\n    /* Read-only */\n    :host([readonly]) {\n      color: var(--lumo-secondary-text-color);\n      background-color: transparent;\n      cursor: default;\n    }\n\n    :host([readonly])::after {\n      background-color: transparent;\n      opacity: 1;\n      border: 1px dashed var(--lumo-contrast-30pct);\n    }\n\n    /* Disabled */\n    :host([disabled]) {\n      background-color: var(--lumo-contrast-5pct);\n    }\n\n    :host([disabled]) ::slotted(*) {\n      color: var(--lumo-disabled-text-color);\n      -webkit-text-fill-color: var(--lumo-disabled-text-color);\n    }\n\n    /* Invalid */\n    :host([invalid]) {\n      background-color: var(--lumo-error-color-10pct);\n    }\n\n    :host([invalid])::after {\n      background-color: var(--lumo-error-color-50pct);\n    }\n\n    /* Slotted icons */\n    ::slotted(iron-icon),\n    ::slotted(vaadin-icon) {\n      color: var(--lumo-contrast-60pct);\n      width: var(--lumo-icon-size-m);\n      height: var(--lumo-icon-size-m);\n    }\n\n    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n    ::slotted(iron-icon[icon^='vaadin:']),\n    ::slotted(vaadin-icon[icon^='vaadin:']) {\n      padding: 0.25em;\n      box-sizing: border-box !important;\n    }\n\n    /* Text align */\n    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);\n    }\n\n    @-moz-document url-prefix() {\n      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n    }\n\n    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {\n      text-align: start;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {\n      text-align: center;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {\n      text-align: end;\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    /* RTL specific styles */\n    :host([dir='rtl'])::after {\n      transform-origin: 0% 0;\n    }\n\n    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n      --_lumo-text-field-overflow-mask-image: none;\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n      }\n    }\n\n    @-moz-document url-prefix() {\n      /* Firefox is smart enough to align overflowing text to right */\n      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);\n      }\n    }\n  </style></template></vaadin-input-container>\n\n        <div part="helper-text">\n          <slot name="helper"></slot>\n        </div>\n\n        <div part="error-message">\n          <slot name="error-message"></slot>\n        </div>\n      </div>\n    <style>\n  :host {\n    display: inline-flex;\n    outline: none;\n  }\n\n  :host::before {\n    content: '\\2003';\n    width: 0;\n    display: inline-block;\n    /* Size and position this element on the same vertical position as the input-field element\n          to make vertical align for the host element work as expected */\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:not([has-label])) [part='label'] {\n    display: none;\n  }\n\n\n  [class$='container'] {\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    max-width: 100%;\n    width: var(--vaadin-field-default-width, 12em);\n  }\n\n\n  [part='clear-button'] {\n    display: none;\n    cursor: default;\n  }\n\n  [part='clear-button']::before {\n    content: '✕';\n  }\n\n  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {\n    display: block;\n  }\n\n\n  [part='label'] {\n    align-self: flex-start;\n    color: var(--lumo-secondary-text-color);\n    font-weight: 500;\n    font-size: var(--lumo-font-size-s);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n    line-height: 1;\n    padding-right: 1em;\n    padding-bottom: 0.5em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    position: relative;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n\n  :host([has-label])::before {\n    margin-top: calc(var(--lumo-font-size-s) * 1.5);\n  }\n\n  :host([has-label][theme~='small'])::before {\n    margin-top: calc(var(--lumo-font-size-xs) * 1.5);\n  }\n\n  :host([has-label]) {\n    padding-top: var(--lumo-space-m);\n  }\n\n  :host([required]) [part='required-indicator']::after {\n    content: var(--lumo-required-field-indicator, '•');\n    transition: opacity 0.2s;\n    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));\n    position: absolute;\n    right: 0;\n    width: 1em;\n    text-align: center;\n  }\n\n  :host([invalid]) [part='required-indicator']::after {\n    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));\n  }\n\n  [part='error-message'] {\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-error-text-color);\n    will-change: max-height;\n    transition: 0.4s max-height;\n    max-height: 5em;\n  }\n\n  :host([has-error-message]) [part='error-message']::before,\n  :host([has-error-message]) [part='error-message']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host(:not([invalid])) [part='error-message'] {\n    max-height: 0;\n    overflow: hidden;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='label'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n  :host([dir='rtl']) [part='label'] {\n    padding-left: 1em;\n    padding-right: 0;\n  }\n\n  :host([dir='rtl']) [part='required-indicator']::after {\n    right: auto;\n    left: 0;\n  }\n\n  :host([dir='rtl']) [part='error-message'] {\n    margin-left: 0;\n    margin-right: calc(var(--lumo-border-radius-m) / 4);\n  }\n\n\n  [part$='button'] {\n    flex: none;\n    width: 1em;\n    height: 1em;\n    line-height: 1;\n    font-size: var(--lumo-icon-size-m);\n    text-align: center;\n    color: var(--lumo-contrast-60pct);\n    transition: 0.2s color;\n    cursor: var(--lumo-clickable-cursor);\n  }\n\n  [part$='button']:hover {\n    color: var(--lumo-contrast-90pct);\n  }\n\n  :host([disabled]) [part$='button'],\n  :host([readonly]) [part$='button'] {\n    color: var(--lumo-contrast-20pct);\n    cursor: default;\n  }\n\n  [part$='button']::before {\n    font-family: 'lumo-icons';\n    display: block;\n  }\n\n\n  :host([has-helper]) [part='helper-text']::before {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  [part='helper-text'] {\n    display: block;\n    color: var(--lumo-secondary-text-color);\n    font-size: var(--lumo-font-size-xs);\n    line-height: var(--lumo-line-height-xs);\n    margin-left: calc(var(--lumo-border-radius-m) / 4);\n    transition: color 0.2s;\n  }\n\n  :host(:hover:not([readonly])) [part='helper-text'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host([disabled]) [part='helper-text'] {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {\n    display: none;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {\n    content: '';\n    display: block;\n    height: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] {\n    order: 0;\n    padding-bottom: 0.4em;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {\n    order: 1;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {\n    order: 2;\n  }\n\n  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {\n    order: 3;\n  }\n\n\n  :host {\n    --lumo-text-field-size: var(--lumo-size-m);\n    color: var(--lumo-body-text-color);\n    font-size: var(--lumo-font-size-m);\n    font-family: var(--lumo-font-family);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    padding: var(--lumo-space-xs) 0;\n  }\n\n  :host::before {\n    height: var(--lumo-text-field-size);\n    box-sizing: border-box;\n    display: inline-flex;\n    align-items: center;\n  }\n\n  :host([focused]:not([readonly])) [part='label'] {\n    color: var(--lumo-primary-text-color);\n  }\n\n  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n\n  ::slotted(:is(input, textarea):placeholder-shown) {\n    color: var(--lumo-secondary-text-color);\n  }\n\n  /* Hover */\n  :host(:hover:not([readonly]):not([focused])) [part='label'] {\n    color: var(--lumo-body-text-color);\n  }\n\n  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {\n    opacity: 0.1;\n  }\n\n  /* Touch device adjustment */\n  @media (pointer: coarse) {\n    :host(:hover:not([readonly]):not([focused])) [part='label'] {\n      color: var(--lumo-secondary-text-color);\n    }\n\n    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {\n      opacity: 0;\n    }\n\n    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {\n      opacity: 0.2;\n    }\n  }\n\n  /* Trigger when not focusing using the keyboard */\n  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {\n    transform: scaleX(0);\n    transition-duration: 0.15s, 1s;\n  }\n\n  /* Focus-ring */\n  :host([focus-ring]) [part='input-field'] {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  /* Read-only and disabled */\n  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {\n    opacity: 0;\n  }\n\n  /* Disabled style */\n  :host([disabled]) {\n    pointer-events: none;\n  }\n\n  :host([disabled]) [part='label'],\n  :host([disabled]) [part='input-field'] ::slotted(*) {\n    color: var(--lumo-disabled-text-color);\n    -webkit-text-fill-color: var(--lumo-disabled-text-color);\n  }\n\n  /* Invalid style */\n  :host([invalid][focus-ring]) [part='input-field'] {\n    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n  }\n\n  :host([input-prevented]) [part='input-field'] {\n    animation: shake 0.15s infinite;\n  }\n\n  @keyframes shake {\n    25% {\n      transform: translateX(4px);\n    }\n    75% {\n      transform: translateX(-4px);\n    }\n  }\n\n  /* Small theme */\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-text-field-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='small']) [part='label'] {\n    font-size: var(--lumo-font-size-xs);\n  }\n\n  :host([theme~='small']) [part='error-message'] {\n    font-size: var(--lumo-font-size-xxs);\n  }\n\n  /* Slotted content */\n  [part='input-field'] ::slotted(:not(iron-icon):not(vaadin-icon):not(input):not(textarea)) {\n    color: var(--lumo-secondary-text-color);\n    font-weight: 400;\n  }\n\n  [part='clear-button']::before {\n    content: var(--lumo-icons-cross);\n  }\n\n\n  [part='input-field'],\n  [part='input-field'] ::slotted(textarea) {\n    height: auto;\n    box-sizing: border-box;\n  }\n\n  [part='input-field'] {\n    /* Equal to the implicit padding in vaadin-text-field */\n    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);\n    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);\n    transition: background-color 0.1s;\n    line-height: var(--lumo-line-height-s);\n  }\n\n  :host(:not([readonly])) [part='input-field']::after {\n    display: none;\n  }\n\n  :host([readonly]) [part='input-field'] {\n    border: 1px dashed var(--lumo-contrast-30pct);\n  }\n\n  :host([readonly]) [part='input-field']::after {\n    border: none;\n  }\n\n  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {\n    background-color: var(--lumo-contrast-20pct);\n  }\n\n  @media (pointer: coarse) {\n    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {\n      background-color: var(--lumo-contrast-10pct);\n    }\n\n    :host(:active:not([readonly]):not([focused])) [part='input-field'] {\n      background-color: var(--lumo-contrast-20pct);\n    }\n  }\n\n  [part='input-field'] ::slotted(textarea) {\n    line-height: inherit;\n    --_lumo-text-field-overflow-mask-image: none;\n  }\n\n  /* Vertically align icon prefix/suffix with the first line of text */\n  [part='input-field'] ::slotted(iron-icon),\n  [part='input-field'] ::slotted(vaadin-icon) {\n    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);\n  }\n\n\n    :host {\n      align-self: stretch;\n      flex-grow: 1;\n    }\n\n    .textarea-wrapper {\n      min-height: 0;\n    }\n  \n\n    :host {\n      margin: 0 var(--lumo-space-s) 0 0;\n    }\n\n    :host([dir='rtl']) {\n      margin: 0 0 0 var(--lumo-space-s);\n    }\n  </style></template></vaadin-message-input-text-area>\n      <vaadin-message-input-button theme="primary contained" tabindex="0" role="button">Send<template shadowroot="open">\n      <style>\n        :host {\n          display: inline-block;\n          position: relative;\n          outline: none;\n          white-space: nowrap;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          user-select: none;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Aligns the button with form fields when placed on the same line.\n          Note, to make it work, the form fields should have the same "::before" pseudo-element. */\n        .vaadin-button-container::before {\n          content: '\\2003';\n          display: inline-block;\n          width: 0;\n          max-height: 100%;\n        }\n\n        .vaadin-button-container {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          width: 100%;\n          height: 100%;\n          min-height: inherit;\n          text-shadow: inherit;\n        }\n\n        [part='prefix'],\n        [part='suffix'] {\n          flex: none;\n        }\n\n        [part='label'] {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      </style>\n      <div class="vaadin-button-container">\n        <span part="prefix">\n          <slot name="prefix"></slot>\n        </span>\n        <span part="label">\n          <slot></slot>\n        </span>\n        <span part="suffix">\n          <slot name="suffix"></slot>\n        </span>\n      </div>\n    <style>\n  :host {\n    /* Sizing */\n    --lumo-button-size: var(--lumo-size-m);\n    min-width: calc(var(--lumo-button-size) * 2);\n    height: var(--lumo-button-size);\n    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);\n    margin: var(--lumo-space-xs) 0;\n    box-sizing: border-box;\n    /* Style */\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 500;\n    color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    cursor: var(--lumo-clickable-cursor);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Set only for the internal parts so we don’t affect the host vertical alignment */\n  [part='label'],\n  [part='prefix'],\n  [part='suffix'] {\n    line-height: var(--lumo-line-height-xs);\n  }\n\n  [part='label'] {\n    padding: calc(var(--lumo-button-size) / 6) 0;\n  }\n\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-button-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='large']) {\n    font-size: var(--lumo-font-size-l);\n    --lumo-button-size: var(--lumo-size-l);\n  }\n\n  /* For interaction states */\n  :host::before,\n  :host::after {\n    content: '';\n    /* We rely on the host always being relative */\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: currentColor;\n    border-radius: inherit;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  /* Hover */\n\n  @media (any-hover: hover) {\n    :host(:hover)::before {\n      opacity: 0.02;\n    }\n  }\n\n  /* Active */\n\n  :host::after {\n    transition: opacity 1.4s, transform 0.1s;\n    filter: blur(8px);\n  }\n\n  :host([active])::before {\n    opacity: 0.05;\n    transition-duration: 0s;\n  }\n\n  :host([active])::after {\n    opacity: 0.1;\n    transition-duration: 0s, 0s;\n    transform: scale(0);\n  }\n\n  /* Keyboard focus */\n\n  :host([focus-ring]) {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  :host([theme~='primary'][focus-ring]) {\n    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n  }\n\n  /* Types (primary, tertiary, tertiary-inline */\n\n  :host([theme~='tertiary']),\n  :host([theme~='tertiary-inline']) {\n    background-color: transparent !important;\n    min-width: 0;\n  }\n\n  :host([theme~='tertiary']) {\n    padding: 0 calc(var(--lumo-button-size) / 6);\n  }\n\n  :host([theme~='tertiary-inline'])::before {\n    display: none;\n  }\n\n  :host([theme~='tertiary-inline']) {\n    margin: 0;\n    height: auto;\n    padding: 0;\n    line-height: inherit;\n    font-size: inherit;\n  }\n\n  :host([theme~='tertiary-inline']) [part='label'] {\n    padding: 0;\n    overflow: visible;\n    line-height: inherit;\n  }\n\n  :host([theme~='primary']) {\n    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n    font-weight: 600;\n    min-width: calc(var(--lumo-button-size) * 2.5);\n  }\n\n  :host([theme~='primary'])::before {\n    background-color: black;\n  }\n\n  @media (any-hover: hover) {\n    :host([theme~='primary']:hover)::before {\n      opacity: 0.05;\n    }\n  }\n\n  :host([theme~='primary'][active])::before {\n    opacity: 0.1;\n  }\n\n  :host([theme~='primary'][active])::after {\n    opacity: 0.2;\n  }\n\n  /* Colors (success, error, contrast) */\n\n  :host([theme~='success']) {\n    color: var(--lumo-success-text-color);\n  }\n\n  :host([theme~='success'][theme~='primary']) {\n    background-color: var(--lumo-success-color);\n    color: var(--lumo-success-contrast-color);\n  }\n\n  :host([theme~='error']) {\n    color: var(--lumo-error-text-color);\n  }\n\n  :host([theme~='error'][theme~='primary']) {\n    background-color: var(--lumo-error-color);\n    color: var(--lumo-error-contrast-color);\n  }\n\n  :host([theme~='contrast']) {\n    color: var(--lumo-contrast);\n  }\n\n  :host([theme~='contrast'][theme~='primary']) {\n    background-color: var(--lumo-contrast);\n    color: var(--lumo-base-color);\n  }\n\n  /* Disabled state. Keep selectors after other color variants. */\n\n  :host([disabled]) {\n    pointer-events: none;\n    color: var(--lumo-disabled-text-color);\n  }\n\n  :host([theme~='primary'][disabled]) {\n    background-color: var(--lumo-contrast-30pct);\n    color: var(--lumo-base-color);\n  }\n\n  :host([theme~='primary'][disabled]) [part] {\n    opacity: 0.7;\n  }\n\n  /* Icons */\n\n  [part] ::slotted(vaadin-icon),\n  [part] ::slotted(iron-icon) {\n    display: inline-block;\n    width: var(--lumo-icon-size-m);\n    height: var(--lumo-icon-size-m);\n  }\n\n  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n  [part] ::slotted(vaadin-icon[icon^='vaadin:']),\n  [part] ::slotted(iron-icon[icon^='vaadin:']) {\n    padding: 0.25em;\n    box-sizing: border-box !important;\n  }\n\n  [part='prefix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  [part='suffix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  /* Icon-only */\n\n  :host([theme~='icon']:not([theme~='tertiary-inline'])) {\n    min-width: var(--lumo-button-size);\n    padding-left: calc(var(--lumo-button-size) / 4);\n    padding-right: calc(var(--lumo-button-size) / 4);\n  }\n\n  :host([theme~='icon']) [part='prefix'],\n  :host([theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='prefix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  :host([dir='rtl']) [part='suffix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  :host([dir='rtl'][theme~='icon']) [part='prefix'],\n  :host([dir='rtl'][theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n\n    :host {\n      flex-shrink: 0;\n    }\n  </style></template></vaadin-message-input-button>\n    <style>\n    :host {\n      padding: var(--lumo-space-s) var(--lumo-space-m);\n    }\n  </style>`,
});

export const MessageInput = createVaadinComponent<
  MessageInputClass,
  typeof MessageInputEvents
>(
  "vaadin-message-input",
  MessageInputProperties,
  MessageInputEvents,
  () => import("@vaadin/message-input/vaadin-message-input.js"),
  "MessageInput",
  undefined,
  getMessageInputPreRenderConfig
);

export { MessageInputElement };
