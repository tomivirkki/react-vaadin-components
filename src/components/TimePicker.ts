// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import type {
  TimePicker as TimePickerClass,
  TimePickerEventMap,
} from "@vaadin/time-picker/vaadin-time-picker";
import { createVaadinComponent, eventMapper } from "../create-component";

const TimePickerEventMapper = eventMapper<TimePickerEventMap>();
const TimePickerEvents = {
  ...TimePickerEventMapper("onChange", "change"),
  ...TimePickerEventMapper("onInvalidChanged", "invalid-changed"),
  ...TimePickerEventMapper("onValueChanged", "value-changed"),
};

const TimePickerProperties = {
  min: "",
  max: "",
  step: "",
  autoOpenDisabled: "",
  i18n: "",
  pattern: "",
  preventInvalidInput: "",
  autofocus: "",
  focusElement: "",
  stateTarget: "",
  disabled: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  allowedCharPattern: "",
  autoselect: "",
  clearButtonVisible: "",
  name: "",
  placeholder: "",
  readonly: "",
  title: "",
  inputElement: "",
  value: "",
  label: "",
  invalid: "",
  required: "",
  version: "",
};

const getTimePickerPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: ``,
});

export const TimePicker = createVaadinComponent<
  TimePickerClass,
  typeof TimePickerEvents
>(
  "vaadin-time-picker",
  TimePickerProperties,
  TimePickerEvents,
  () => import("@vaadin/time-picker/vaadin-time-picker"),
  "TimePicker",
  undefined,
  getTimePickerPreRenderConfig
);
