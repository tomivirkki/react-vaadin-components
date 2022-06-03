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
};

const TimePickerProperties = {
  min: "string",
  max: "string",
  step: "number | null | undefined",
  autoOpenDisabled: "boolean",
  i18n: "TimePickerI18n",
  pattern: "string",
  preventInvalidInput: "boolean",
  autofocus: "boolean",
  focusElement: "HTMLElement | null | undefined",
  stateTarget: "HTMLElement | null",
  disabled: "boolean",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  allowedCharPattern: "string",
  autoselect: "boolean",
  clearButtonVisible: "boolean",
  name: "string",
  placeholder: "string",
  readonly: "boolean",
  title: "string",
  inputElement: "HTMLElement",
  value: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  version: "string",
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
