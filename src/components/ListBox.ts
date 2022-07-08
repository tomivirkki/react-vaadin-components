// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  ListBox as ListBoxClass,
  ListBoxEventMap,
} from "@vaadin/list-box/vaadin-list-box";

const ListBoxEventMapper = eventMapper<ListBoxEventMap>();
const ListBoxEvents = {
  ...ListBoxEventMapper("onItemsChanged", "items-changed"),
  ...ListBoxEventMapper("onSelectedChanged", "selected-changed"),
  ...ListBoxEventMapper("onSelectedValuesChanged", "selected-values-changed"),
};

const ListBoxProperties = {
  selected: "",
  orientation: "",
  items: "",
  focused: "",
  version: "",
};

export const ListBox = createPolymerComponent<
  ListBoxClass,
  typeof ListBoxEvents
>(
  "vaadin-list-box",
  ListBoxProperties,
  ListBoxEvents,
  () => import("@vaadin/list-box/vaadin-list-box"),
  "ListBox"
);
