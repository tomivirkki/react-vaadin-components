// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  AppLayout as AppLayoutClass,
  AppLayoutEventMap,
} from "@vaadin/app-layout/vaadin-app-layout";

import type { DrawerToggle as DrawerToggleClass } from "@vaadin/app-layout/vaadin-drawer-toggle";
import { createVaadinComponent, eventMapper } from "../create-component";

const AppLayoutEventMapper = eventMapper<AppLayoutEventMap>();
const AppLayoutEvents = {
  ...AppLayoutEventMapper("onDrawerOpenedChanged", "drawer-opened-changed"),
  ...AppLayoutEventMapper("onOverlayChanged", "overlay-changed"),
  ...AppLayoutEventMapper("onPrimarySectionChanged", "primary-section-changed"),
};

const AppLayoutProperties = {
  i18n: "",
  primarySection: "",
  drawerOpened: "",
  overlay: "",
  closeDrawerOn: "",
  version: "",
};

const getAppLayoutPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `<style>\n      :host {\n        --_vaadin-app-layout-drawer-offset-size: 16em !important;\n        --vaadin-app-layout-transition: 0 !important;\n      }\n\n      :host [part="drawer"] {\n        display: block !important;\n      }\n\n      :host [part="navbar"] {\n        display: flex !important;\n      }\n\n      @media (max-width: 800px), (max-height: 600px) {\n        :host {\n          --_vaadin-app-layout-drawer-offset-size: 0 !important;\n        }\n\n        :host [part="drawer"] {\n          opacity: 0;\n        }\n      }\n\n      :host {\n        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);\n      }\n      \n      :host(:not([dir='rtl'])[primary-section='drawer']:not([overlay])) [part='navbar'] {\n        left: var(--vaadin-app-layout-drawer-offset-left, 0);\n      }\n  \n      :host([dir='rtl'][primary-section='drawer']:not([overlay])) [part='navbar'] {\n        right: var(--vaadin-app-layout-drawer-offset-left, 0);\n      }\n  \n      :host [part='drawer'] {\n        visibility: visible;\n        transform: translateX(0%);\n      }\n  \n      :host([dir='rtl']) [part='drawer'] {\n        transform: translateX(0%);\n      }\n      \n      :host(:not([dir='rtl']):not([overlay])) {\n        padding-left: var(--vaadin-app-layout-drawer-offset-left);\n      }\n      \n      :host([dir='rtl']:not([overlay])) {\n        padding-right: var(--vaadin-app-layout-drawer-offset-left);\n      }\n    </style>\n      <style>\n        :host {\n          display: block;\n          box-sizing: border-box;\n          height: 100%;\n          --vaadin-app-layout-transition: 200ms;\n          transition: padding var(--vaadin-app-layout-transition);\n          --vaadin-app-layout-touch-optimized: false;\n          --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);\n          --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);\n          padding-top: var(--vaadin-app-layout-navbar-offset-top);\n          padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);\n          padding-left: var(--vaadin-app-layout-navbar-offset-left);\n        }\n\n        :host([dir='rtl']) {\n          padding-left: 0;\n          padding-right: var(--vaadin-app-layout-navbar-offset-left);\n        }\n\n        :host([hidden]),\n        [hidden] {\n          display: none !important;\n        }\n\n        :host([no-anim]) {\n          --vaadin-app-layout-transition: none !important;\n        }\n\n        :host([drawer-opened]) {\n          --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);\n        }\n\n        :host([overlay]) {\n          --vaadin-app-layout-drawer-offset-left: 0;\n          --vaadin-app-layout-navbar-offset-left: 0;\n        }\n\n        :host(:not([no-scroll])) [content] {\n          overflow: auto;\n        }\n\n        [content] {\n          height: 100%;\n        }\n\n        @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {\n          :host {\n            --vaadin-app-layout-touch-optimized: true;\n          }\n        }\n\n        [part='navbar'],\n        [part='navbar']::before {\n          position: fixed;\n          display: flex;\n          align-items: center;\n          top: 0;\n          right: 0;\n          left: 0;\n          transition: left var(--vaadin-app-layout-transition);\n          padding-top: var(--safe-area-inset-top);\n          padding-left: var(--safe-area-inset-left);\n          padding-right: var(--safe-area-inset-right);\n          z-index: 1;\n        }\n\n        :host(:not([dir='rtl'])[primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {\n          left: var(--vaadin-app-layout-drawer-offset-left, 0);\n        }\n\n        :host([dir='rtl'][primary-section='drawer'][drawer-opened]:not([overlay])) [part='navbar'] {\n          right: var(--vaadin-app-layout-drawer-offset-left, 0);\n        }\n\n        :host([primary-section='drawer']) [part='drawer'] {\n          top: 0;\n        }\n\n        [part='navbar'][bottom] {\n          top: auto;\n          bottom: 0;\n          padding-bottom: var(--safe-area-inset-bottom);\n        }\n\n        [part='drawer'] {\n          overflow: auto;\n          position: fixed;\n          top: var(--vaadin-app-layout-navbar-offset-top, 0);\n          right: auto;\n          bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));\n          left: var(--vaadin-app-layout-navbar-offset-left, 0);\n          transition: transform var(--vaadin-app-layout-transition), visibility var(--vaadin-app-layout-transition);\n          transform: translateX(-100%);\n          max-width: 90%;\n          width: 16em;\n          box-sizing: border-box;\n          padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);\n          outline: none;\n          /* The drawer should be inaccessible by the tabbing navigation when it is closed. */\n          visibility: hidden;\n        }\n\n        :host([drawer-opened]) [part='drawer'] {\n          /* The drawer should be accessible by the tabbing navigation when it is opened. */\n          visibility: visible;\n          transform: translateX(0%);\n          touch-action: manipulation;\n        }\n\n        [part='backdrop'] {\n          background-color: #000;\n          opacity: 0.3;\n        }\n\n        :host(:not([drawer-opened])) [part='backdrop'] {\n          opacity: 0;\n        }\n\n        :host([overlay]) [part='backdrop'] {\n          position: fixed;\n          top: 0;\n          right: 0;\n          bottom: 0;\n          left: 0;\n          pointer-events: none;\n          transition: opacity var(--vaadin-app-layout-transition);\n          -webkit-tap-highlight-color: transparent;\n        }\n\n        :host([overlay]) [part='drawer'] {\n          top: 0;\n          bottom: 0;\n        }\n\n        :host([overlay]) [part='drawer'],\n        :host([overlay]) [part='backdrop'] {\n          z-index: 2;\n        }\n\n        :host([drawer-opened][overlay]) [part='backdrop'] {\n          pointer-events: auto;\n          touch-action: manipulation;\n        }\n\n        :host([dir='rtl']) [part='drawer'] {\n          left: auto;\n          right: var(--vaadin-app-layout-navbar-offset-start, 0);\n          transform: translateX(100%);\n        }\n\n        :host([dir='rtl']) [part='navbar'],\n        :host([dir='rtl']) [part='navbar']::before {\n          transition: right var(--vaadin-app-layout-transition);\n        }\n\n        :host([dir='rtl'][drawer-opened]) [part='drawer'] {\n          transform: translateX(0%);\n        }\n\n        :host(:not([dir='rtl'])[drawer-opened]:not([overlay])) {\n          padding-left: var(--vaadin-app-layout-drawer-offset-left);\n        }\n\n        :host([dir='rtl'][drawer-opened]:not([overlay])) {\n          padding-right: var(--vaadin-app-layout-drawer-offset-left);\n        }\n\n        @media (max-width: 800px), (max-height: 600px) {\n          :host {\n            --vaadin-app-layout-drawer-overlay: true;\n          }\n\n          [part='drawer'] {\n            width: 20em;\n          }\n        }\n      </style>\n      <div part="navbar" id="navbarTop" hidden="">\n        <slot name="navbar"></slot>\n      </div>\n      <div part="backdrop"></div>\n      <div part="drawer" id="drawer" hidden="" role="dialog" aria-modal="true" aria-label="Drawer">\n        <slot name="drawer" id="drawerSlot"></slot>\n      </div>\n      <div content="">\n        <slot></slot>\n      </div>\n      <div part="navbar" id="navbarBottom" bottom="" hidden="">\n        <slot name="navbar-bottom"></slot>\n      </div>\n      <div hidden=""><slot id="touchSlot" name="navbar touch-optimized"></slot></div>\n    <style>\n    [part='navbar']::before {\n      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));\n    }\n\n    :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {\n      border-right: 1px solid var(--lumo-contrast-10pct);\n    }\n\n    :host([dir='rtl']:not([overlay])) [part='drawer'] {\n      border-left: 1px solid var(--lumo-contrast-10pct);\n    }\n\n    :host([overlay]) [part='drawer']::before {\n      background: var(--lumo-base-color);\n    }\n\n    [part='navbar']::before,\n    :host([overlay]) [part='drawer']::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 100%;\n      z-index: -1;\n    }\n\n    :host([overlay]) [part='drawer']::before {\n      background: var(--lumo-base-color);\n      height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);\n    }\n\n    [part='backdrop'] {\n      background-color: var(--lumo-shade-20pct);\n      opacity: 1;\n    }\n\n    [part] ::slotted(h2),\n    [part] ::slotted(h3),\n    [part] ::slotted(h4) {\n      margin-top: var(--lumo-space-xs) !important;\n      margin-bottom: var(--lumo-space-xs) !important;\n    }\n\n    @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {\n      [part='navbar']::before {\n        opacity: 0.8;\n      }\n\n      [part='navbar'] {\n        -webkit-backdrop-filter: blur(24px);\n        backdrop-filter: blur(24px);\n      }\n\n      :host([overlay]) [part='drawer']::before {\n        opacity: 0.9;\n      }\n\n      :host([overlay]) [part='drawer'] {\n        -webkit-backdrop-filter: blur(24px);\n        backdrop-filter: blur(24px);\n      }\n    }\n  </style>`,
});

