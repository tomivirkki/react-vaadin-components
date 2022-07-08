// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { MessageInput as MessageInputClass } from "@vaadin/message-input/vaadin-message-input";

const MessageInputEvents = {};

const MessageInputProperties = {
  value: "",
  i18n: "",
  disabled: "",
  version: "",
};

export const MessageInput = createPolymerComponent<
  MessageInputClass,
  typeof MessageInputEvents
>(
  "vaadin-message-input",
  MessageInputProperties,
  MessageInputEvents,
  () => import("@vaadin/message-input/vaadin-message-input"),
  "MessageInput"
);
