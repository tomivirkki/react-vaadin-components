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
};

const TextFieldProperties = {
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
