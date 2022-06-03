// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { MessageInput as MessageInputClass } from "@vaadin/message-input/vaadin-message-input";

const MessageInputEvents = {};

const MessageInputProperties = {
  value: "string | null | undefined",
  i18n: "MessageInputI18n",
  disabled: "boolean",
  version: "string",
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
