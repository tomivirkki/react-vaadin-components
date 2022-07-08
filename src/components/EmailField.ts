// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  EmailField as EmailFieldClass,
  EmailFieldEventMap,
} from "@vaadin/email-field/vaadin-email-field";

const EmailFieldEventMapper = eventMapper<EmailFieldEventMap>();
const EmailFieldEvents = {
  ...EmailFieldEventMapper("onInput", "input"),
  ...EmailFieldEventMapper("onChange", "change"),
  ...EmailFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...EmailFieldEventMapper("onValueChanged", "value-changed"),
  ...EmailFieldEventMapper("onValidated", "validated"),
};

const EmailFieldProperties = {
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

export const EmailField = createPolymerComponent<
  EmailFieldClass,
  typeof EmailFieldEvents
>(
  "vaadin-email-field",
  EmailFieldProperties,
  EmailFieldEvents,
  () => import("@vaadin/email-field/vaadin-email-field"),
  "EmailField"
);
