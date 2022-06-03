// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { Scroller as ScrollerClass } from "@vaadin/scroller/vaadin-scroller";

const ScrollerEvents = {};

const ScrollerProperties = {
  scrollDirection: '"horizontal" | "vertical" | "none" | undefined',
  tabindex: "number",
  version: "string",
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
