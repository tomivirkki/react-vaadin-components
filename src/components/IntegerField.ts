// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  IntegerField as IntegerFieldClass,
  IntegerFieldEventMap,
} from "@vaadin/integer-field/vaadin-integer-field";

const IntegerFieldEventMapper = eventMapper<IntegerFieldEventMap>();
const IntegerFieldEvents = {
  ...IntegerFieldEventMapper("onInput", "input"),
  ...IntegerFieldEventMapper("onChange", "change"),
  ...IntegerFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...IntegerFieldEventMapper("onValueChanged", "value-changed"),
  ...IntegerFieldEventMapper("onValidated", "validated"),
};

const IntegerFieldProperties = {
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

export const IntegerField = createPolymerComponent<
  IntegerFieldClass,
  typeof IntegerFieldEvents
>(
  "vaadin-integer-field",
  IntegerFieldProperties,
  IntegerFieldEvents,
  () => import("@vaadin/integer-field/vaadin-integer-field"),
  "IntegerField"
);
