// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  NumberField as NumberFieldClass,
  NumberFieldEventMap,
} from "@vaadin/number-field/vaadin-number-field";

const NumberFieldEventMapper = eventMapper<NumberFieldEventMap>();
const NumberFieldEvents = {
  ...NumberFieldEventMapper("onInput", "input"),
  ...NumberFieldEventMapper("onChange", "change"),
  ...NumberFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...NumberFieldEventMapper("onValueChanged", "value-changed"),
};

const NumberFieldProperties = {
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

export const NumberField = createPolymerComponent<
  NumberFieldClass,
  typeof NumberFieldEvents
>(
  "vaadin-number-field",
  NumberFieldProperties,
  NumberFieldEvents,
  () => import("@vaadin/number-field/vaadin-number-field"),
  "NumberField"
);
