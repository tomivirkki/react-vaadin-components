// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  ContextMenu as ContextMenuClass,
  ContextMenuEventMap,
} from "@vaadin/context-menu/vaadin-context-menu";

const ContextMenuEventMapper = eventMapper<ContextMenuEventMap>();
const ContextMenuEvents = {
  ...ContextMenuEventMapper("onOpenedChanged", "opened-changed"),
  ...ContextMenuEventMapper("onItemSelected", "item-selected"),
};

const ContextMenuProperties = {
  selector: "string | null | undefined",
  opened: "boolean",
  openOn: "string",
  listenOn: "HTMLElement",
  closeOn: "string",
  renderer: "ContextMenuRenderer | null | undefined",
  version: "string",
  items: "ContextMenuItem[] | undefined",
};

export const ContextMenu = createPolymerComponent<
  ContextMenuClass,
  typeof ContextMenuEvents
>(
  "vaadin-context-menu",
  ContextMenuProperties,
  ContextMenuEvents,
  () => import("@vaadin/context-menu/vaadin-context-menu"),
  "ContextMenu"
);
