// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  Dialog as DialogClass,
  DialogEventMap,
} from "@vaadin/dialog/vaadin-dialog";

const DialogEventMapper = eventMapper<DialogEventMap>();
const DialogEvents = {
  ...DialogEventMapper("onResize", "resize"),
  ...DialogEventMapper("onOpenedChanged", "opened-changed"),
};

const DialogProperties = {
  opened: "boolean",
  noCloseOnOutsideClick: "boolean",
  noCloseOnEsc: "boolean",
  ariaLabel: "string",
  renderer: "DialogRenderer | null | undefined",
  headerTitle: "string",
  headerRenderer: "DialogRenderer | null | undefined",
  footerRenderer: "DialogRenderer | null | undefined",
  modeless: "boolean",
  version: "string",
  draggable: "boolean",
  resizable: "boolean",
};

export const Dialog = createPolymerComponent<DialogClass, typeof DialogEvents>(
  "vaadin-dialog",
  DialogProperties,
  DialogEvents,
  () => import("@vaadin/dialog/vaadin-dialog"),
  "Dialog"
);
