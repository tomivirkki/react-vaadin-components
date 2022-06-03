// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  MenuBar as MenuBarClass,
  MenuBarEventMap,
} from "@vaadin/menu-bar/vaadin-menu-bar";

const MenuBarEventMapper = eventMapper<MenuBarEventMap>();
const MenuBarEvents = {
  ...MenuBarEventMapper("onItemSelected", "item-selected"),
};

const MenuBarProperties = {
  items: "MenuBarItem[]",
  i18n: "MenuBarI18n",
  disabled: "boolean",
  openOnHover: "boolean",
  version: "string",
};

export const MenuBar = createPolymerComponent<
  MenuBarClass,
  typeof MenuBarEvents
>(
  "vaadin-menu-bar",
  MenuBarProperties,
  MenuBarEvents,
  () => import("@vaadin/menu-bar/vaadin-menu-bar"),
  "MenuBar"
);
