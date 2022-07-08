// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { MessageList as MessageListClass } from "@vaadin/message-list/vaadin-message-list";

import type { Message as MessageClass } from "@vaadin/message-list/vaadin-message";

const MessageListEvents = {};

const MessageListProperties = {
  items: "",
  version: "",
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
  time: "",
  userName: "",
  userAbbr: "",
  userImg: "",
  userColorIndex: "",
  version: "",
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
