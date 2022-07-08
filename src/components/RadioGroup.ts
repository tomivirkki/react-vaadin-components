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
  name: "",
  label: "",
  checked: "",
  stateTarget: "",
  inputElement: "",
  value: "",
  autofocus: "",
  focusElement: "",
  tabindex: "",
  disabled: "",
  version: "",
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
  ...RadioGroupEventMapper("onValidated", "validated"),
};

const RadioGroupProperties = {
  value: "",
  readonly: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  disabled: "",
  version: "",
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
