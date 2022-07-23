// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type * as VerticalLayoutElement from "@vaadin/vertical-layout/vaadin-vertical-layout";
import { createVaadinComponent, eventMapper } from "../create-component";

type VerticalLayoutClass = VerticalLayoutElement.VerticalLayout;

const VerticalLayoutEvents = {};

const VerticalLayoutProperties = {
  version: "",
};

const getVerticalLayoutPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          align-items: flex-start;\n          box-sizing: border-box;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        /* Theme variations */\n        :host([theme~='margin']) {\n          margin: 1em;\n        }\n\n        :host([theme~='padding']) {\n          padding: 1em;\n        }\n\n        :host([theme~='spacing']) {\n          gap: 1em;\n        }\n      </style>\n\n      <slot></slot>\n    <style>\n  :host([theme~='margin']) {\n    margin: var(--lumo-space-m);\n  }\n\n  :host([theme~='padding']) {\n    padding: var(--lumo-space-m);\n  }\n\n  :host([theme~='spacing-xs']) {\n    gap: var(--lumo-space-xs);\n  }\n\n  :host([theme~='spacing-s']) {\n    gap: var(--lumo-space-s);\n  }\n\n  :host([theme~='spacing']) {\n    gap: var(--lumo-space-m);\n  }\n\n  :host([theme~='spacing-l']) {\n    gap: var(--lumo-space-l);\n  }\n\n  :host([theme~='spacing-xl']) {\n    gap: var(--lumo-space-xl);\n  }\n</style>`,
});

export const VerticalLayout = createVaadinComponent<
  VerticalLayoutClass,
  typeof VerticalLayoutEvents
>(
  "vaadin-vertical-layout",
  VerticalLayoutProperties,
  VerticalLayoutEvents,
  () => import("@vaadin/vertical-layout/vaadin-vertical-layout"),
  "VerticalLayout",
  undefined,
  getVerticalLayoutPreRenderConfig
);

export { VerticalLayoutElement };
