// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  TextField as TextFieldClass,
  TextFieldEventMap,
} from "@vaadin/text-field/vaadin-text-field";

const TextFieldEventMapper = eventMapper<TextFieldEventMap>();
const TextFieldEvents = {
  ...TextFieldEventMapper("onInput", "input"),
  ...TextFieldEventMapper("onChange", "change"),
  ...TextFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...TextFieldEventMapper("onValueChanged", "value-changed"),
  ...TextFieldEventMapper("onValidated", "validated"),
};

const TextFieldProperties = {
  maxlength: "",
  minlength: "",
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

export const TextField = createPolymerComponent<
  TextFieldClass,
  typeof TextFieldEvents
>(
  "vaadin-text-field",
  TextFieldProperties,
  TextFieldEvents,
  () => import("@vaadin/text-field/vaadin-text-field"),
  "TextField"
);
