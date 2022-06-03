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
};

const TextAreaProperties = {
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
