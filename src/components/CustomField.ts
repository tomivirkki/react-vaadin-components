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
};

const CustomFieldProperties = {
  inputs: "HTMLElement[] | undefined",
  i18n: "CustomFieldI18n",
  name: "string | null | undefined",
  value: "string | null | undefined",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  version: "string",
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
