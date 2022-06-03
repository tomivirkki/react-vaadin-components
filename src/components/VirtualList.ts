// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { VirtualList as VirtualListClass } from "@vaadin/virtual-list/vaadin-virtual-list";

const VirtualListEvents = {};

const VirtualListProperties = {
  firstVisibleIndex: "number",
  lastVisibleIndex: "number",
  renderer: "VirtualListRenderer<TItem> | undefined",
  items: "TItem[] | undefined",
  version: "string",
};

export const VirtualList = createPolymerComponent<
  VirtualListClass,
  typeof VirtualListEvents
>(
  "vaadin-virtual-list",
  VirtualListProperties,
  VirtualListEvents,
  () => import("@vaadin/virtual-list/vaadin-virtual-list"),
  "VirtualList"
);