export const AppLayout = createVaadinComponent<
  AppLayoutClass,
  typeof AppLayoutEvents
>(
  "vaadin-app-layout",
  AppLayoutProperties,
  AppLayoutEvents,
  () => import("@vaadin/app-layout/vaadin-app-layout"),
  "AppLayout",
  undefined,
  getAppLayoutPreRenderConfig
);

const DrawerToggleEvents = {};

const DrawerToggleProperties = {
  ariaLabel: "",
  disabled: "",
  tabindex: "",
  version: "",
};

const getDrawerTogglePreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          cursor: default;\n          position: relative;\n          outline: none;\n          height: 24px;\n          width: 24px;\n          padding: 4px;\n        }\n\n        [part='icon'],\n        [part='icon']::after,\n        [part='icon']::before {\n          position: absolute;\n          top: 8px;\n          height: 3px;\n          width: 24px;\n          background-color: #000;\n        }\n\n        [part='icon']::after,\n        [part='icon']::before {\n          content: '';\n        }\n\n        [part='icon']::after {\n          top: 6px;\n        }\n\n        [part='icon']::before {\n          top: 12px;\n        }\n      </style>\n      <slot>\n        <div part="icon"></div>\n      </slot>\n    <style>\n  :host {\n    /* Sizing */\n    --lumo-button-size: var(--lumo-size-m);\n    min-width: calc(var(--lumo-button-size) * 2);\n    height: var(--lumo-button-size);\n    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);\n    margin: var(--lumo-space-xs) 0;\n    box-sizing: border-box;\n    /* Style */\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 500;\n    color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    cursor: var(--lumo-clickable-cursor);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Set only for the internal parts so we don’t affect the host vertical alignment */\n  [part='label'],\n  [part='prefix'],\n  [part='suffix'] {\n    line-height: var(--lumo-line-height-xs);\n  }\n\n  [part='label'] {\n    padding: calc(var(--lumo-button-size) / 6) 0;\n  }\n\n  :host([theme~='small']) {\n    font-size: var(--lumo-font-size-s);\n    --lumo-button-size: var(--lumo-size-s);\n  }\n\n  :host([theme~='large']) {\n    font-size: var(--lumo-font-size-l);\n    --lumo-button-size: var(--lumo-size-l);\n  }\n\n  /* For interaction states */\n  :host::before,\n  :host::after {\n    content: '';\n    /* We rely on the host always being relative */\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: currentColor;\n    border-radius: inherit;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  /* Hover */\n\n  @media (any-hover: hover) {\n    :host(:hover)::before {\n      opacity: 0.02;\n    }\n  }\n\n  /* Active */\n\n  :host::after {\n    transition: opacity 1.4s, transform 0.1s;\n    filter: blur(8px);\n  }\n\n  :host([active])::before {\n    opacity: 0.05;\n    transition-duration: 0s;\n  }\n\n  :host([active])::after {\n    opacity: 0.1;\n    transition-duration: 0s, 0s;\n    transform: scale(0);\n  }\n\n  /* Keyboard focus */\n\n  :host([focus-ring]) {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  :host([theme~='primary'][focus-ring]) {\n    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);\n  }\n\n  /* Types (primary, tertiary, tertiary-inline */\n\n  :host([theme~='tertiary']),\n  :host([theme~='tertiary-inline']) {\n    background-color: transparent !important;\n    min-width: 0;\n  }\n\n  :host([theme~='tertiary']) {\n    padding: 0 calc(var(--lumo-button-size) / 6);\n  }\n\n  :host([theme~='tertiary-inline'])::before {\n    display: none;\n  }\n\n  :host([theme~='tertiary-inline']) {\n    margin: 0;\n    height: auto;\n    padding: 0;\n    line-height: inherit;\n    font-size: inherit;\n  }\n\n  :host([theme~='tertiary-inline']) [part='label'] {\n    padding: 0;\n    overflow: visible;\n    line-height: inherit;\n  }\n\n  :host([theme~='primary']) {\n    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n    font-weight: 600;\n    min-width: calc(var(--lumo-button-size) * 2.5);\n  }\n\n  :host([theme~='primary'])::before {\n    background-color: black;\n  }\n\n  @media (any-hover: hover) {\n    :host([theme~='primary']:hover)::before {\n      opacity: 0.05;\n    }\n  }\n\n  :host([theme~='primary'][active])::before {\n    opacity: 0.1;\n  }\n\n  :host([theme~='primary'][active])::after {\n    opacity: 0.2;\n  }\n\n  /* Colors (success, error, contrast) */\n\n  :host([theme~='success']) {\n    color: var(--lumo-success-text-color);\n  }\n\n  :host([theme~='success'][theme~='primary']) {\n    background-color: var(--lumo-success-color);\n    color: var(--lumo-success-contrast-color);\n  }\n\n  :host([theme~='error']) {\n    color: var(--lumo-error-text-color);\n  }\n\n  :host([theme~='error'][theme~='primary']) {\n    background-color: var(--lumo-error-color);\n    color: var(--lumo-error-contrast-color);\n  }\n\n  :host([theme~='contrast']) {\n    color: var(--lumo-contrast);\n  }\n\n  :host([theme~='contrast'][theme~='primary']) {\n    background-color: var(--lumo-contrast);\n    color: var(--lumo-base-color);\n  }\n\n  /* Disabled state. Keep selectors after other color variants. */\n\n  :host([disabled]) {\n    pointer-events: none;\n    color: var(--lumo-disabled-text-color);\n  }\n\n  :host([theme~='primary'][disabled]) {\n    background-color: var(--lumo-contrast-30pct);\n    color: var(--lumo-base-color);\n  }\n\n  :host([theme~='primary'][disabled]) [part] {\n    opacity: 0.7;\n  }\n\n  /* Icons */\n\n  [part] ::slotted(vaadin-icon),\n  [part] ::slotted(iron-icon) {\n    display: inline-block;\n    width: var(--lumo-icon-size-m);\n    height: var(--lumo-icon-size-m);\n  }\n\n  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n  [part] ::slotted(vaadin-icon[icon^='vaadin:']),\n  [part] ::slotted(iron-icon[icon^='vaadin:']) {\n    padding: 0.25em;\n    box-sizing: border-box !important;\n  }\n\n  [part='prefix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  [part='suffix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  /* Icon-only */\n\n  :host([theme~='icon']:not([theme~='tertiary-inline'])) {\n    min-width: var(--lumo-button-size);\n    padding-left: calc(var(--lumo-button-size) / 4);\n    padding-right: calc(var(--lumo-button-size) / 4);\n  }\n\n  :host([theme~='icon']) [part='prefix'],\n  :host([theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  /* RTL specific styles */\n\n  :host([dir='rtl']) [part='prefix'] {\n    margin-left: 0.25em;\n    margin-right: -0.25em;\n  }\n\n  :host([dir='rtl']) [part='suffix'] {\n    margin-left: -0.25em;\n    margin-right: 0.25em;\n  }\n\n  :host([dir='rtl'][theme~='icon']) [part='prefix'],\n  :host([dir='rtl'][theme~='icon']) [part='suffix'] {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n\n  :host {\n    width: var(--lumo-size-l);\n    height: var(--lumo-size-l);\n    min-width: auto;\n    margin: 0 var(--lumo-space-s);\n    padding: 0;\n    background: transparent;\n  }\n\n  [part='icon'],\n  [part='icon']::after,\n  [part='icon']::before {\n    position: inherit;\n    height: auto;\n    width: auto;\n    background: transparent;\n    top: auto;\n  }\n\n  [part='icon']::before {\n    font-family: lumo-icons;\n    font-size: var(--lumo-icon-size-m);\n    content: var(--lumo-icons-menu);\n  }\n</style>`,
});

export const DrawerToggle = createVaadinComponent<
  DrawerToggleClass,
  typeof DrawerToggleEvents
>(
  "vaadin-drawer-toggle",
  DrawerToggleProperties,
  DrawerToggleEvents,
  () => import("@vaadin/app-layout/vaadin-drawer-toggle"),
  "DrawerToggle",
  undefined,
  getDrawerTogglePreRenderConfig
);