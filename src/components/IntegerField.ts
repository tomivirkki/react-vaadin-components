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
};

const IntegerFieldProperties = {
  hasControls: "boolean",
  min: "number | null | undefined",
  max: "number | null | undefined",
  step: "number",
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
