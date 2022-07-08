// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  Details as DetailsClass,
  DetailsEventMap,
} from "@vaadin/details/vaadin-details";

const DetailsEventMapper = eventMapper<DetailsEventMap>();
const DetailsEvents = {
  ...DetailsEventMapper("onOpenedChanged", "opened-changed"),
};

const DetailsProperties = {
  opened: "",
  autofocus: "",
  focusElement: "",
  disabled: "",
  tabindex: "",
  version: "",
};

export const Details = createPolymerComponent<
  DetailsClass,
  typeof DetailsEvents
>(
  "vaadin-details",
  DetailsProperties,
  DetailsEvents,
  () => import("@vaadin/details/vaadin-details"),
  "Details"
);
