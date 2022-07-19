// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  Dialog as DialogClass,
  DialogEventMap,
} from "@vaadin/dialog/vaadin-dialog";
import { createVaadinComponent, eventMapper } from "../create-component";

const DialogEventMapper = eventMapper<DialogEventMap>();
const DialogEvents = {
  ...DialogEventMapper("onResize", "resize"),
  ...DialogEventMapper("onOpenedChanged", "opened-changed"),
};

const DialogProperties = {
  opened: "",
  noCloseOnOutsideClick: "",
  noCloseOnEsc: "",
  ariaLabel: "",
  renderer: "",
  headerTitle: "",
  headerRenderer: "",
  footerRenderer: "",
  modeless: "",
  version: "",
  draggable: "",
  resizable: "",
  headerComponent: "",
  footerComponent: "",
};

type DialogClassExtended = Omit<
  DialogClass,
  "renderer" | "headerRenderer" | "footerRenderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
};

const getDialogPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: none !important;\n        }\n      </style>\n\n      <vaadin-dialog-overlay id="overlay" focus-trap="" with-backdrop="" role="dialog"><template shadowroot="open">\n      <style>\n        :host {\n          z-index: 200;\n          position: fixed;\n\n          /* Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part. */\n\n          /* Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport. */\n          top: 0;\n          right: 0;\n          bottom: var(--vaadin-overlay-viewport-bottom);\n          left: 0;\n\n          /* Use flexbox alignment for the overlay part. */\n          display: flex;\n          flex-direction: column; /* makes dropdowns sizing easier */\n          /* Align to center by default. */\n          align-items: center;\n          justify-content: center;\n\n          /* Allow centering when max-width/max-height applies. */\n          margin: auto;\n\n          /* The host is not clickable, only the overlay part is. */\n          pointer-events: none;\n\n          /* Remove tap highlight on touch devices. */\n          -webkit-tap-highlight-color: transparent;\n\n          /* CSS API for host */\n          --vaadin-overlay-viewport-bottom: 0;\n        }\n\n        :host([hidden]),\n        :host(:not([opened]):not([closing])) {\n          display: none !important;\n        }\n\n        [part='overlay'] {\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          pointer-events: auto;\n\n          /* Prevent overflowing the host in MSIE 11 */\n          max-width: 100%;\n          box-sizing: border-box;\n\n          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n        }\n\n        [part='backdrop'] {\n          z-index: -1;\n          content: '';\n          background: rgba(0, 0, 0, 0.5);\n          position: fixed;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          pointer-events: auto;\n        }\n      </style>\n\n      <div id="backdrop" part="backdrop"></div>\n      <div part="overlay" id="overlay" tabindex="0">\n        \n      <section id="resizerContainer" class="resizer-container"><header part="header"><div part="title"><slot name="title"></slot></div><div part="header-content"><slot name="header-content"></slot></div></header><div part="content" id="content">\n          <slot></slot>\n        </div><footer part="footer"><slot name="footer"></slot></footer><div class="edge resizer n"></div><div class="edge resizer e"></div><div class="edge resizer s"></div><div class="edge resizer w"></div><div class="resizer nw"></div><div class="resizer ne"></div><div class="resizer se"></div><div class="resizer sw"></div></section></div>\n    <style>\n    [part='overlay'] {\n      position: relative;\n      overflow: visible;\n      max-height: 100%;\n      display: flex;\n    }\n\n    [part='content'] {\n      box-sizing: border-box;\n      height: 100%;\n    }\n\n    .resizer-container {\n      overflow: auto;\n      flex-grow: 1;\n      border-radius: inherit; /* prevent child elements being drawn outside part=overlay */\n    }\n\n    [part='overlay'][style] .resizer-container {\n      min-height: 100%;\n      width: 100%;\n    }\n\n    :host(:not([resizable])) .resizer {\n      display: none;\n    }\n\n    :host([resizable]) [part='title'] {\n      cursor: move;\n      -webkit-user-select: none;\n      user-select: none;\n    }\n\n    .resizer {\n      position: absolute;\n      height: 16px;\n      width: 16px;\n    }\n\n    .resizer.edge {\n      height: 8px;\n      width: 8px;\n      top: -4px;\n      right: -4px;\n      bottom: -4px;\n      left: -4px;\n    }\n\n    .resizer.edge.n {\n      width: auto;\n      bottom: auto;\n      cursor: ns-resize;\n    }\n\n    .resizer.ne {\n      top: -4px;\n      right: -4px;\n      cursor: nesw-resize;\n    }\n\n    .resizer.edge.e {\n      height: auto;\n      left: auto;\n      cursor: ew-resize;\n    }\n\n    .resizer.se {\n      bottom: -4px;\n      right: -4px;\n      cursor: nwse-resize;\n    }\n\n    .resizer.edge.s {\n      width: auto;\n      top: auto;\n      cursor: ns-resize;\n    }\n\n    .resizer.sw {\n      bottom: -4px;\n      left: -4px;\n      cursor: nesw-resize;\n    }\n\n    .resizer.edge.w {\n      height: auto;\n      right: auto;\n      cursor: ew-resize;\n    }\n\n    .resizer.nw {\n      top: -4px;\n      left: -4px;\n      cursor: nwse-resize;\n    }\n  \n\n    [part='header'],\n    [part='header-content'],\n    [part='footer'] {\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      flex: none;\n      pointer-events: none;\n      z-index: 1;\n    }\n\n    ::slotted([slot='header-content']),\n    ::slotted([slot='title']),\n    ::slotted([slot='footer']) {\n      display: contents;\n      pointer-events: auto;\n    }\n\n    [part='header-content'] {\n      flex: 1;\n    }\n\n    :host([has-title]) [part='header-content'],\n    [part='footer'] {\n      justify-content: flex-end;\n    }\n\n    :host(:not([has-title]):not([has-header])) [part='header'],\n    :host(:not([has-header])) [part='header-content'],\n    :host(:not([has-title])) [part='title'],\n    :host(:not([has-footer])) [part='footer'] {\n      display: none !important;\n    }\n\n    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {\n      height: auto;\n    }\n\n    @media (min-height: 320px) {\n      :host(:is([has-title], [has-header], [has-footer])) .resizer-container {\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      :host(:is([has-title], [has-header], [has-footer])) [part='content'] {\n        flex: 1;\n        overflow: auto;\n      }\n    }\n\n    /*\n      NOTE(platosha): Make some min-width to prevent collapsing of the content\n      taking the parent width, e. g., <vaadin-grid> and such.\n    */\n    [part='content'] {\n      min-width: 12em; /* matches the default <vaadin-text-field> width */\n    }\n\n    :host([has-bounds-set]) [part='overlay'] {\n      max-width: none;\n    }\n  \n\n  :host {\n    top: var(--lumo-space-m);\n    right: var(--lumo-space-m);\n    bottom: var(--lumo-space-m);\n    left: var(--lumo-space-m);\n    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n    /* stylelint-disable-next-line */\n    outline: 0px solid transparent;\n  }\n\n  [part='overlay'] {\n    background-color: var(--lumo-base-color);\n    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n    border-radius: var(--lumo-border-radius-m);\n    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n    color: var(--lumo-body-text-color);\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 400;\n    line-height: var(--lumo-line-height-m);\n    letter-spacing: 0;\n    text-transform: none;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  [part='content'] {\n    padding: var(--lumo-space-xs);\n  }\n\n  [part='backdrop'] {\n    background-color: var(--lumo-shade-20pct);\n    animation: 0.2s lumo-overlay-backdrop-enter both;\n    will-change: opacity;\n  }\n\n  @keyframes lumo-overlay-backdrop-enter {\n    0% {\n      opacity: 0;\n    }\n  }\n\n  :host([closing]) [part='backdrop'] {\n    animation: 0.2s lumo-overlay-backdrop-exit both;\n  }\n\n  @keyframes lumo-overlay-backdrop-exit {\n    100% {\n      opacity: 0;\n    }\n  }\n\n  @keyframes lumo-overlay-dummy-animation {\n    0% {\n      opacity: 1;\n    }\n\n    100% {\n      opacity: 1;\n    }\n  }\n\n\n  /* Optical centering */\n  :host::before,\n  :host::after {\n    content: '';\n    flex-basis: 0;\n    flex-grow: 1;\n  }\n\n  :host::after {\n    flex-grow: 1.1;\n  }\n\n  [part='overlay'] {\n    border-radius: var(--lumo-border-radius-l);\n    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);\n    background-image: none;\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  [part='content'] {\n    padding: var(--lumo-space-l);\n  }\n\n  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {\n    padding-top: 0;\n  }\n\n  [part='header'],\n  [part='header-content'],\n  [part='footer'] {\n    gap: var(--lumo-space-xs) var(--lumo-space-s);\n    line-height: var(--lumo-line-height-s);\n  }\n\n  [part='header'] {\n    padding: var(--lumo-space-m);\n    background-color: var(--lumo-base-color);\n    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */\n  }\n\n  [part='footer'] {\n    padding: var(--lumo-space-s) var(--lumo-space-m);\n    background-color: var(--lumo-contrast-5pct);\n    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */\n  }\n\n  [part='title'] {\n    font-size: var(--lumo-font-size-xl);\n    font-weight: 600;\n    color: var(--lumo-header-text-color);\n    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));\n  }\n\n  /* No padding */\n  :host([theme~='no-padding']) [part='content'] {\n    padding: 0;\n  }\n\n  @media (min-height: 320px) {\n    :host([overflow~='top']) [part='header'] {\n      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);\n    }\n  }\n\n  /* Animations */\n\n  :host([opening]),\n  :host([closing]) {\n    animation: 0.25s lumo-overlay-dummy-animation;\n  }\n\n  :host([opening]) [part='overlay'] {\n    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;\n  }\n\n  @keyframes vaadin-dialog-enter {\n    0% {\n      opacity: 0;\n      transform: scale(0.95);\n    }\n  }\n\n  :host([closing]) [part='overlay'] {\n    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;\n  }\n\n  :host([closing]) [part='backdrop'] {\n    animation-delay: 0.05s;\n  }\n\n  @keyframes vaadin-dialog-exit {\n    100% {\n      opacity: 0;\n      transform: scale(1.02);\n    }\n  }\n</style></template></vaadin-dialog-overlay>\n    `,
});

export const Dialog = createVaadinComponent<
  DialogClassExtended,
  typeof DialogEvents
>(
  "vaadin-dialog",
  DialogProperties,
  DialogEvents,
  () => import("@vaadin/dialog/vaadin-dialog"),
  "Dialog",
  {
    childRenderer: "renderer",
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
  },
  getDialogPreRenderConfig
);