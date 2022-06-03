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
};

const DatePickerLightProperties = {
  attrForValue: "string",
  initialPosition: "string",
  opened: "boolean | null | undefined",
  autoOpenDisabled: "boolean",
  showWeekNumbers: "boolean",
  i18n: "DatePickerI18n",
  min: "string | undefined",
  max: "string | undefined",
  autofocus: "boolean",
  focusElement: "HTMLElement | null | undefined",
  disabled: "boolean",
  inputElement: "HTMLElement",
  value: "string",
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
};

const DatePickerProperties = {
  initialPosition: "string",
  opened: "boolean | null | undefined",
  autoOpenDisabled: "boolean",
  showWeekNumbers: "boolean",
  i18n: "DatePickerI18n",
  min: "string | undefined",
  max: "string | undefined",
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
