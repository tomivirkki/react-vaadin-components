// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { Scroller as ScrollerClass } from "@vaadin/scroller/vaadin-scroller";

const ScrollerEvents = {};

const ScrollerProperties = {
  scrollDirection: "",
  tabindex: "",
  version: "",
};

export const Scroller = createPolymerComponent<
  ScrollerClass,
  typeof ScrollerEvents
>(
  "vaadin-scroller",
  ScrollerProperties,
  ScrollerEvents,
  () => import("@vaadin/scroller/vaadin-scroller"),
  "Scroller"
);
