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
};

const PasswordFieldProperties = {
  revealButtonHidden: "boolean",
  passwordVisible: "boolean",
  i18n: "{ reveal: string; }",
  maxlength: "number | null | undefined",
  minlength: "number | null | undefined",
  pattern: "string",
  preventInvalidInput: "boolean",
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
  autocomplete: "string | undefined",
  autocorrect: '"on" | "off" | undefined',
  autocapitalize:
    '"on" | "off" | "none" | "characters" | "words" | "sentences" | undefined',
  inputElement: "HTMLElement",
  value: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  version: "string",
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
