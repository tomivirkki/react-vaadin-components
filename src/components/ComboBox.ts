// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  ComboBoxLight as ComboBoxLightClass,
  ComboBoxLightEventMap,
} from "@vaadin/combo-box/vaadin-combo-box-light";

import type {
  ComboBox as ComboBoxClass,
  ComboBoxEventMap,
} from "@vaadin/combo-box/vaadin-combo-box";

const ComboBoxLightEventMapper = eventMapper<ComboBoxLightEventMap<unknown>>();
const ComboBoxLightEvents = {
  ...ComboBoxLightEventMapper("onChange", "change"),
  ...ComboBoxLightEventMapper("onCustomValueSet", "custom-value-set"),
  ...ComboBoxLightEventMapper("onFilterChanged", "filter-changed"),
  ...ComboBoxLightEventMapper("onInvalidChanged", "invalid-changed"),
  ...ComboBoxLightEventMapper("onOpenedChanged", "opened-changed"),
  ...ComboBoxLightEventMapper("onSelectedItemChanged", "selected-item-changed"),
  ...ComboBoxLightEventMapper("onValueChanged", "value-changed"),
  ...ComboBoxLightEventMapper("onValidated", "validated"),
};

const ComboBoxLightProperties = {
  attrForValue: "",
  invalid: "",
  required: "",
  disabled: "",
  inputElement: "",
  opened: "",
  autoOpenDisabled: "",
  readonly: "",
  renderer: "",
  items: "",
  allowCustomValue: "",
  filteredItems: "",
  value: "",
  loading: "",
  filter: "",
  selectedItem: "",
  itemLabelPath: "",
  itemValuePath: "",
  itemIdPath: "",
  pageSize: "",
  size: "",
  dataProvider: "",
};

export const ComboBoxLight = createPolymerComponent<
  ComboBoxLightClass,
  typeof ComboBoxLightEvents
>(
  "vaadin-combo-box-light",
  ComboBoxLightProperties,
  ComboBoxLightEvents,
  () => import("@vaadin/combo-box/vaadin-combo-box-light"),
  "ComboBoxLight"
);

const ComboBoxEventMapper = eventMapper<ComboBoxEventMap<unknown>>();
const ComboBoxEvents = {
  ...ComboBoxEventMapper("onChange", "change"),
  ...ComboBoxEventMapper("onCustomValueSet", "custom-value-set"),
  ...ComboBoxEventMapper("onFilterChanged", "filter-changed"),
  ...ComboBoxEventMapper("onInvalidChanged", "invalid-changed"),
  ...ComboBoxEventMapper("onOpenedChanged", "opened-changed"),
  ...ComboBoxEventMapper("onSelectedItemChanged", "selected-item-changed"),
  ...ComboBoxEventMapper("onValueChanged", "value-changed"),
  ...ComboBoxEventMapper("onValidated", "validated"),
};

const ComboBoxProperties = {
  version: "",
  autofocus: "",
  focusElement: "",
  stateTarget: "",
  disabled: "",
  ariaTarget: "",
  helperText: "",
  errorMessage: "",
  allowedCharPattern: "",
  autoselect: "",
  clearButtonVisible: "",
  name: "",
  placeholder: "",
  title: "",
  inputElement: "",
  label: "",
  pattern: "",
  preventInvalidInput: "",
  invalid: "",
  required: "",
  opened: "",
  autoOpenDisabled: "",
  readonly: "",
  renderer: "",
  items: "",
  allowCustomValue: "",
  filteredItems: "",
  value: "",
  loading: "",
  filter: "",
  selectedItem: "",
  itemLabelPath: "",
  itemValuePath: "",
  itemIdPath: "",
  pageSize: "",
  size: "",
  dataProvider: "",
};

export const ComboBox = createPolymerComponent<
  ComboBoxClass,
  typeof ComboBoxEvents
>(
  "vaadin-combo-box",
  ComboBoxProperties,
  ComboBoxEvents,
  () => import("@vaadin/combo-box/vaadin-combo-box"),
  "ComboBox"
);
