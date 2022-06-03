// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  RadioButton as RadioButtonClass,
  RadioButtonEventMap,
} from "@vaadin/radio-group/vaadin-radio-button";

import type {
  RadioGroup as RadioGroupClass,
  RadioGroupEventMap,
} from "@vaadin/radio-group/vaadin-radio-group";

const RadioButtonEventMapper = eventMapper<RadioButtonEventMap>();
const RadioButtonEvents = {
  ...RadioButtonEventMapper("onCheckedChanged", "checked-changed"),
};

const RadioButtonProperties = {
  name: "string",
  label: "string | null | undefined",
  checked: "boolean",
  stateTarget: "HTMLElement | null",
  inputElement: "HTMLElement",
  value: "string",
  autofocus: "boolean",
  focusElement: "HTMLElement | null | undefined",
  tabindex: "number | null | undefined",
  disabled: "boolean",
  version: "string",
};

export const RadioButton = createPolymerComponent<
  RadioButtonClass,
  typeof RadioButtonEvents
>(
  "vaadin-radio-button",
  RadioButtonProperties,
  RadioButtonEvents,
  () => import("@vaadin/radio-group/vaadin-radio-button"),
  "RadioButton"
);

const RadioGroupEventMapper = eventMapper<RadioGroupEventMap>();
const RadioGroupEvents = {
  ...RadioGroupEventMapper("onInvalidChanged", "invalid-changed"),
  ...RadioGroupEventMapper("onValueChanged", "value-changed"),
};

const RadioGroupProperties = {
  value: "string | null | undefined",
  readonly: "boolean",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  disabled: "boolean",
  version: "string",
};

export const RadioGroup = createPolymerComponent<
  RadioGroupClass,
  typeof RadioGroupEvents
>(
  "vaadin-radio-group",
  RadioGroupProperties,
  RadioGroupEvents,
  () => import("@vaadin/radio-group/vaadin-radio-group"),
  "RadioGroup"
);
