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
};

const SelectProperties = {
  items: "!Array<!SelectItem>",
  opened: "boolean",
  renderer: "SelectRenderer | undefined",
  value: "string",
  name: "string | null | undefined",
  placeholder: "string | null | undefined",
  readonly: "boolean",
  autofocus: "boolean",
  focusElement: "HTMLElement | null | undefined",
  disabled: "boolean",
  tabindex: "number | null | undefined",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
  version: "string",
};

export const Select = createPolymerComponent<SelectClass, typeof SelectEvents>(
  "vaadin-select",
  SelectProperties,
  SelectEvents,
  () => import("@vaadin/select/vaadin-select"),
  "Select"
);
