// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

import React from "react";

import type * as UploadElement from "@vaadin/upload/vaadin-upload";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type UploadClass = UploadElement.Upload;

type UploadEventMap = UploadElement.UploadEventMap;

const UploadEventMapper = eventMapper<UploadEventMap>();
const UploadEvents = {
  ...UploadEventMapper("onFileReject", "file-reject"),
  ...UploadEventMapper("onFilesChanged", "files-changed"),
  ...UploadEventMapper("onMaxFilesReachedChanged", "max-files-reached-changed"),
  ...UploadEventMapper("onUploadBefore", "upload-before"),
  ...UploadEventMapper("onUploadStart", "upload-start"),
  ...UploadEventMapper("onUploadProgress", "upload-progress"),
  ...UploadEventMapper("onUploadSuccess", "upload-success"),
  ...UploadEventMapper("onUploadError", "upload-error"),
  ...UploadEventMapper("onUploadRequest", "upload-request"),
  ...UploadEventMapper("onUploadResponse", "upload-response"),
  ...UploadEventMapper("onUploadRetry", "upload-retry"),
  ...UploadEventMapper("onUploadAbort", "upload-abort"),
};

const UploadProperties = {
  nodrop: "",
  target: "",
  method: "",
  headers: "",
  timeout: "",
  files: "",
  maxFiles: "",
  maxFilesReached: "",
  accept: "",
  maxFileSize: "",
  formDataName: "",
  noAuto: "",
  withCredentials: "",
  capture: "",
  i18n: "",
  version: "",
};

const getUploadPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n          position: relative;\n          box-sizing: border-box;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        [part='file-list'] {\n          padding: 0;\n          margin: 0;\n          list-style-type: none;\n        }\n      </style>\n\n      <div part="primary-buttons">\n        <div id="addFiles">\n          <slot name="add-button">\n            <vaadin-button part="upload-button" id="addButton" tabindex="0" role="button">\n              Upload Files...\n            <template shadowroot="open">\n      <style>\n        :host {\n          display: inline-block;\n          position: relative;\n          outline: none;\n          white-space: nowrap;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          user-select: none;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Aligns the button with form fields when placed on the same line.\n          Note, to make it work, the form fields should have the same "::before" pseudo-element. */\n        .vaadin-button-container::before {\n          content: '\\2003';\n          display: inline-block;\n          width: 0;\n          max-height: 100%;\n        }\n\n        .vaadin-button-container {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          width: 100%;\n          height: 100%;\n          min-height: inherit;\n          text-shadow: inherit;\n        }\n\n        [part='prefix'],\n        [part='suffix'] {\n          flex: none;\n        }\n\n        [part='label'] {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      </style>\n      <div class="vaadin-button-container">\n        <span part="prefix">\n          <slot name="prefix"></slot>\n        </span>\n        <span part="label">\n          <slot></slot>\n        </span>\n        <span part="suffix">\n          <slot name="suffix"></slot>\n        </span>\n      </div>\n    <style>\n  :host {\n    /* Sizing */\n    --lumo-button-size: var(--lumo-size-m);\n    min-width: calc(var(--lumo-button-size) * 2);\n    height: var(--lumo-button-size);\n    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);\n    margin: var(--lumo-space-xs) 0;\n    box-sizing: border-box;\n    /* Style */\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 500;\n    color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    cursor: var(--lumo-clickable-cursor);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Set only for the internal parts so we don’t affect the host vertical alignment */\n  [part='label'],\n  [part='prefix'],\n  [part='suffix'] {\n    line-height: var(--lumo-line-height-xs);\n  }\n\n  [part='label'] {\n    padding: calc(var(--lumo-button-size) / 6) 0;\n  }\n\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-button-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='large']) {\n    font-size: var(--lumo-font-size-l);\n    --lumo-button-size: var(--lumo-size-l);\n  }\n\n  /* For interaction states */\n  :host::before,\n  :host::after {\n    content: '';\n    /* We rely on the host always being relative */\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: currentColor;\n    border-radius: inherit;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  /* Hover */\n\n  @media (any-hover: hover) {\n    :host(:hover)::before {\n      opacity: 0.02;\n    }\n  }\n\n  /* Active */\n\n  :host::after {\n    transition: opacity 1.4s, transform 0.1s;\n    filter: blur(8px);\n  }\n\n  :host([active])::before {\n    opacity: 0.05;\n    transition-duration: 0s;\n  }\n\n  :host([active])::after {\n    opacity: 0.1;\n    transition-duration: 0s, 0s;\n    transform: scale(0);\n  }\n\n  /* Keyboard focus */\n\n  :host([focus-ring]) {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  :host([theme~='primary'][focus-ring]) {\n    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n  }\n\n  /* Types (primary, tertiary, tertiary-inline */\n\n  :host([theme~='tertiary']),\n  :host([theme~='tertiary-inline']) {\n    background-color: transparent !important;\n    min-width: 0;\n  }\n\n  :host([theme~='tertiary']) {\n    padding: 0 calc(var(--lumo-button-size) / 6);\n  }\n\n  :host([theme~='tertiary-inline'])::before {\n    display: none;\n  }\n\n  :host([theme~='tertiary-inline']) {\n    margin: 0;\n    height: auto;\n    padding: 0;\n    line-height: inherit;\n    font-size: inherit;\n  }\n\n  :host([theme~='tertiary-inline']) [part='label'] {\n    padding: 0;\n    overflow: visible;\n    line-height: inherit;\n  }\n\n  :host([theme~='primary']) {\n    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n    font-weight: 600;\n    min-width: calc(var(--lumo-button-size) * 2.5);\n  }\n\n  :host([theme~='primary'])::before {\n    background-color: black;\n  }\n\n  @media (any-hover: hover) {\n    :host([theme~='primary']:hover)::before {\n      opacity: 0.05;\n    }\n  }\n\n  :host([theme~='primary'][active])::before {\n    opacity: 0.1;\n  }\n\n  :host([theme~='primary'][active])::after {\n    opacity: 0.2;\n  }\n\n  /* Colors (success, error, contrast) */\n\n  :host([theme~='success']) {\n    color: var(--lumo-success-text-color);\n  }\n\n  :host([theme~='success'][theme~='primary']) {\n    background-color: var(--lumo-success-color);\n    color: var(--lumo-success-contrast-color);\n  }\n\n  :host([theme~='error']) {\n    color: var(--lumo-error-text-color);\n  }\n\n  :host([theme~='error'][theme~='primary']) {\n    background-color: var(--lumo-error-color);\n    color: var(--lumo-error-contrast-color);\n  }\n\n  :host([theme~='contrast']) {\n    color: var(--lumo-contrast);\n  }\n\n  :host([theme~='contrast'][theme~='primary']) {\n    background-color: var(--lumo-contrast);\n    color: var(--lumo-base-color);\n  }\n\n  /* Disabled state. Keep selectors after other color variants. */\n\n  :host([disabled]) {\n    pointer-events: none;\n    color: var(--lumo-disabled-text-color);\n  }\n\n  :host([theme~='primary'][disabled]) {\n    background-color: var(--lumo-contrast-30pct);\n    color: var(--lumo-base-color);\n  }\n\n  :host([theme~='primary'][disabled]) [part] {\n    opacity: 0.7;\n  }\n\n  /* Icons */\n\n  [part] ::slotted(vaadin-icon),\n  [part] ::slotted(iron-icon) {\n    display: inline-block;\n    width: var(--lumo-icon-size-m);\n    height: var(--lumo-icon-size-m);\n  }\n\n  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n  [part] ::slotted(vaadin-icon[icon^='vaadin:']),\n  [part] ::slotted(iron-icon[icon^='vaadin:']) {\n    padding: 0.25em;\n    box-sizing: border-box !important;\n  }\n\n  [part='prefix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  [part='suffix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  /* Icon-only */\n\n  :host([theme~='icon']:not([theme~='tertiary-inline'])) {\n    min-width: var(--lumo-button-size);\n    padding-left: calc(var(--lumo-button-size) / 4);\n    padding-right: calc(var(--lumo-button-size) / 4);\n  }\n\n  :host([theme~='icon']) [part='prefix'],\n  :host([theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='prefix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  :host([dir='rtl']) [part='suffix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  :host([dir='rtl'][theme~='icon']) [part='prefix'],\n  :host([dir='rtl'][theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n</style></template></vaadin-button>\n          </slot>\n        </div>\n        <div part="drop-label" id="dropLabelContainer" aria-hidden="true">\n          <slot name="drop-label-icon">\n            <div part="drop-label-icon"></div>\n          </slot>\n          <slot name="drop-label" id="dropLabel"> Drop files here </slot>\n        </div>\n      </div>\n      <slot name="file-list">\n        <ul id="fileList" part="file-list">\n          <dom-repeat as="file" style="display: none;"><template is="dom-repeat"></template></dom-repeat>\n        </ul>\n      </slot>\n      <slot></slot>\n      <input type="file" id="fileInput" hidden="" multiple="" accept="">\n    <style>\n    :host {\n      line-height: var(--lumo-line-height-m);\n    }\n\n    :host(:not([nodrop])) {\n      overflow: hidden;\n      border: 1px dashed var(--lumo-contrast-20pct);\n      border-radius: var(--lumo-border-radius-l);\n      padding: var(--lumo-space-m);\n      transition: background-color 0.6s, border-color 0.6s;\n    }\n\n    [part='primary-buttons'] > * {\n      display: inline-block;\n      white-space: nowrap;\n    }\n\n    [part='drop-label'] {\n      display: inline-block;\n      white-space: normal;\n      padding: 0 var(--lumo-space-s);\n      color: var(--lumo-secondary-text-color);\n      font-family: var(--lumo-font-family);\n    }\n\n    :host([dragover-valid]) {\n      border-color: var(--lumo-primary-color-50pct);\n      background: var(--lumo-primary-color-10pct);\n      transition: background-color 0.1s, border-color 0.1s;\n    }\n\n    :host([dragover-valid]) [part='drop-label'] {\n      color: var(--lumo-primary-text-color);\n    }\n\n    :host([max-files-reached]) [part='drop-label'] {\n      color: var(--lumo-disabled-text-color);\n    }\n\n    [part='drop-label-icon'] {\n      display: inline-block;\n    }\n\n    [part='drop-label-icon']::before {\n      content: var(--lumo-icons-upload);\n      font-family: lumo-icons;\n      font-size: var(--lumo-icon-size-m);\n      line-height: 1;\n      vertical-align: -0.25em;\n    }\n\n    [part='file-list'] > *:not(:first-child) > * {\n      border-top: 1px solid var(--lumo-contrast-10pct);\n    }\n  </style>`,
});

export const Upload = createVaadinComponent<UploadClass, typeof UploadEvents>(
  "vaadin-upload",
  UploadProperties,
  UploadEvents,
  () => import("@vaadin/upload/vaadin-upload"),
  "Upload",
  undefined,
  getUploadPreRenderConfig
);

export { UploadElement };
