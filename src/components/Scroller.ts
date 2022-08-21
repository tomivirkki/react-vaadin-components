// Generated file. Do not edit.

import React from "react";

import type * as ScrollerElement from "@vaadin/scroller/vaadin-scroller";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type ScrollerClass = ScrollerElement.Scroller;

const ScrollerEvents = {};

const ScrollerProperties = {
  scrollDirection: "",
  tabindex: "",
  version: "",
};

const getScrollerPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        :host {\n          display: block;\n          overflow: auto;\n        }\n\n        :host([scroll-direction='vertical']) {\n          overflow-x: hidden;\n        }\n\n        :host([scroll-direction='horizontal']) {\n          overflow-y: hidden;\n        }\n\n        :host([scroll-direction='none']) {\n          overflow: hidden;\n        }\n      </style>\n\n      <slot></slot>\n    <style>\n  :host {\n    outline: none;\n  }\n\n  :host([focus-ring]) {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n</style>`,
});

export const Scroller = createVaadinComponent<
  ScrollerClass,
  typeof ScrollerEvents
>(
  "vaadin-scroller",
  ScrollerProperties,
  ScrollerEvents,
  () => import("@vaadin/scroller/vaadin-scroller.js"),
  "Scroller",
  undefined,
  getScrollerPreRenderConfig
);

export { ScrollerElement };
