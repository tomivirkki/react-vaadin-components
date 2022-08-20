// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */

import React from "react";

import type * as IconElement from "@vaadin/icon/vaadin-icon";
import type * as IconsetElement from "@vaadin/icon/vaadin-iconset";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type IconClass = IconElement.Icon;

const IconEvents = {};

const IconProperties = {
  icon: "",
  svg: "",
  size: "",
  version: "",
};

const getIconPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          box-sizing: border-box;\n          vertical-align: middle;\n          width: 24px;\n          height: 24px;\n          fill: currentColor;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        svg {\n          display: block;\n          width: 100%;\n          height: 100%;\n        }\n      </style>\n      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" aria-hidden="true" viewBox="0 0 24 24"><!----></svg>\n    <style>\n    :host {\n      width: var(--lumo-icon-size-m);\n      height: var(--lumo-icon-size-m);\n    }\n  </style>`,
});

export const Icon = createVaadinComponent<IconClass, typeof IconEvents>(
  "vaadin-icon",
  IconProperties,
  IconEvents,
  () => import("@vaadin/icon/vaadin-icon"),
  "Icon",
  undefined,
  getIconPreRenderConfig
);

export { IconElement };

type IconsetClass = IconsetElement.Iconset;

const IconsetEvents = {};

const IconsetProperties = {
  name: "",
  size: "",
  version: "",
};

const getIconsetPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

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

export { IconsetElement };

export function LumoIconset() {
  if (typeof window !== "undefined") {
    // @ts-ignore
    import("@vaadin/vaadin-lumo-styles/vaadin-iconset");
  }
  return null;
}

export function VaadinIconset() {
  if (typeof window !== "undefined") {
    // @ts-ignore
    import("@vaadin/icons/vaadin-iconset");
  }
  return null;
}
