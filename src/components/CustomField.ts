// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  CustomField as CustomFieldClass,
  CustomFieldEventMap,
} from "@vaadin/custom-field/vaadin-custom-field";

const CustomFieldEventMapper = eventMapper<CustomFieldEventMap>();
const CustomFieldEvents = {
  ...CustomFieldEventMapper("onChange", "change"),
  ...CustomFieldEventMapper("onInternalTab", "internal-tab"),
  ...CustomFieldEventMapper("onInvalidChanged", "invalid-changed"),
  ...CustomFieldEventMapper("onValueChanged", "value-changed"),
  ...CustomFieldEventMapper("onValidated", "validated"),
};

const CustomFieldProperties = {
  inputs: "",
  i18n: "",
  name: "",
  value: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  version: "",
};

export const CustomField = createPolymerComponent<
  CustomFieldClass,
  typeof CustomFieldEvents
>(
  "vaadin-custom-field",
  CustomFieldProperties,
  CustomFieldEvents,
  () => import("@vaadin/custom-field/vaadin-custom-field"),
  "CustomField"
);
