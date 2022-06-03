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
};

const MultiSelectComboBoxProperties = {
  allowCustomValue: "boolean",
  autoOpenDisabled: "boolean",
  dataProvider: "ComboBoxDataProvider<TItem> | null | undefined",
  filteredItems: "TItem[] | undefined",
  filter: "string",
  items: "TItem[] | undefined",
  itemLabelPath: "string",
  itemIdPath: "string",
  itemValuePath: "string",
  i18n: "MultiSelectComboBoxI18n",
  loading: "boolean",
  opened: "boolean",
  pageSize: "number",
  renderer: "MultiSelectComboBoxRenderer<TItem> | null | undefined",
  selectedItems: "TItem[]",
  size: "number | undefined",
  version: "string",
  autofocus: "boolean",
  focusElement: "HTMLElement | null | undefined",
  stateTarget: "HTMLElement | null",
  disabled: "boolean",
  ariaTarget: "HTMLElement",
  helperText: "string",
  errorMessage: "string",
  allowedCharPattern: "string",
  autoselect: "boolean",
  clearButtonVisible: "boolean",
  name: "string",
  placeholder: "string",
  readonly: "boolean",
  title: "string",
  inputElement: "HTMLElement",
  value: "string",
  label: "string | null | undefined",
  invalid: "boolean",
  required: "boolean",
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
