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
  ...CheckboxGroupEventMapper("onValidated", "validated"),
};

const CheckboxGroupProperties = {
  value: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  disabled: "",
  version: "",
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
