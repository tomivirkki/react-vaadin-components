// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type { FormItem as FormItemClass } from "@vaadin/form-layout/vaadin-form-item";

import type { FormLayout as FormLayoutClass } from "@vaadin/form-layout/vaadin-form-layout";

const FormItemEvents = {};

const FormItemProperties = {};

export const FormItem = createPolymerComponent<
  FormItemClass,
  typeof FormItemEvents
>(
  "vaadin-form-item",
  FormItemProperties,
  FormItemEvents,
  () => import("@vaadin/form-layout/vaadin-form-item"),
  "FormItem"
);

const FormLayoutEvents = {};

const FormLayoutProperties = {
  responsiveSteps: "",
  version: "",
};

export const FormLayout = createPolymerComponent<
  FormLayoutClass,
  typeof FormLayoutEvents
>(
  "vaadin-form-layout",
  FormLayoutProperties,
  FormLayoutEvents,
  () => import("@vaadin/form-layout/vaadin-form-layout"),
  "FormLayout"
);
