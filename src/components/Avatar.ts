// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { Avatar as AvatarClass } from "@vaadin/avatar/vaadin-avatar";

const AvatarEvents = {};

const AvatarProperties = {
  img: "",
  abbr: "",
  name: "",
  colorIndex: "",
  i18n: "",
  version: "",
};

const getAvatarPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n      <style>\n        :host {\n          display: inline-block;\n          flex: none;\n          border-radius: 50%;\n          overflow: hidden;\n          height: var(--vaadin-avatar-size, 64px);\n          width: var(--vaadin-avatar-size, 64px);\n          border: var(--vaadin-avatar-outline-width) solid transparent;\n          margin: calc(var(--vaadin-avatar-outline-width) * -1);\n          background-clip: content-box;\n          --vaadin-avatar-outline-width: 2px;\n        }\n\n        img {\n          height: 100%;\n          width: 100%;\n          object-fit: cover;\n        }\n\n        [part='icon'] {\n          font-size: 5.6em;\n        }\n\n        [part='abbr'] {\n          font-size: 2.2em;\n        }\n\n        [part='icon'] > text {\n          font-family: 'vaadin-avatar-icons';\n        }\n\n        :host([hidden]) {\n          display: none !important;\n        }\n\n        svg[hidden] {\n          display: none !important;\n        }\n\n        :host([has-color-index]) {\n          position: relative;\n          background-color: var(--vaadin-avatar-user-color);\n        }\n\n        :host([has-color-index])::before {\n          position: absolute;\n          content: '';\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          border-radius: inherit;\n          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);\n        }\n      </style>\n      <img aria-hidden="true" hidden="">\n      <svg part="icon" id="avatar-icon" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">\n        <text dy=".35em" text-anchor="middle"></text>\n      </svg>\n      <svg part="abbr" id="avatar-abbr" viewBox="-50 -50 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true" hidden="">\n        <text dy=".35em" text-anchor="middle"> </text>\n      </svg>\n    <style>\n    :host {\n      color: var(--lumo-secondary-text-color);\n      background-color: var(--lumo-contrast-10pct);\n      border-radius: 50%;\n      outline: none;\n      cursor: default;\n      user-select: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-font-smoothing: antialiased;\n      -moz-osx-font-smoothing: grayscale;\n    }\n\n    :host([has-color-index]) {\n      color: var(--lumo-base-color);\n    }\n\n    :host([focus-ring]) {\n      border-color: var(--lumo-primary-color-50pct);\n    }\n\n    [part='icon'],\n    [part='abbr'] {\n      fill: currentColor;\n    }\n\n    [part='abbr'] {\n      font-family: var(--lumo-font-family);\n      font-size: 2.4375em;\n      font-weight: 500;\n    }\n\n    :host([theme~='xlarge']) [part='abbr'] {\n      font-size: 2.5em;\n    }\n\n    :host([theme~='large']) [part='abbr'] {\n      font-size: 2.375em;\n    }\n\n    :host([theme~='small']) [part='abbr'] {\n      font-size: 2.75em;\n    }\n\n    :host([theme~='xsmall']) [part='abbr'] {\n      font-size: 3em;\n    }\n\n    :host([theme~='xlarge']) {\n      --vaadin-avatar-size: var(--lumo-size-xl);\n    }\n\n    :host([theme~='large']) {\n      --vaadin-avatar-size: var(--lumo-size-l);\n    }\n\n    :host([theme~='small']) {\n      --vaadin-avatar-size: var(--lumo-size-s);\n    }\n\n    :host([theme~='xsmall']) {\n      --vaadin-avatar-size: var(--lumo-size-xs);\n    }\n  </style>`,
  };
};

export const Avatar = createPolymerComponent<AvatarClass, typeof AvatarEvents>(
  "vaadin-avatar",
  AvatarProperties,
  AvatarEvents,
  () => import("@vaadin/avatar/vaadin-avatar"),
  "Avatar",
  undefined,
  getAvatarPreRenderConfig
);
