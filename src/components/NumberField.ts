// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  NumberField as NumberFieldClass,
  NumberFieldEventMap,
} from "@vaadin/number-field/vaadin-number-field";

const NumberFieldEventMapper = eventMapper<NumberFieldEventMap>();
const NumberFieldEvents = {
  ...NumberFieldEventMapper("onInput", "input"),
  ...NumberFieldEventMapper("onChange", "change"),
  ...NumberFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...NumberFieldEventMapper("onValueChanged", "value-changed"),
  ...NumberFieldEventMapper("onValidated", "validated"),
};

const NumberFieldProperties = {
  hasControls: "",
  min: "",
  max: "",
  step: "",
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
  autocomplete: "",
  autocorrect: "",
  autocapitalize: "",
  inputElement: "",
  value: "",
  label: "",
  invalid: "",
  required: "",
  version: "",
};

export const NumberField = createPolymerComponent<
  NumberFieldClass,
  typeof NumberFieldEvents
>(
  "vaadin-number-field",
  NumberFieldProperties,
  NumberFieldEvents,
  () => import("@vaadin/number-field/vaadin-number-field"),
  "NumberField"
);
