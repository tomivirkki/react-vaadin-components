// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  DateTimePicker as DateTimePickerClass,
  DateTimePickerEventMap,
} from "@vaadin/date-time-picker/vaadin-date-time-picker";

const DateTimePickerEventMapper = eventMapper<DateTimePickerEventMap>();
const DateTimePickerEvents = {
  ...DateTimePickerEventMapper("onChange", "change"),
  ...DateTimePickerEventMapper("onInvalidChanged", "invalid-changed"),
  ...DateTimePickerEventMapper("onValueChanged", "value-changed"),
  ...DateTimePickerEventMapper("onValidated", "validated"),
};

const DateTimePickerProperties = {
  name: "",
  value: "",
  min: "",
  max: "",
  datePlaceholder: "",
  timePlaceholder: "",
  step: "",
  initialPosition: "",
  showWeekNumbers: "",
  autoOpenDisabled: "",
  readonly: "",
  autofocus: "",
  i18n: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  disabled: "",
  version: "",
};

export const DateTimePicker = createPolymerComponent<
  DateTimePickerClass,
  typeof DateTimePickerEvents
>(
  "vaadin-date-time-picker",
  DateTimePickerProperties,
  DateTimePickerEvents,
  () => import("@vaadin/date-time-picker/vaadin-date-time-picker"),
  "DateTimePicker"
);
