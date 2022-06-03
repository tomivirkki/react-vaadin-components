// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { Avatar as AvatarClass } from "@vaadin/avatar/vaadin-avatar";

const AvatarEvents = {};

const AvatarProperties = {
  img: "string | null | undefined",
  abbr: "string | null | undefined",
  name: "string | null | undefined",
  colorIndex: "number | null | undefined",
  i18n: "AvatarI18n",
  version: "string",
};

export const Avatar = createPolymerComponent<AvatarClass, typeof AvatarEvents>(
  "vaadin-avatar",
  AvatarProperties,
  AvatarEvents,
  () => import("@vaadin/avatar/vaadin-avatar"),
  "Avatar"
);
