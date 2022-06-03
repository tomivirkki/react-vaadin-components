// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  Checkbox as CheckboxClass,
  CheckboxEventMap,
} from "@vaadin/checkbox/vaadin-checkbox";

const CheckboxEventMapper = eventMapper<CheckboxEventMap>();
const CheckboxEvents = {
  ...CheckboxEventMapper("onCheckedChanged", "checked-changed"),
  ...CheckboxEventMapper("onIndeterminateChanged", "indeterminate-changed"),
};

const CheckboxProperties = {
  indeterminate: "boolean",
  name: "string",
  label: "string | null | undefined",
  checked: "boolean",
  stateTarget: "HTMLElement | null",
  inputElement: "HTMLElement",
  value: "string",
  autofocus: "boolean",
  focusElement: "HTMLElement | null | undefined",
  tabindex: "number | null | undefined",
  disabled: "boolean",
  version: "string",
};

export const Checkbox = createPolymerComponent<
  CheckboxClass,
  typeof CheckboxEvents
>(
  "vaadin-checkbox",
  CheckboxProperties,
  CheckboxEvents,
  () => import("@vaadin/checkbox/vaadin-checkbox"),
  "Checkbox"
);
