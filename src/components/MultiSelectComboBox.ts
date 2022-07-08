// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  MultiSelectComboBox as MultiSelectComboBoxClass,
  MultiSelectComboBoxEventMap,
} from "@vaadin/multi-select-combo-box/vaadin-multi-select-combo-box";

const MultiSelectComboBoxEventMapper =
  eventMapper<MultiSelectComboBoxEventMap<unknown>>();
const MultiSelectComboBoxEvents = {
  ...MultiSelectComboBoxEventMapper("onChange", "change"),
  ...MultiSelectComboBoxEventMapper("onCustomValueSet", "custom-value-set"),
  ...MultiSelectComboBoxEventMapper("onFilterChanged", "filter-changed"),
  ...MultiSelectComboBoxEventMapper("onInvalidChanged", "invalid-changed"),
  ...MultiSelectComboBoxEventMapper(
    "onSelectedItemsChanged",
    "selected-items-changed"
  ),
  ...MultiSelectComboBoxEventMapper("onValidated", "validated"),
};

const MultiSelectComboBoxProperties = {
  allowCustomValue: "",
  autoOpenDisabled: "",
  dataProvider: "",
  filteredItems: "",
  filter: "",
  items: "",
  itemLabelPath: "",
  itemIdPath: "",
  itemValuePath: "",
  i18n: "",
  loading: "",
  opened: "",
  pageSize: "",
  renderer: "",
  selectedItems: "",
  size: "",
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
  readonly: "",
  title: "",
  inputElement: "",
  value: "",
  label: "",
  invalid: "",
  required: "",
};

export const MultiSelectComboBox = createPolymerComponent<
  MultiSelectComboBoxClass,
  typeof MultiSelectComboBoxEvents
>(
  "vaadin-multi-select-combo-box",
  MultiSelectComboBoxProperties,
  MultiSelectComboBoxEvents,
  () => import("@vaadin/multi-select-combo-box/vaadin-multi-select-combo-box"),
  "MultiSelectComboBox"
);
