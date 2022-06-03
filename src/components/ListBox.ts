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
  selected: "number | null | undefined",
  orientation: '"horizontal" | "vertical"',
  items: "Element[] | undefined",
  focused: "Element | null",
  version: "string",
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
