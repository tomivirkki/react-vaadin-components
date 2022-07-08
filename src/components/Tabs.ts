// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { Tab as TabClass } from "@vaadin/tabs/vaadin-tab";

import type { Tabs as TabsClass, TabsEventMap } from "@vaadin/tabs/vaadin-tabs";

const TabEvents = {};

const TabProperties = {
  version: "",
  disabled: "",
  value: "",
  selected: "",
};

export const Tab = createPolymerComponent<TabClass, typeof TabEvents>(
  "vaadin-tab",
  TabProperties,
  TabEvents,
  () => import("@vaadin/tabs/vaadin-tab"),
  "Tab"
);

const TabsEventMapper = eventMapper<TabsEventMap>();
const TabsEvents = {
  ...TabsEventMapper("onItemsChanged", "items-changed"),
  ...TabsEventMapper("onSelectedChanged", "selected-changed"),
};

const TabsProperties = {
  version: "",
  selected: "",
  orientation: "",
  items: "",
};

export const Tabs = createPolymerComponent<TabsClass, typeof TabsEvents>(
  "vaadin-tabs",
  TabsProperties,
  TabsEvents,
  () => import("@vaadin/tabs/vaadin-tabs"),
  "Tabs"
);
