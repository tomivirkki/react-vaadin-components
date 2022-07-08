// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  SplitLayout as SplitLayoutClass,
  SplitLayoutEventMap,
} from "@vaadin/split-layout/vaadin-split-layout";

const SplitLayoutEventMapper = eventMapper<SplitLayoutEventMap>();
const SplitLayoutEvents = {
  ...SplitLayoutEventMapper("onSplitterDragend", "splitter-dragend"),
};

const SplitLayoutProperties = {
  orientation: "",
  version: "",
};

export const SplitLayout = createPolymerComponent<
  SplitLayoutClass,
  typeof SplitLayoutEvents
>(
  "vaadin-split-layout",
  SplitLayoutProperties,
  SplitLayoutEvents,
  () => import("@vaadin/split-layout/vaadin-split-layout"),
  "SplitLayout"
);
