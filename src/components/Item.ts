// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { Item as ItemClass } from "@vaadin/item/vaadin-item";

const ItemEvents = {};

const ItemProperties = {
  disabled: "",
  value: "",
  selected: "",
};

export const Item = createPolymerComponent<ItemClass, typeof ItemEvents>(
  "vaadin-item",
  ItemProperties,
  ItemEvents,
  () => import("@vaadin/item/vaadin-item"),
  "Item"
);
