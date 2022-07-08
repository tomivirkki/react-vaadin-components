// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  TextArea as TextAreaClass,
  TextAreaEventMap,
} from "@vaadin/text-area/vaadin-text-area";

const TextAreaEventMapper = eventMapper<TextAreaEventMap>();
const TextAreaEvents = {
  ...TextAreaEventMapper("onInput", "input"),
  ...TextAreaEventMapper("onChange", "change"),
  ...TextAreaEventMapper("onInvalidChanged", "invalid-changed"),
  ...TextAreaEventMapper("onValueChanged", "value-changed"),
  ...TextAreaEventMapper("onValidated", "validated"),
};

const TextAreaProperties = {
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

export const TextArea = createPolymerComponent<
  TextAreaClass,
  typeof TextAreaEvents
>(
  "vaadin-text-area",
  TextAreaProperties,
  TextAreaEvents,
  () => import("@vaadin/text-area/vaadin-text-area"),
  "TextArea"
);
