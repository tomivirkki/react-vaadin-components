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
  opened: "",
  noCloseOnOutsideClick: "",
  noCloseOnEsc: "",
  ariaLabel: "",
  renderer: "",
  headerTitle: "",
  headerRenderer: "",
  footerRenderer: "",
  modeless: "",
  version: "",
  draggable: "",
  resizable: "",
  headerComponent: "",
  footerComponent: "",
};

type DialogClassExtended = Omit<
  DialogClass,
  "renderer" | "headerRenderer" | "footerRenderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
};

export const Dialog = createPolymerComponent<
  DialogClassExtended,
  typeof DialogEvents
>(
  "vaadin-dialog",
  DialogProperties,
  DialogEvents,
  () => import("@vaadin/dialog/vaadin-dialog"),
  "Dialog",
  {
    childRenderer: "renderer",
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
  }
);
