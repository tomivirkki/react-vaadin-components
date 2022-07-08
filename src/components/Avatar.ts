// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { Avatar as AvatarClass } from "@vaadin/avatar/vaadin-avatar";

const AvatarEvents = {};

const AvatarProperties = {
  img: "",
  abbr: "",
  name: "",
  colorIndex: "",
  i18n: "",
  version: "",
};

export const Avatar = createPolymerComponent<AvatarClass, typeof AvatarEvents>(
  "vaadin-avatar",
  AvatarProperties,
  AvatarEvents,
  () => import("@vaadin/avatar/vaadin-avatar"),
  "Avatar"
);
