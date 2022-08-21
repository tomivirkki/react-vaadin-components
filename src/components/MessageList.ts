// Generated file. Do not edit.

import React from "react";

import type * as MessageListElement from "@vaadin/message-list/vaadin-message-list";
import type * as MessageElement from "@vaadin/message-list/vaadin-message";
import { createVaadinComponent, eventMapper } from "../create-component.js";

type MessageListClass = MessageListElement.MessageList;

const MessageListEvents = {};

const MessageListProperties = {
  items: "",
  version: "",
};

const getMessageListPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: block;\n          overflow: auto;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n      </style>\n      <div part="list" role="list">\n        <dom-repeat style="display: none;"><template is="dom-repeat"></template></dom-repeat>\n      </div>\n    <style></style>`,
});

export const MessageList = createVaadinComponent<
  MessageListClass,
  typeof MessageListEvents
>(
  "vaadin-message-list",
  MessageListProperties,
  MessageListEvents,
  () => import("@vaadin/message-list/vaadin-message-list.js"),
  "MessageList",
  undefined,
  getMessageListPreRenderConfig
);

export { MessageListElement };

type MessageClass = MessageElement.Message;

const MessageEvents = {};

const MessageProperties = {
  time: "",
  userName: "",
  userAbbr: "",
  userImg: "",
  userColorIndex: "",
  version: "",
};

const getMessagePreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: {},
  children: [],
  shadowDomContent: `\n      <style>\n        :host {\n          display: flex;\n          flex-direction: row;\n          outline: none;\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        [part='content'] {\n          display: flex;\n          flex-direction: column;\n          flex-grow: 1;\n        }\n\n        [part='header'] {\n          align-items: baseline;\n          display: flex;\n          flex-direction: row;\n          flex-wrap: wrap;\n        }\n\n        [part='name'] {\n          font-weight: 500;\n        }\n\n        [part='message'] {\n          white-space: pre-wrap;\n        }\n      </style>\n      <vaadin-message-avatar part="avatar" tabindex="-1" aria-hidden="true" title="anonymous" role="button"><template shadowroot="open">\n      <style>\n        :host {\n          display: inline-block;\n          flex: none;\n          border-radius: 50%;\n          overflow: hidden;\n          height: var(--vaadin-avatar-size, 64px);\n          width: var(--vaadin-avatar-size, 64px);\n          border: var(--vaadin-avatar-outline-width) solid transparent;\n          margin: calc(var(--vaadin-avatar-outline-width) * -1);\n          background-clip: content-box;\n          --vaadin-avatar-outline-width: 2px;\n        }\n\n        img {\n          height: 100%;\n          width: 100%;\n          object-fit: cover;\n        }\n\n        [part='icon'] {\n          font-size: 5.6em;\n        }\n\n        [part='abbr'] {\n          font-size: 2.2em;\n        }\n\n        [part='icon'] > text {\n          font-family: 'vaadin-avatar-icons';\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        svg[hidden] {\n          display: none !important;\n        }\n\n        :host([has-color-index]) {\n          position: relative;\n          background-color: var(--vaadin-avatar-user-color);\n        }\n\n        :host([has-color-index])::before {\n          position: absolute;\n          content: '';\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          border-radius: inherit;\n          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);\n        }\n      </style>\n      <img aria-hidden="true" hidden="">\n      <svg part="icon" id="avatar-icon" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">\n        <text dy=".35em" text-anchor="middle"></text>\n      </svg>\n      <svg part="abbr" id="avatar-abbr" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true" hidden="">\n        <text dy=".35em" text-anchor="middle"> </text>\n      </svg>\n    <style>\n    :host {\n      color: var(--lumo-secondary-text-color);\n      background-color: var(--lumo-contrast-10pct);\n      border-radius: 50%;\n      outline: none;\n      cursor: default;\n      user-select: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    :host([has-color-index]) {\n      color: var(--lumo-base-color);\n    }\n\n    :host([focus-ring]) {\n      border-color: var(--lumo-primary-color-50pct);\n    }\n\n    [part='icon'],\n    [part='abbr'] {\n      fill: currentColor;\n    }\n\n    [part='abbr'] {\n      font-family: var(--lumo-font-family);\n      font-size: 2.4375em;\n      font-weight: 500;\n    }\n\n    :host([theme~='xlarge']) [part='abbr'] {\n      font-size: 2.5em;\n    }\n\n    :host([theme~='large']) [part='abbr'] {\n      font-size: 2.375em;\n    }\n\n    :host([theme~='small']) [part='abbr'] {\n      font-size: 2.75em;\n    }\n\n    :host([theme~='xsmall']) [part='abbr'] {\n      font-size: 3em;\n    }\n\n    :host([theme~='xlarge']) {\n      --vaadin-avatar-size: var(--lumo-size-xl);\n    }\n\n    :host([theme~='large']) {\n      --vaadin-avatar-size: var(--lumo-size-l);\n    }\n\n    :host([theme~='small']) {\n      --vaadin-avatar-size: var(--lumo-size-s);\n    }\n\n    :host([theme~='xsmall']) {\n      --vaadin-avatar-size: var(--lumo-size-xs);\n    }\n  \n\n    :host {\n      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */\n      flex-shrink: 0;\n    }\n  \n\n    :host {\n      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));\n      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));\n    }\n\n    :host([dir='rtl']) {\n      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));\n      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);\n    }\n  </style></template></vaadin-message-avatar>\n      <div part="content">\n        <div part="header">\n          <span part="name"> </span>\n          <span part="time"> </span>\n        </div>\n        <div part="message"><slot></slot></div>\n      </div>\n    <style>\n    :host {\n      color: var(--lumo-body-text-color);\n      font-family: var(--lumo-font-family);\n      font-size: var(--lumo-font-size-m);\n      line-height: var(--lumo-line-height-m);\n      padding: var(--lumo-space-s) var(--lumo-space-m);\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-font-smoothing: antialiased;\n      -webkit-text-size-adjust: 100%;\n    }\n\n    :host([focus-ring]) {\n      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n    }\n\n    [part='header'] {\n      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));\n    }\n\n    [part='name'] {\n      margin-right: var(--lumo-space-s);\n    }\n\n    [part='name']:empty {\n      margin-right: 0;\n    }\n\n    :host([dir='rtl']) [part='name'] {\n      margin-left: var(--lumo-space-s);\n      margin-right: 0;\n    }\n\n    :host([dir='rtl']) [part='name']:empty {\n      margin-left: 0;\n    }\n\n    [part='time'] {\n      color: var(--lumo-secondary-text-color);\n      font-size: var(--lumo-font-size-s);\n    }\n  </style>`,
});

export const Message = createVaadinComponent<
  MessageClass,
  typeof MessageEvents
>(
  "vaadin-message",
  MessageProperties,
  MessageEvents,
  () => import("@vaadin/message-list/vaadin-message.js"),
  "Message",
  undefined,
  getMessagePreRenderConfig
);

export { MessageElement };
