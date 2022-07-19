// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type { AccordionPanel as AccordionPanelClass } from "@vaadin/accordion/vaadin-accordion-panel";

import type { DetailsEventMap as AccordionPanelEventMap } from "@vaadin/details";
import type {
  Accordion as AccordionClass,
  AccordionEventMap,
} from "@vaadin/accordion/vaadin-accordion";
import { createVaadinComponent, eventMapper } from "../create-component";

const AccordionPanelEventMapper = eventMapper<AccordionPanelEventMap>();
const AccordionPanelEvents = {
  ...AccordionPanelEventMapper("onOpenedChanged", "opened-changed"),
};

const AccordionPanelProperties = {
  opened: "",
  autofocus: "",
  focusElement: "",
  disabled: "",
  tabindex: "",
  version: "",
};

const getAccordionPanelPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `<style>\n      :host([opened]) [part="content"] {\n        max-height: none !important;\n      }\n    </style>\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [part='content'] {\n          display: none;\n          overflow: hidden;\n        }\n\n        [part='summary'][disabled] {\n          pointer-events: none;\n        }\n\n        :host([opened]) [part='content'] {\n          display: block;\n          overflow: visible;\n        }\n      </style>\n      <div role="heading">\n        <div role="button" part="summary" aria-expanded="false" tabindex="0" aria-controls="vaadin-accordion-panel-content-0">\n          <span part="toggle" aria-hidden="true"></span>\n          <span part="summary-content"><slot name="summary"></slot></span>\n        </div>\n      </div>\n      <section part="content" aria-hidden="true" id="vaadin-accordion-panel-content-0" style="max-height: 0px;">\n        <slot></slot>\n      </section>\n    <style>\n  :host {\n    margin: var(--lumo-space-xs) 0;\n    outline: none;\n  }\n\n  [part='summary'] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    outline: none;\n    padding: var(--lumo-space-s) 0;\n    box-sizing: border-box;\n    font-family: var(--lumo-font-family);\n    font-size: var(--lumo-font-size-m);\n    font-weight: 500;\n    line-height: var(--lumo-line-height-xs);\n    color: var(--lumo-secondary-text-color);\n    background-color: inherit;\n    border-radius: var(--lumo-border-radius-m);\n    cursor: var(--lumo-clickable-cursor);\n    -webkit-tap-highlight-color: transparent;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  :host([focus-ring]) [part='summary'] {\n    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n  }\n\n  [part='toggle'] {\n    display: block;\n    width: 1em;\n    height: 1em;\n    margin-left: calc(var(--lumo-space-xs) * -1);\n    margin-right: var(--lumo-space-xs);\n    font-size: var(--lumo-icon-size-s);\n    line-height: 1;\n    color: var(--lumo-contrast-60pct);\n    font-family: 'lumo-icons';\n    cursor: var(--lumo-clickable-cursor);\n  }\n\n  :host([disabled]) [part='summary'],\n  :host([disabled]) [part='toggle'] {\n    color: var(--lumo-disabled-text-color);\n    cursor: default;\n  }\n\n  @media (hover: hover) {\n    :host(:not([disabled])) [part='summary']:hover,\n    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {\n      color: var(--lumo-contrast-80pct);\n    }\n  }\n\n  [part='toggle']::before {\n    content: var(--lumo-icons-angle-right);\n  }\n\n  :host([opened]) [part='toggle'] {\n    transform: rotate(90deg);\n  }\n\n  [part='content'] {\n    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);\n    font-size: var(--lumo-font-size-m);\n    line-height: var(--lumo-line-height-m);\n  }\n\n  :host([theme~='filled']) {\n    background-color: var(--lumo-contrast-5pct);\n    border-radius: var(--lumo-border-radius-m);\n  }\n\n  :host([theme~='filled']) [part='summary'] {\n    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);\n  }\n\n  :host([theme~='filled']) [part='content'] {\n    padding-left: var(--lumo-space-m);\n    padding-right: var(--lumo-space-m);\n  }\n\n  :host([theme~='small']) [part='summary'] {\n    padding-top: var(--lumo-space-xs);\n    padding-bottom: var(--lumo-space-xs);\n  }\n\n  :host([theme~='small']) [part='toggle'] {\n    margin-right: calc(var(--lumo-space-xs) / 2);\n  }\n\n  :host([theme~='small']) [part$='content'] {\n    font-size: var(--lumo-font-size-s);\n  }\n\n  :host([theme~='reverse']) [part='summary'] {\n    justify-content: space-between;\n  }\n\n  :host([theme~='reverse']) [part='toggle'] {\n    order: 1;\n    margin-right: 0;\n  }\n\n  :host([theme~='reverse'][theme~='filled']) [part='summary'] {\n    padding-left: var(--lumo-space-m);\n  }\n\n  /* RTL specific styles */\n  :host([dir='rtl']) [part='toggle'] {\n    margin-left: var(--lumo-space-xs);\n    margin-right: calc(var(--lumo-space-xs) * -1);\n  }\n\n  :host([dir='rtl']) [part='toggle']::before {\n    content: var(--lumo-icons-angle-left);\n  }\n\n  :host([opened][dir='rtl']) [part='toggle'] {\n    transform: rotate(-90deg);\n  }\n\n  :host([theme~='small'][dir='rtl']) [part='toggle'] {\n    margin-left: calc(var(--lumo-space-xs) / 2);\n  }\n\n  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {\n    margin-left: 0;\n  }\n\n  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {\n    padding-right: var(--lumo-space-m);\n  }\n\n\n  :host {\n    margin: 0;\n    border-bottom: solid 1px var(--lumo-contrast-10pct);\n  }\n\n  :host(:last-child) {\n    border-bottom: none;\n  }\n\n  :host([theme~='filled']) {\n    border-bottom: none;\n  }\n\n  :host([theme~='filled']:not(:last-child)) {\n    margin-bottom: 2px;\n  }\n</style>`,
});

export const AccordionPanel = createVaadinComponent<
  AccordionPanelClass,
  typeof AccordionPanelEvents
>(
  "vaadin-accordion-panel",
  AccordionPanelProperties,
  AccordionPanelEvents,
  () => import("@vaadin/accordion/vaadin-accordion-panel"),
  "AccordionPanel",
  undefined,
  getAccordionPanelPreRenderConfig
);

const AccordionEventMapper = eventMapper<AccordionEventMap>();
const AccordionEvents = {
  ...AccordionEventMapper("onItemsChanged", "items-changed"),
  ...AccordionEventMapper("onOpenedChanged", "opened-changed"),
};

const AccordionProperties = {
  opened: "",
  items: "",
  version: "",
};

const getAccordionPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n      <slot></slot>\n    <style></style>`,
});

export const Accordion = createVaadinComponent<
  AccordionClass,
  typeof AccordionEvents
>(
  "vaadin-accordion",
  AccordionProperties,
  AccordionEvents,
  () => import("@vaadin/accordion/vaadin-accordion"),
  "Accordion",
  undefined,
  getAccordionPreRenderConfig
);
