// Generated file. Do not edit.

import { createVaadinComponent, eventMapper } from "../create-component";

import type { Icon as IconClass } from "@vaadin/icon/vaadin-icon";

import type { Iconset as IconsetClass } from "@vaadin/icon/vaadin-iconset";

const IconEvents = {};

const IconProperties = {
  icon: "",
  svg: "",
  size: "",
  version: "",
};

const getIconPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          box-sizing: border-box;\n          vertical-align: middle;\n          width: 24px;\n          height: 24px;\n          fill: currentColor;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        svg {\n          display: block;\n          width: 100%;\n          height: 100%;\n        }\n      </style>\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" aria-hidden="true" viewBox="0 0 24 24"><!----></svg>\n    <style>\n    :host {\n      width: var(--lumo-icon-size-m);\n      height: var(--lumo-icon-size-m);\n    }\n  </style>`,
  };
};

export const Icon = createVaadinComponent<IconClass, typeof IconEvents>(
  "vaadin-icon",
  IconProperties,
  IconEvents,
  () => import("@vaadin/icon/vaadin-icon"),
  "Icon",
  undefined,
  getIconPreRenderConfig
);

const IconsetEvents = {};

const IconsetProperties = {
  name: "",
  size: "",
  version: "",
};

const getIconsetPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: ``,
  };
};

export const Iconset = createVaadinComponent<
  IconsetClass,
  typeof IconsetEvents
>(
  "vaadin-iconset",
  IconsetProperties,
  IconsetEvents,
  () => import("@vaadin/icon/vaadin-iconset"),
  "Iconset",
  undefined,
  getIconsetPreRenderConfig
);
