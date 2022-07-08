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
  indeterminate: "",
  name: "",
  label: "",
  checked: "",
  stateTarget: "",
  inputElement: "",
  value: "",
  autofocus: "",
  focusElement: "",
  tabindex: "",
  disabled: "",
  version: "",
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
