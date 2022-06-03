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
};

const DateTimePickerProperties = {
  name: "string | null | undefined",
  value: "string",
  min: "string | undefined",
  max: "string | undefined",
  datePlaceholder: "string",
  timePlaceholder: "string",
  step: "number | null | undefined",
  initialPosition: "string",
  showWeekNumbers: "boolean",
  autoOpenDisabled: "boolean",
  readonly: "boolean",
  autofocus: "boolean",
  i18n: "DateTimePickerI18n",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  disabled: "boolean",
  version: "string",
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
