// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { AccordionPanel as AccordionPanelClass } from "@vaadin/accordion/vaadin-accordion-panel";

import type { DetailsEventMap as AccordionPanelEventMap } from "@vaadin/details";
import type {
  Accordion as AccordionClass,
  AccordionEventMap,
} from "@vaadin/accordion/vaadin-accordion";

const AccordionPanelEventMapper = eventMapper<AccordionPanelEventMap>();
const AccordionPanelEvents = {
  ...AccordionPanelEventMapper("onOpenedChanged", "opened-changed"),
};

const AccordionPanelProperties = {
  opened: "",
  autofocus: "",
  focusElement: "",
  disabled: "",
  tabindex: "",
  version: "",
};

export const AccordionPanel = createPolymerComponent<
  AccordionPanelClass,
  typeof AccordionPanelEvents
>(
  "vaadin-accordion-panel",
  AccordionPanelProperties,
  AccordionPanelEvents,
  () => import("@vaadin/accordion/vaadin-accordion-panel"),
  "AccordionPanel"
);

const AccordionEventMapper = eventMapper<AccordionEventMap>();
const AccordionEvents = {
  ...AccordionEventMapper("onItemsChanged", "items-changed"),
  ...AccordionEventMapper("onOpenedChanged", "opened-changed"),
};

const AccordionProperties = {
  opened: "",
  items: "",
  version: "",
};

export const Accordion = createPolymerComponent<
  AccordionClass,
  typeof AccordionEvents
>(
  "vaadin-accordion",
  AccordionProperties,
  AccordionEvents,
  () => import("@vaadin/accordion/vaadin-accordion"),
  "Accordion"
);
