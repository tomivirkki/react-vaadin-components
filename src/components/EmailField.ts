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
};

const EmailFieldProperties = {
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
