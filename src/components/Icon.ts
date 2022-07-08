// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { Icon as IconClass } from "@vaadin/icon/vaadin-icon";

import type { Iconset as IconsetClass } from "@vaadin/icon/vaadin-iconset";

const IconEvents = {};

const IconProperties = {
  icon: "",
  svg: "",
  size: "",
  version: "",
};

export const Icon = createPolymerComponent<IconClass, typeof IconEvents>(
  "vaadin-icon",
  IconProperties,
  IconEvents,
  () => import("@vaadin/icon/vaadin-icon"),
  "Icon"
);

const IconsetEvents = {};

const IconsetProperties = {
  name: "",
  size: "",
  version: "",
};

export const Iconset = createPolymerComponent<
  IconsetClass,
  typeof IconsetEvents
>(
  "vaadin-iconset",
  IconsetProperties,
  IconsetEvents,
  () => import("@vaadin/icon/vaadin-iconset"),
  "Iconset"
);
