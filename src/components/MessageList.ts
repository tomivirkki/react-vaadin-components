// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { MessageList as MessageListClass } from "@vaadin/message-list/vaadin-message-list";

import type { Message as MessageClass } from "@vaadin/message-list/vaadin-message";

const MessageListEvents = {};

const MessageListProperties = {
  items: "!Array<!MessageListItem>",
  version: "string",
};

export const MessageList = createPolymerComponent<
  MessageListClass,
  typeof MessageListEvents
>(
  "vaadin-message-list",
  MessageListProperties,
  MessageListEvents,
  () => import("@vaadin/message-list/vaadin-message-list"),
  "MessageList"
);

const MessageEvents = {};

const MessageProperties = {
  time: "string | null | undefined",
  userName: "string | null | undefined",
  userAbbr: "string | null | undefined",
  userImg: "string | null | undefined",
  userColorIndex: "number | null | undefined",
  version: "string",
};

export const Message = createPolymerComponent<
  MessageClass,
  typeof MessageEvents
>(
  "vaadin-message",
  MessageProperties,
  MessageEvents,
  () => import("@vaadin/message-list/vaadin-message"),
  "Message"
);
