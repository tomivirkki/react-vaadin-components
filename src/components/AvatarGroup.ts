// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { AvatarGroup as AvatarGroupClass } from "@vaadin/avatar-group/vaadin-avatar-group";

const AvatarGroupEvents = {};

const AvatarGroupProperties = {
  items: "",
  maxItemsVisible: "",
  i18n: "",
  version: "",
};

export const AvatarGroup = createPolymerComponent<
  AvatarGroupClass,
  typeof AvatarGroupEvents
>(
  "vaadin-avatar-group",
  AvatarGroupProperties,
  AvatarGroupEvents,
  () => import("@vaadin/avatar-group/vaadin-avatar-group"),
  "AvatarGroup"
);
