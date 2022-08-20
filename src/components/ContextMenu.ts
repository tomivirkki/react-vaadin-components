// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

import React from "react";

import type * as ContextMenuElement from "@vaadin/context-menu/vaadin-context-menu";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type ContextMenuClass = ContextMenuElement.ContextMenu;

type ContextMenuEventMap = ContextMenuElement.ContextMenuEventMap;

const ContextMenuEventMapper = eventMapper<ContextMenuEventMap>();
const ContextMenuEvents = {
  ...ContextMenuEventMapper("onOpenedChanged", "opened-changed"),
  ...ContextMenuEventMapper("onItemSelected", "item-selected"),
};

const ContextMenuProperties = {
  selector: "",
  opened: "",
  openOn: "",
  listenOn: "",
  closeOn: "",
  renderer: "",
  version: "",
  items: "",
};

const getContextMenuPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n\n      <slot id="slot"></slot>\n\n      <vaadin-context-menu-overlay id="overlay" end-aligned="" right-aligned="" bottom-aligned="">\n      <template shadowroot="open">\n      <style>\n        :host {\n          z-index: 200;\n          position: fixed;\n\n          /* Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part. */\n\n          /* Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport. */\n          top: 0;\n          right: 0;\n          bottom: var(--vaadin-overlay-viewport-bottom);\n          left: 0;\n\n          /* Use flexbox alignment for the overlay part. */\n          display: flex;\n          flex-direction: column; /* makes dropdowns sizing easier */\n          /* Align to center by default. */\n          align-items: center;\n          justify-content: center;\n\n          /* Allow centering when max-width/max-height applies. */\n          margin: auto;\n\n          /* The host is not clickable, only the overlay part is. */\n          pointer-events: none;\n\n          /* Remove tap highlight on touch devices. */\n          -webkit-tap-highlight-color: transparent;\n\n          /* CSS API for host */\n          --vaadin-overlay-viewport-bottom: 0;\n        }\n\n        :host([hidden]),\n        :host(:not([opened]):not([closing])) {\n          display: none !important;\n        }\n\n        [part='overlay'] {\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          pointer-events: auto;\n\n          /* Prevent overflowing the host in MSIE 11 */\n          max-width: 100%;\n          box-sizing: border-box;\n\n          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n        }\n\n        [part='backdrop'] {\n          z-index: -1;\n          content: '';\n          background: rgba(0, 0, 0, 0.5);\n          position: fixed;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          pointer-events: auto;\n        }\n      </style>\n\n      <div id="backdrop" part="backdrop" hidden=""></div>\n      <div part="overlay" id="overlay" tabindex="0">\n        <div part="content" id="content">\n          <slot></slot>\n        </div>\n      </div>\n    <style>\n    :host {\n      align-items: flex-start;\n      justify-content: flex-start;\n    }\n\n    :host([right-aligned]),\n    :host([end-aligned]) {\n      align-items: flex-end;\n    }\n\n    :host([bottom-aligned]) {\n      justify-content: flex-end;\n    }\n\n    [part='overlay'] {\n      background-color: #fff;\n    }\n  \n\n  :host {\n    top: var(--lumo-space-m);\n    right: var(--lumo-space-m);\n    bottom: var(--lumo-space-m);\n    left: var(--lumo-space-m);\n    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n    /* stylelint-disable-next-line */\n    outline: 0px solid transparent;\n  }\n\n  [part='overlay'] {\n    background-color: var(--lumo-base-color);\n    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n    color: var(--lumo-body-text-color);\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 400;\n    line-height: var(--lumo-line-height-m);\n    letter-spacing: 0;\n    text-transform: none;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  [part='content'] {\n    padding: var(--lumo-space-xs);\n  }\n\n  [part='backdrop'] {\n    background-color: var(--lumo-shade-20pct);\n    animation: 0.2s lumo-overlay-backdrop-enter both;\n    will-change: opacity;\n  }\n\n  @keyframes lumo-overlay-backdrop-enter {\n    0% {\n      opacity: 0;\n    }\n  }\n\n  :host([closing]) [part='backdrop'] {\n    animation: 0.2s lumo-overlay-backdrop-exit both;\n  }\n\n  @keyframes lumo-overlay-backdrop-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n  @keyframes lumo-overlay-dummy-animation {\n    0% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  }\n\n\n  :host([opening]),\n  :host([closing]) {\n    animation: 0.14s lumo-overlay-dummy-animation;\n  }\n\n  [part='overlay'] {\n    will-change: opacity, transform;\n  }\n\n  :host([opening]) [part='overlay'] {\n    animation: 0.1s lumo-menu-overlay-enter ease-out both;\n  }\n\n  @keyframes lumo-menu-overlay-enter {\n    0% {\n      opacity: 0;\n      transform: translateY(-4px);\n    }\n  }\n\n  :host([closing]) [part='overlay'] {\n    animation: 0.1s lumo-menu-overlay-exit both;\n  }\n\n  @keyframes lumo-menu-overlay-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n\n  /* Small viewport (bottom sheet) styles */\n  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */\n  @media (max-width: 420px), (max-height: 420px) {\n    :host {\n      top: 0 !important;\n      right: 0 !important;\n      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n      left: 0 !important;\n      align-items: stretch !important;\n      justify-content: flex-end !important;\n    }\n\n    [part='overlay'] {\n      max-height: 50vh;\n      width: 100vw;\n      border-radius: 0;\n      box-shadow: var(--lumo-box-shadow-xl);\n    }\n\n    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n    [part='content'] {\n      padding: 30px var(--lumo-space-m);\n      max-height: inherit;\n      box-sizing: border-box;\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n    }\n\n    [part='backdrop'] {\n      display: block;\n    }\n\n    /* Animations */\n\n    :host([opening]) [part='overlay'] {\n      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;\n    }\n\n    :host([closing]),\n    :host([closing]) [part='backdrop'] {\n      animation-delay: 0.14s;\n    }\n\n    :host([closing]) [part='overlay'] {\n      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;\n    }\n  }\n\n  @keyframes lumo-mobile-menu-overlay-enter {\n    0% {\n      transform: translateY(150%);\n    }\n  }\n\n  @keyframes lumo-mobile-menu-overlay-exit {\n    100% {\n      transform: translateY(150%);\n    }\n  }\n\n\n  :host([phone]) {\n    top: 0 !important;\n    right: 0 !important;\n    bottom: var(--vaadin-overlay-viewport-bottom) !important;\n    left: 0 !important;\n    align-items: stretch;\n    justify-content: flex-end;\n  }\n\n  /* TODO These style overrides should not be needed.\n   We should instead offer a way to have non-selectable items inside the context menu. */\n\n  :host {\n    --_lumo-list-box-item-selected-icon-display: none;\n    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);\n  }\n\n  [part='overlay'] {\n    outline: none;\n  }\n</style></template></vaadin-context-menu-overlay>\n    `,
});

export const ContextMenu = createVaadinComponent<
  ContextMenuClass,
  typeof ContextMenuEvents
>(
  "vaadin-context-menu",
  ContextMenuProperties,
  ContextMenuEvents,
  () => import("@vaadin/context-menu/vaadin-context-menu"),
  "ContextMenu",
  undefined,
  getContextMenuPreRenderConfig
);

export { ContextMenuElement };
