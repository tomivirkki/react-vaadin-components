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
};

const ComboBoxLightProperties = {
  attrForValue: "string",
  disabled: "boolean",
  inputElement: "HTMLElement",
  opened: "boolean",
  autoOpenDisabled: "boolean",
  readonly: "boolean",
  renderer: "ComboBoxRenderer<TItem> | null | undefined",
  items: "TItem[] | undefined",
  allowCustomValue: "boolean",
  filteredItems: "TItem[] | undefined",
  value: "string",
  loading: "boolean",
  filter: "string",
  selectedItem: "TItem | null | undefined",
  itemLabelPath: "string",
  itemValuePath: "string",
  itemIdPath: "string",
  invalid: "boolean",
  pageSize: "number",
  size: "number | undefined",
  dataProvider: "ComboBoxDataProvider<TItem> | null | undefined",
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
};

const ComboBoxProperties = {
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
  title: "string",
  inputElement: "HTMLElement",
  label: "string | null | undefined",
  pattern: "string",
  preventInvalidInput: "boolean",
  required: "boolean",
  opened: "boolean",
  autoOpenDisabled: "boolean",
  readonly: "boolean",
  renderer: "ComboBoxRenderer<TItem> | null | undefined",
  items: "TItem[] | undefined",
  allowCustomValue: "boolean",
  filteredItems: "TItem[] | undefined",
  value: "string",
  loading: "boolean",
  filter: "string",
  selectedItem: "TItem | null | undefined",
  itemLabelPath: "string",
  itemValuePath: "string",
  itemIdPath: "string",
  invalid: "boolean",
  pageSize: "number",
  size: "number | undefined",
  dataProvider: "ComboBoxDataProvider<TItem> | null | undefined",
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
