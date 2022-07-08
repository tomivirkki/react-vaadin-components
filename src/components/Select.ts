// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  Select as SelectClass,
  SelectEventMap,
} from "@vaadin/select/vaadin-select";

const SelectEventMapper = eventMapper<SelectEventMap>();
const SelectEvents = {
  ...SelectEventMapper("onChange", "change"),
  ...SelectEventMapper("onInvalidChanged", "invalid-changed"),
  ...SelectEventMapper("onOpenedChanged", "opened-changed"),
  ...SelectEventMapper("onValueChanged", "value-changed"),
  ...SelectEventMapper("onValidated", "validated"),
};

const SelectProperties = {
  items: "",
  opened: "",
  renderer: "",
  value: "",
  name: "",
  placeholder: "",
  readonly: "",
  autofocus: "",
  focusElement: "",
  disabled: "",
  tabindex: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  label: "",
  invalid: "",
  required: "",
  version: "",
};

export const Select = createPolymerComponent<SelectClass, typeof SelectEvents>(
  "vaadin-select",
  SelectProperties,
  SelectEvents,
  () => import("@vaadin/select/vaadin-select"),
  "Select"
);
