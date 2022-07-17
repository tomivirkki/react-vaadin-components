// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  SplitLayout as SplitLayoutClass,
  SplitLayoutEventMap,
} from "@vaadin/split-layout/vaadin-split-layout";
import { createVaadinComponent, eventMapper } from "../create-component";

const SplitLayoutEventMapper = eventMapper<SplitLayoutEventMap>();
const SplitLayoutEvents = {
  ...SplitLayoutEventMapper("onSplitterDragend", "splitter-dragend"),
};

const SplitLayoutProperties = {
  orientation: "",
  version: "",
};

const getSplitLayoutPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: flex;\n          overflow: hidden !important;\n          transform: translateZ(0);\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host([orientation='vertical']) {\n          flex-direction: column;\n        }\n\n        :host ::slotted(*) {\n          flex: 1 1 auto;\n          overflow: auto;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        [part='splitter'] {\n          flex: none;\n          position: relative;\n          z-index: 1;\n          overflow: visible;\n          min-width: 8px;\n          min-height: 8px;\n        }\n\n        :host(:not([orientation='vertical'])) > [part='splitter'] {\n          cursor: ew-resize;\n        }\n\n        :host([orientation='vertical']) > [part='splitter'] {\n          cursor: ns-resize;\n        }\n\n        [part='handle'] {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate3d(-50%, -50%, 0);\n        }\n      </style>\n      <slot id="primary" name="primary"></slot>\n      <div part="splitter" id="splitter" style="touch-action: none;">\n        <div part="handle"></div>\n      </div>\n      <slot id="secondary" name="secondary"></slot>\n    <style>\n    [part='splitter'] {\n      min-width: var(--lumo-space-s);\n      min-height: var(--lumo-space-s);\n      background-color: var(--lumo-contrast-5pct);\n      transition: 0.1s background-color;\n    }\n\n    [part='handle'] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: var(--lumo-size-m);\n      height: var(--lumo-size-m);\n    }\n\n    [part='handle']::after {\n      content: '';\n      display: block;\n      width: 4px;\n      height: 100%;\n      max-width: 100%;\n      max-height: 100%;\n      border-radius: var(--lumo-border-radius-s);\n      background-color: var(--lumo-contrast-30pct);\n      transition: 0.1s opacity, 0.1s background-color;\n    }\n\n    :host([orientation='vertical']) [part='handle']::after {\n      width: 100%;\n      height: 4px;\n    }\n\n    /* Hover style */\n    [part='splitter']:hover [part='handle']::after {\n      background-color: var(--lumo-contrast-40pct);\n    }\n\n    /* Disable hover for touch devices */\n    @media (pointer: coarse) {\n      [part='splitter']:hover [part='handle']::after {\n        background-color: var(--lumo-contrast-30pct);\n      }\n    }\n\n    /* Active style */\n    [part='splitter']:active [part='handle']::after {\n      background-color: var(--lumo-contrast-50pct);\n    }\n\n    /* Small/minimal */\n    :host([theme~='small']) > [part='splitter'] {\n      border-left: 1px solid var(--lumo-contrast-10pct);\n      border-top: 1px solid var(--lumo-contrast-10pct);\n    }\n\n    :host([theme~='small']) > [part='splitter'],\n    :host([theme~='minimal']) > [part='splitter'] {\n      min-width: 0;\n      min-height: 0;\n      background-color: transparent;\n    }\n\n    :host([theme~='small']) > [part='splitter']::after,\n    :host([theme~='minimal']) > [part='splitter']::after {\n      content: '';\n      position: absolute;\n      top: -4px;\n      right: -4px;\n      bottom: -4px;\n      left: -4px;\n    }\n\n    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,\n    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {\n      opacity: 0;\n    }\n\n    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,\n    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,\n    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,\n    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {\n      opacity: 1;\n    }\n\n    /* RTL specific styles */\n    :host([theme~='small'][dir='rtl']) > [part='splitter'] {\n      border-left: auto;\n      border-right: 1px solid var(--lumo-contrast-10pct);\n    }\n  </style>`,
});

export const SplitLayout = createVaadinComponent<
  SplitLayoutClass,
  typeof SplitLayoutEvents
>(
  "vaadin-split-layout",
  SplitLayoutProperties,
  SplitLayoutEvents,
  () => import("@vaadin/split-layout/vaadin-split-layout"),
  "SplitLayout",
  undefined,
  getSplitLayoutPreRenderConfig
);
