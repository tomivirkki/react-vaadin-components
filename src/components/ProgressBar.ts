// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { ProgressBar as ProgressBarClass } from "@vaadin/progress-bar/vaadin-progress-bar";

const ProgressBarEvents = {};

const ProgressBarProperties = {
  value: "",
  min: "",
  max: "",
  indeterminate: "",
  version: "",
};

const getProgressBarPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `<style>\n      :host {\n        --vaadin-progress-value: 0;\n      }\n    </style>\n      <style>\n        :host {\n          display: block;\n          width: 100%; /* prevent collapsing inside non-stretching column flex */\n          height: 8px;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [part='bar'] {\n          height: 100%;\n        }\n\n        [part='value'] {\n          height: 100%;\n          transform-origin: 0 50%;\n          transform: scaleX(var(--vaadin-progress-value));\n        }\n\n        /* RTL specific styles */\n\n        :host([dir='rtl']) [part='value'] {\n          transform-origin: 100% 50%;\n        }\n      </style>\n\n      <div part="bar">\n        <div part="value"></div>\n      </div>\n    <style>\n    :host {\n      height: calc(var(--lumo-size-l) / 10);\n      margin: var(--lumo-space-s) 0;\n    }\n\n    [part='bar'] {\n      border-radius: var(--lumo-border-radius-m);\n      background-color: var(--lumo-contrast-10pct);\n    }\n\n    [part='value'] {\n      border-radius: var(--lumo-border-radius-m);\n      background-color: var(--lumo-primary-color);\n      /* Use width instead of transform to preserve border radius */\n      transform: none;\n      width: calc(var(--vaadin-progress-value) * 100%);\n      will-change: width;\n      transition: 0.1s width linear;\n    }\n\n    /* Indeterminate mode */\n    :host([indeterminate]) [part='value'] {\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to right,\n        var(--lumo-primary-color-10pct) 10%,\n        var(--lumo-primary-color)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to left,\n        var(--lumo-primary-color-10pct) 10%,\n        var(--lumo-primary-color)\n      );\n      width: 100%;\n      background-color: transparent !important;\n      background-image: var(--lumo-progress-indeterminate-progress-bar-background);\n      opacity: 0.75;\n      will-change: transform;\n      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n\n    @keyframes vaadin-progress-indeterminate {\n      0% {\n        transform: scaleX(0.015);\n        transform-origin: 0% 0%;\n      }\n\n      25% {\n        transform: scaleX(0.4);\n      }\n\n      50% {\n        transform: scaleX(0.015);\n        transform-origin: 100% 0%;\n        background-image: var(--lumo-progress-indeterminate-progress-bar-background);\n      }\n\n      50.1% {\n        transform: scaleX(0.015);\n        transform-origin: 100% 0%;\n        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);\n      }\n\n      75% {\n        transform: scaleX(0.4);\n      }\n\n      100% {\n        transform: scaleX(0.015);\n        transform-origin: 0% 0%;\n        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);\n      }\n    }\n\n    :host(:not([aria-valuenow])) [part='value']::before,\n    :host([indeterminate]) [part='value']::before {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      border-radius: inherit;\n      background-color: var(--lumo-primary-color);\n      will-change: opacity;\n      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);\n    }\n\n    @keyframes vaadin-progress-pulse3 {\n      0% {\n        opacity: 1;\n      }\n\n      10% {\n        opacity: 0;\n      }\n\n      40% {\n        opacity: 0;\n      }\n\n      50% {\n        opacity: 1;\n      }\n\n      50.1% {\n        opacity: 1;\n      }\n\n      60% {\n        opacity: 0;\n      }\n\n      90% {\n        opacity: 0;\n      }\n\n      100% {\n        opacity: 1;\n      }\n    }\n\n    /* Contrast color */\n    :host([theme~='contrast']) [part='value'],\n    :host([theme~='contrast']) [part='value']::before {\n      background-color: var(--lumo-contrast-80pct);\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to right,\n        var(--lumo-contrast-5pct) 10%,\n        var(--lumo-contrast-80pct)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to left,\n        var(--lumo-contrast-5pct) 10%,\n        var(--lumo-contrast-60pct)\n      );\n    }\n\n    /* Error color */\n    :host([theme~='error']) [part='value'],\n    :host([theme~='error']) [part='value']::before {\n      background-color: var(--lumo-error-color);\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to right,\n        var(--lumo-error-color-10pct) 10%,\n        var(--lumo-error-color)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to left,\n        var(--lumo-error-color-10pct) 10%,\n        var(--lumo-error-color)\n      );\n    }\n\n    /* Primary color */\n    :host([theme~='success']) [part='value'],\n    :host([theme~='success']) [part='value']::before {\n      background-color: var(--lumo-success-color);\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to right,\n        var(--lumo-success-color-10pct) 10%,\n        var(--lumo-success-color)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to left,\n        var(--lumo-success-color-10pct) 10%,\n        var(--lumo-success-color)\n      );\n    }\n\n    /* RTL specific styles */\n    :host([indeterminate][dir='rtl']) [part='value'] {\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to left,\n        var(--lumo-primary-color-10pct) 10%,\n        var(--lumo-primary-color)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to right,\n        var(--lumo-primary-color-10pct) 10%,\n        var(--lumo-primary-color)\n      );\n      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);\n    }\n\n    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,\n    :host([indeterminate][dir='rtl']) [part='value']::before {\n      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);\n    }\n\n    @keyframes vaadin-progress-indeterminate-rtl {\n      0% {\n        transform: scaleX(0.015);\n        transform-origin: 100% 0%;\n      }\n\n      25% {\n        transform: scaleX(0.4);\n      }\n\n      50% {\n        transform: scaleX(0.015);\n        transform-origin: 0% 0%;\n        background-image: var(--lumo-progress-indeterminate-progress-bar-background);\n      }\n\n      50.1% {\n        transform: scaleX(0.015);\n        transform-origin: 0% 0%;\n        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);\n      }\n\n      75% {\n        transform: scaleX(0.4);\n      }\n\n      100% {\n        transform: scaleX(0.015);\n        transform-origin: 100% 0%;\n        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);\n      }\n    }\n\n    /* Contrast color */\n    :host([theme~='contrast'][dir='rtl']) [part='value'],\n    :host([theme~='contrast'][dir='rtl']) [part='value']::before {\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to left,\n        var(--lumo-contrast-5pct) 10%,\n        var(--lumo-contrast-80pct)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to right,\n        var(--lumo-contrast-5pct) 10%,\n        var(--lumo-contrast-60pct)\n      );\n    }\n\n    /* Error color */\n    :host([theme~='error'][dir='rtl']) [part='value'],\n    :host([theme~='error'][dir='rtl']) [part='value']::before {\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to left,\n        var(--lumo-error-color-10pct) 10%,\n        var(--lumo-error-color)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to right,\n        var(--lumo-error-color-10pct) 10%,\n        var(--lumo-error-color)\n      );\n    }\n\n    /* Primary color */\n    :host([theme~='success'][dir='rtl']) [part='value'],\n    :host([theme~='success'][dir='rtl']) [part='value']::before {\n      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(\n        to left,\n        var(--lumo-success-color-10pct) 10%,\n        var(--lumo-success-color)\n      );\n      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(\n        to right,\n        var(--lumo-success-color-10pct) 10%,\n        var(--lumo-success-color)\n      );\n    }\n  </style>`,
  };
};

export const ProgressBar = createPolymerComponent<
  ProgressBarClass,
  typeof ProgressBarEvents
>(
  "vaadin-progress-bar",
  ProgressBarProperties,
  ProgressBarEvents,
  () => import("@vaadin/progress-bar/vaadin-progress-bar"),
  "ProgressBar",
  undefined,
  getProgressBarPreRenderConfig
);
