// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type { Button as ButtonClass } from "@vaadin/button/vaadin-button";

const ButtonEvents = {};

const ButtonProperties = {
  disabled: "boolean",
  tabindex: "number | null | undefined",
  version: "string",
};

export const Button = createPolymerComponent<ButtonClass, typeof ButtonEvents>(
  "vaadin-button",
  ButtonProperties,
  ButtonEvents,
  () => import("@vaadin/button/vaadin-button"),
  "Button"
);
