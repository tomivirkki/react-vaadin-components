// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  TimePicker as TimePickerClass,
  TimePickerEventMap,
} from "@vaadin/time-picker/vaadin-time-picker";

const TimePickerEventMapper = eventMapper<TimePickerEventMap>();
const TimePickerEvents = {
  ...TimePickerEventMapper("onChange", "change"),
  ...TimePickerEventMapper("onInvalidChanged", "invalid-changed"),
  ...TimePickerEventMapper("onValueChanged", "value-changed"),
  ...TimePickerEventMapper("onValidated", "validated"),
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

export const TimePicker = createPolymerComponent<
  TimePickerClass,
  typeof TimePickerEvents
>(
  "vaadin-time-picker",
  TimePickerProperties,
  TimePickerEvents,
  () => import("@vaadin/time-picker/vaadin-time-picker"),
  "TimePicker"
);
