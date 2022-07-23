// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type * as MenuBarElement from "@vaadin/menu-bar/vaadin-menu-bar";
import { createVaadinComponent, eventMapper } from "../create-component";

type MenuBarClass = MenuBarElement.MenuBar;

type MenuBarEventMap = MenuBarElement.MenuBarEventMap;

const MenuBarEventMapper = eventMapper<MenuBarEventMap>();
const MenuBarEvents = {
  ...MenuBarEventMapper("onItemSelected", "item-selected"),
};

const MenuBarProperties = {
  items: "",
  i18n: "",
  disabled: "",
  openOnHover: "",
  version: "",
};

const getMenuBarPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [part='container'] {\n          position: relative;\n          display: flex;\n          width: 100%;\n          flex-wrap: nowrap;\n          overflow: hidden;\n        }\n\n        [part$='button'] {\n          flex-shrink: 0;\n        }\n\n        [part='overflow-button'] {\n          margin-right: 0;\n        }\n\n        .dots::before {\n          display: block;\n          content: '\\00B7\\00B7\\00B7';\n          font-size: inherit;\n          line-height: inherit;\n        }\n      </style>\n\n      <div part="container">\n        <vaadin-menu-bar-button part="overflow-button" hidden="" aria-label="More options" tabindex="0" role="menuitem" aria-haspopup="true" aria-expanded="false">\n          <div class="dots"></div>\n        <template shadowroot="open">\n      <style>\n        :host {\n          display: inline-block;\n          position: relative;\n          outline: none;\n          white-space: nowrap;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          user-select: none;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Aligns the button with form fields when placed on the same line.\n          Note, to make it work, the form fields should have the same "::before" pseudo-element. */\n        .vaadin-button-container::before {\n          content: '\\2003';\n          display: inline-block;\n          width: 0;\n          max-height: 100%;\n        }\n\n        .vaadin-button-container {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          width: 100%;\n          height: 100%;\n          min-height: inherit;\n          text-shadow: inherit;\n        }\n\n        [part='prefix'],\n        [part='suffix'] {\n          flex: none;\n        }\n\n        [part='label'] {\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n      </style>\n      <div class="vaadin-button-container">\n        <span part="prefix">\n          <slot name="prefix"></slot>\n        </span>\n        <span part="label">\n          <slot></slot>\n        </span>\n        <span part="suffix">\n          <slot name="suffix"></slot>\n        </span>\n      </div>\n    <style>\n    [part='label'] ::slotted(vaadin-context-menu-item) {\n      position: relative;\n      z-index: 1;\n    }\n  \n\n  :host {\n    /* Sizing */\n    --lumo-button-size: var(--lumo-size-m);\n    min-width: calc(var(--lumo-button-size) * 2);\n    height: var(--lumo-button-size);\n    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);\n    margin: var(--lumo-space-xs) 0;\n    box-sizing: border-box;\n    /* Style */\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 500;\n    color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    cursor: var(--lumo-clickable-cursor);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Set only for the internal parts so we don’t affect the host vertical alignment */\n  [part='label'],\n  [part='prefix'],\n  [part='suffix'] {\n    line-height: var(--lumo-line-height-xs);\n  }\n\n  [part='label'] {\n    padding: calc(var(--lumo-button-size) / 6) 0;\n  }\n\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-button-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='large']) {\n    font-size: var(--lumo-font-size-l);\n    --lumo-button-size: var(--lumo-size-l);\n  }\n\n  /* For interaction states */\n  :host::before,\n  :host::after {\n    content: '';\n    /* We rely on the host always being relative */\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: currentColor;\n    border-radius: inherit;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  /* Hover */\n\n  @media (any-hover: hover) {\n    :host(:hover)::before {\n      opacity: 0.02;\n    }\n  }\n\n  /* Active */\n\n  :host::after {\n    transition: opacity 1.4s, transform 0.1s;\n    filter: blur(8px);\n  }\n\n  :host([active])::before {\n    opacity: 0.05;\n    transition-duration: 0s;\n  }\n\n  :host([active])::after {\n    opacity: 0.1;\n    transition-duration: 0s, 0s;\n    transform: scale(0);\n  }\n\n  /* Keyboard focus */\n\n  :host([focus-ring]) {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  :host([theme~='primary'][focus-ring]) {\n    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n  }\n\n  /* Types (primary, tertiary, tertiary-inline */\n\n  :host([theme~='tertiary']),\n  :host([theme~='tertiary-inline']) {\n    background-color: transparent !important;\n    min-width: 0;\n  }\n\n  :host([theme~='tertiary']) {\n    padding: 0 calc(var(--lumo-button-size) / 6);\n  }\n\n  :host([theme~='tertiary-inline'])::before {\n    display: none;\n  }\n\n  :host([theme~='tertiary-inline']) {\n    margin: 0;\n    height: auto;\n    padding: 0;\n    line-height: inherit;\n    font-size: inherit;\n  }\n\n  :host([theme~='tertiary-inline']) [part='label'] {\n    padding: 0;\n    overflow: visible;\n    line-height: inherit;\n  }\n\n  :host([theme~='primary']) {\n    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n    font-weight: 600;\n    min-width: calc(var(--lumo-button-size) * 2.5);\n  }\n\n  :host([theme~='primary'])::before {\n    background-color: black;\n  }\n\n  @media (any-hover: hover) {\n    :host([theme~='primary']:hover)::before {\n      opacity: 0.05;\n    }\n  }\n\n  :host([theme~='primary'][active])::before {\n    opacity: 0.1;\n  }\n\n  :host([theme~='primary'][active])::after {\n    opacity: 0.2;\n  }\n\n  /* Colors (success, error, contrast) */\n\n  :host([theme~='success']) {\n    color: var(--lumo-success-text-color);\n  }\n\n  :host([theme~='success'][theme~='primary']) {\n    background-color: var(--lumo-success-color);\n    color: var(--lumo-success-contrast-color);\n  }\n\n  :host([theme~='error']) {\n    color: var(--lumo-error-text-color);\n  }\n\n  :host([theme~='error'][theme~='primary']) {\n    background-color: var(--lumo-error-color);\n    color: var(--lumo-error-contrast-color);\n  }\n\n  :host([theme~='contrast']) {\n    color: var(--lumo-contrast);\n  }\n\n  :host([theme~='contrast'][theme~='primary']) {\n    background-color: var(--lumo-contrast);\n    color: var(--lumo-base-color);\n  }\n\n  /* Disabled state. Keep selectors after other color variants. */\n\n  :host([disabled]) {\n    pointer-events: none;\n    color: var(--lumo-disabled-text-color);\n  }\n\n  :host([theme~='primary'][disabled]) {\n    background-color: var(--lumo-contrast-30pct);\n    color: var(--lumo-base-color);\n  }\n\n  :host([theme~='primary'][disabled]) [part] {\n    opacity: 0.7;\n  }\n\n  /* Icons */\n\n  [part] ::slotted(vaadin-icon),\n  [part] ::slotted(iron-icon) {\n    display: inline-block;\n    width: var(--lumo-icon-size-m);\n    height: var(--lumo-icon-size-m);\n  }\n\n  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n  [part] ::slotted(vaadin-icon[icon^='vaadin:']),\n  [part] ::slotted(iron-icon[icon^='vaadin:']) {\n    padding: 0.25em;\n    box-sizing: border-box !important;\n  }\n\n  [part='prefix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  [part='suffix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  /* Icon-only */\n\n  :host([theme~='icon']:not([theme~='tertiary-inline'])) {\n    min-width: var(--lumo-button-size);\n    padding-left: calc(var(--lumo-button-size) / 4);\n    padding-right: calc(var(--lumo-button-size) / 4);\n  }\n\n  :host([theme~='icon']) [part='prefix'],\n  :host([theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='prefix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  :host([dir='rtl']) [part='suffix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  :host([dir='rtl'][theme~='icon']) [part='prefix'],\n  :host([dir='rtl'][theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n\n  :host {\n    margin: calc(var(--lumo-space-xs) / 2);\n    margin-left: 0;\n    border-radius: 0;\n  }\n\n  [part='label'] {\n    width: 100%;\n  }\n\n  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */\n  [part='label'] ::slotted(vaadin-context-menu-item) {\n    justify-content: center;\n    background-color: transparent;\n    height: var(--lumo-button-size);\n    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);\n    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);\n    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);\n  }\n\n  :host([theme~='small']) [part='label'] ::slotted(vaadin-context-menu-item) {\n    min-height: var(--lumo-size-s);\n    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);\n    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);\n    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);\n  }\n\n  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-context-menu-item) {\n    margin: 0 calc((var(--lumo-button-size) / 6) * -1);\n    padding-left: calc(var(--lumo-button-size) / 6);\n    padding-right: calc(var(--lumo-button-size) / 6);\n  }\n\n  :host([theme~='tertiary-inline']) {\n    margin-top: calc(var(--lumo-space-xs) / 2);\n    margin-bottom: calc(var(--lumo-space-xs) / 2);\n    margin-right: calc(var(--lumo-space-xs) / 2);\n  }\n\n  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-context-menu-item) {\n    margin: 0;\n    padding: 0;\n  }\n\n  :host(:first-of-type) {\n    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);\n\n    /* Needed to retain the focus-ring with border-radius */\n    margin-left: calc(var(--lumo-space-xs) / 2);\n  }\n\n  :host(:nth-last-of-type(2)),\n  :host([part='overflow-button']) {\n    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;\n  }\n\n  :host([theme~='tertiary']),\n  :host([theme~='tertiary-inline']) {\n    border-radius: var(--lumo-border-radius-m);\n  }\n\n  :host([part='overflow-button']) {\n    min-width: var(--lumo-button-size);\n    padding-left: calc(var(--lumo-button-size) / 4);\n    padding-right: calc(var(--lumo-button-size) / 4);\n  }\n\n  :host([part='overflow-button']) ::slotted(*) {\n    font-size: var(--lumo-font-size-xl);\n  }\n\n  :host([part='overflow-button']) [part='prefix'],\n  :host([part='overflow-button']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  /* RTL styles */\n  :host([dir='rtl']) {\n    margin-left: calc(var(--lumo-space-xs) / 2);\n    margin-right: 0;\n    border-radius: 0;\n  }\n\n  :host([dir='rtl']:first-of-type) {\n    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;\n    margin-right: calc(var(--lumo-space-xs) / 2);\n  }\n\n  :host([dir='rtl']:nth-last-of-type(2)),\n  :host([dir='rtl'][part='overflow-button']) {\n    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);\n  }\n</style></template></vaadin-menu-bar-button>\n      </div>\n      <vaadin-menu-bar-submenu is-root=""><template shadowroot="open">\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n\n      <slot id="slot"></slot>\n\n      <vaadin-context-menu-overlay id="overlay" end-aligned="" right-aligned="" bottom-aligned="">\n      <template shadowroot="open">\n      <style>\n        :host {\n          z-index: 200;\n          position: fixed;\n\n          /* Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part. */\n\n          /* Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport. */\n          top: 0;\n          right: 0;\n          bottom: var(--vaadin-overlay-viewport-bottom);\n          left: 0;\n\n          /* Use flexbox alignment for the overlay part. */\n          display: flex;\n          flex-direction: column; /* makes dropdowns sizing easier */\n          /* Align to center by default. */\n          align-items: center;\n          justify-content: center;\n\n          /* Allow centering when max-width/max-height applies. */\n          margin: auto;\n\n          /* The host is not clickable, only the overlay part is. */\n          pointer-events: none;\n\n          /* Remove tap highlight on touch devices. */\n          -webkit-tap-highlight-color: transparent;\n\n          /* CSS API for host */\n          --vaadin-overlay-viewport-bottom: 0;\n        }\n\n        :host([hidden]),\n        :host(:not([opened]):not([closing])) {\n          display: none !important;\n        }\n\n        [part='overlay'] {\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          pointer-events: auto;\n\n          /* Prevent overflowing the host in MSIE 11 */\n          max-width: 100%;\n          box-sizing: border-box;\n\n          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n        }\n\n        [part='backdrop'] {\n          z-index: -1;\n          content: '';\n          background: rgba(0, 0, 0, 0.5);\n          position: fixed;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          pointer-events: auto;\n        }\n      </style>\n\n      <div id="backdrop" part="backdrop" hidden=""></div>\n      <div part="overlay" id="overlay" tabindex="0">\n        <div part="content" id="content">\n          <slot></slot>\n        </div>\n      </div>\n    <style>\n    :host {\n      align-items: flex-start;\n      justify-content: flex-start;\n    }\n\n    :host([right-aligned]),\n    :host([end-aligned]) {\n      align-items: flex-end;\n    }\n\n    :host([bottom-aligned]) {\n      justify-content: flex-end;\n    }\n\n    [part='overlay'] {\n      background-color: #fff;\n    }\n  \n\n    :host(:first-of-type) {\n      padding-top: var(--lumo-space-xs);\n    }\n  \n\n  :host {\n    top: var(--lumo-space-m);\n    right: var(--lumo-space-m);\n    bottom: var(--lumo-space-m);\n    left: var(--lumo-space-m);\n    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n    /* stylelint-disable-next-line */\n    outline: 0px solid transparent;\n  }\n\n  [part='overlay'] {\n    background-color: var(--lumo-base-color);\n    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n    color: var(--lumo-body-text-color);\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 400;\n    line-height: var(--lumo-line-height-m);\n    letter-spacing: 0;\n    text-transform: none;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  [part='content'] {\n    padding: var(--lumo-space-xs);\n  }\n\n  [part='backdrop'] {\n    background-color: var(--lumo-shade-20pct);\n    animation: 0.2s lumo-overlay-backdrop-enter both;\n    will-change: opacity;\n  }\n\n  @keyframes lumo-overlay-backdrop-enter {\n    0% {\n      opacity: 0;\n    }\n  }\n\n  :host([closing]) [part='backdrop'] {\n    animation: 0.2s lumo-overlay-backdrop-exit both;\n  }\n\n  @keyframes lumo-overlay-backdrop-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n  @keyframes lumo-overlay-dummy-animation {\n    0% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  }\n\n\n  :host([opening]),\n  :host([closing]) {\n    animation: 0.14s lumo-overlay-dummy-animation;\n  }\n\n  [part='overlay'] {\n    will-change: opacity, transform;\n  }\n\n  :host([opening]) [part='overlay'] {\n    animation: 0.1s lumo-menu-overlay-enter ease-out both;\n  }\n\n  @keyframes lumo-menu-overlay-enter {\n    0% {\n      opacity: 0;\n      transform: translateY(-4px);\n    }\n  }\n\n  :host([closing]) [part='overlay'] {\n    animation: 0.1s lumo-menu-overlay-exit both;\n  }\n\n  @keyframes lumo-menu-overlay-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n\n  /* Small viewport (bottom sheet) styles */\n  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */\n  @media (max-width: 420px), (max-height: 420px) {\n    :host {\n      top: 0 !important;\n      right: 0 !important;\n      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n      left: 0 !important;\n      align-items: stretch !important;\n      justify-content: flex-end !important;\n    }\n\n    [part='overlay'] {\n      max-height: 50vh;\n      width: 100vw;\n      border-radius: 0;\n      box-shadow: var(--lumo-box-shadow-xl);\n    }\n\n    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n    [part='content'] {\n      padding: 30px var(--lumo-space-m);\n      max-height: inherit;\n      box-sizing: border-box;\n      -webkit-overflow-scrolling: touch;\n      overflow: auto;\n      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n    }\n\n    [part='backdrop'] {\n      display: block;\n    }\n\n    /* Animations */\n\n    :host([opening]) [part='overlay'] {\n      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;\n    }\n\n    :host([closing]),\n    :host([closing]) [part='backdrop'] {\n      animation-delay: 0.14s;\n    }\n\n    :host([closing]) [part='overlay'] {\n      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;\n    }\n  }\n\n  @keyframes lumo-mobile-menu-overlay-enter {\n    0% {\n      transform: translateY(150%);\n    }\n  }\n\n  @keyframes lumo-mobile-menu-overlay-exit {\n    100% {\n      transform: translateY(150%);\n    }\n  }\n\n\n  :host([phone]) {\n    top: 0 !important;\n    right: 0 !important;\n    bottom: var(--vaadin-overlay-viewport-bottom) !important;\n    left: 0 !important;\n    align-items: stretch;\n    justify-content: flex-end;\n  }\n\n  /* TODO These style overrides should not be needed.\n   We should instead offer a way to have non-selectable items inside the context menu. */\n\n  :host {\n    --_lumo-list-box-item-selected-icon-display: none;\n    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);\n  }\n\n  [part='overlay'] {\n    outline: none;\n  }\n</style></template></vaadin-context-menu-overlay>\n    </template></vaadin-menu-bar-submenu>\n    <style></style>`,
});

export const MenuBar = createVaadinComponent<
  MenuBarClass,
  typeof MenuBarEvents
>(
  "vaadin-menu-bar",
  MenuBarProperties,
  MenuBarEvents,
  () => import("@vaadin/menu-bar/vaadin-menu-bar"),
  "MenuBar",
  undefined,
  getMenuBarPreRenderConfig
);

export { MenuBarElement };
