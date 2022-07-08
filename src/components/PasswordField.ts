// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  PasswordField as PasswordFieldClass,
  PasswordFieldEventMap,
} from "@vaadin/password-field/vaadin-password-field";

const PasswordFieldEventMapper = eventMapper<PasswordFieldEventMap>();
const PasswordFieldEvents = {
  ...PasswordFieldEventMapper("onInput", "input"),
  ...PasswordFieldEventMapper("onChange", "change"),
  ...PasswordFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...PasswordFieldEventMapper("onValueChanged", "value-changed"),
  ...PasswordFieldEventMapper("onValidated", "validated"),
};

const PasswordFieldProperties = {
  revealButtonHidden: "",
  passwordVisible: "",
  i18n: "",
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

export const PasswordField = createPolymerComponent<
  PasswordFieldClass,
  typeof PasswordFieldEvents
>(
  "vaadin-password-field",
  PasswordFieldProperties,
  PasswordFieldEvents,
  () => import("@vaadin/password-field/vaadin-password-field"),
  "PasswordField"
);
