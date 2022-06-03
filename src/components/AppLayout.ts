// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  AppLayout as AppLayoutClass,
  AppLayoutEventMap,
} from "@vaadin/app-layout/vaadin-app-layout";

import type { DrawerToggle as DrawerToggleClass } from "@vaadin/app-layout/vaadin-drawer-toggle";

const AppLayoutEventMapper = eventMapper<AppLayoutEventMap>();
const AppLayoutEvents = {
  ...AppLayoutEventMapper("onDrawerOpenedChanged", "drawer-opened-changed"),
  ...AppLayoutEventMapper("onOverlayChanged", "overlay-changed"),
  ...AppLayoutEventMapper("onPrimarySectionChanged", "primary-section-changed"),
};

const AppLayoutProperties = {
  i18n: "AppLayoutI18n",
  primarySection: "navbar|drawer",
  drawerOpened: "boolean",
  overlay: "boolean",
  closeDrawerOn: "string",
  version: "string",
};

export const AppLayout = createPolymerComponent<
  AppLayoutClass,
  typeof AppLayoutEvents
>(
  "vaadin-app-layout",
  AppLayoutProperties,
  AppLayoutEvents,
  () => import("@vaadin/app-layout/vaadin-app-layout"),
  "AppLayout"
);

const DrawerToggleEvents = {};

const DrawerToggleProperties = {
  ariaLabel: "string",
  disabled: "boolean",
  tabindex: "number | null | undefined",
  version: "string",
};

export const DrawerToggle = createPolymerComponent<
  DrawerToggleClass,
  typeof DrawerToggleEvents
>(
  "vaadin-drawer-toggle",
  DrawerToggleProperties,
  DrawerToggleEvents,
  () => import("@vaadin/app-layout/vaadin-drawer-toggle"),
  "DrawerToggle"
);
