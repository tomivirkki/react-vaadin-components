// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  DatePickerLight as DatePickerLightClass,
  DatePickerLightEventMap,
} from "@vaadin/date-picker/vaadin-date-picker-light";

import type {
  DatePicker as DatePickerClass,
  DatePickerEventMap,
} from "@vaadin/date-picker/vaadin-date-picker";

const DatePickerLightEventMapper = eventMapper<DatePickerLightEventMap>();
const DatePickerLightEvents = {
  ...DatePickerLightEventMapper("onChange", "change"),
  ...DatePickerLightEventMapper("onOpenedChanged", "opened-changed"),
  ...DatePickerLightEventMapper("onValueChanged", "value-changed"),
  ...DatePickerLightEventMapper("onValidated", "validated"),
};

const DatePickerLightProperties = {
  attrForValue: "",
  initialPosition: "",
  opened: "",
  autoOpenDisabled: "",
  showWeekNumbers: "",
  i18n: "",
  min: "",
  max: "",
  autofocus: "",
  focusElement: "",
  disabled: "",
  inputElement: "",
  value: "",
  invalid: "",
  required: "",
};

export const DatePickerLight = createPolymerComponent<
  DatePickerLightClass,
  typeof DatePickerLightEvents
>(
  "vaadin-date-picker-light",
  DatePickerLightProperties,
  DatePickerLightEvents,
  () => import("@vaadin/date-picker/vaadin-date-picker-light"),
  "DatePickerLight"
);

const DatePickerEventMapper = eventMapper<DatePickerEventMap>();
const DatePickerEvents = {
  ...DatePickerEventMapper("onChange", "change"),
  ...DatePickerEventMapper("onInvalidChanged", "invalid-changed"),
  ...DatePickerEventMapper("onOpenedChanged", "opened-changed"),
  ...DatePickerEventMapper("onValueChanged", "value-changed"),
  ...DatePickerEventMapper("onValidated", "validated"),
};

const DatePickerProperties = {
  initialPosition: "",
  opened: "",
  autoOpenDisabled: "",
  showWeekNumbers: "",
  i18n: "",
  min: "",
  max: "",
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

export const DatePicker = createPolymerComponent<
  DatePickerClass,
  typeof DatePickerEvents
>(
  "vaadin-date-picker",
  DatePickerProperties,
  DatePickerEvents,
  () => import("@vaadin/date-picker/vaadin-date-picker"),
  "DatePicker"
);
