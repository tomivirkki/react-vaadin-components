// Generated file. Do not edit.

import React from "react";

import type * as DialogElement from "@vaadin/dialog/vaadin-dialog";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type DialogClass = DialogElement.Dialog;

type DialogEventMap = DialogElement.DialogEventMap;

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
};

type DialogClassExtended = Omit<
  DialogClass,
  "renderer" | "headerRenderer" | "footerRenderer"
> & {};

const getDialogPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: none !important;\n        }\n      </style>\n\n      \n    `,
});

export const Dialog = createVaadinComponent<
  DialogClassExtended,
  typeof DialogEvents
>(
  "vaadin-dialog",
  DialogProperties,
  DialogEvents,
  () => import("@vaadin/dialog/vaadin-dialog.js"),
  "Dialog",
  {
    components: {
      "": "renderer",
      header: "headerRenderer",
      footer: "footerRenderer",
    },
  },
  getDialogPreRenderConfig
);

export { DialogElement };
