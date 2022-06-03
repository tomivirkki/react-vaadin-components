// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  CheckboxGroup as CheckboxGroupClass,
  CheckboxGroupEventMap,
} from "@vaadin/checkbox-group/vaadin-checkbox-group";

const CheckboxGroupEventMapper = eventMapper<CheckboxGroupEventMap>();
const CheckboxGroupEvents = {
  ...CheckboxGroupEventMapper("onInvalidChanged", "invalid-changed"),
  ...CheckboxGroupEventMapper("onValueChanged", "value-changed"),
};

const CheckboxGroupProperties = {
  value: "string[]",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  disabled: "boolean",
  version: "string",
};

export const CheckboxGroup = createPolymerComponent<
  CheckboxGroupClass,
  typeof CheckboxGroupEvents
>(
  "vaadin-checkbox-group",
  CheckboxGroupProperties,
  CheckboxGroupEvents,
  () => import("@vaadin/checkbox-group/vaadin-checkbox-group"),
  "CheckboxGroup"
);
