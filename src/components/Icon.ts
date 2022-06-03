// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { Icon as IconClass } from "@vaadin/icon/vaadin-icon";

import type { Iconset as IconsetClass } from "@vaadin/icon/vaadin-iconset";

const IconEvents = {};

const IconProperties = {
  icon: "string | null",
  svg: "IconSvgLiteral | null",
  size: "number",
  version: "string",
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
  name: "string",
  size: "number",
  version: "string",
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
