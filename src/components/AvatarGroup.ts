// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { AvatarGroup as AvatarGroupClass } from "@vaadin/avatar-group/vaadin-avatar-group";

const AvatarGroupEvents = {};

const AvatarGroupProperties = {
  items: "AvatarGroupItem[] | undefined",
  maxItemsVisible: "number | null | undefined",
  i18n: "AvatarGroupI18n",
  version: "string",
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
