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

export const ProgressBar = createPolymerComponent<
  ProgressBarClass,
  typeof ProgressBarEvents
>(
  "vaadin-progress-bar",
  ProgressBarProperties,
  ProgressBarEvents,
  () => import("@vaadin/progress-bar/vaadin-progress-bar"),
  "ProgressBar"
);
