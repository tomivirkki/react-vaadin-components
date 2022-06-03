// Generated file. Do not edit.
import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  LoginForm as LoginFormClass,
  LoginFormEventMap,
} from "@vaadin/login/vaadin-login-form";

import type {
  LoginOverlay as LoginOverlayClass,
  LoginOverlayEventMap,
} from "@vaadin/login/vaadin-login-overlay";

const LoginFormEventMapper = eventMapper<LoginFormEventMap>();
const LoginFormEvents = {
  ...LoginFormEventMapper("onForgotPassword", "forgot-password"),
  ...LoginFormEventMapper("onLogin", "login"),
};

const LoginFormProperties = {
  version: "string",
  action: "string | null",
  disabled: "boolean",
  error: "boolean",
  noForgotPassword: "boolean",
  noAutofocus: "boolean",
  i18n: "LoginI18n",
};

export const LoginForm = createPolymerComponent<
  LoginFormClass,
  typeof LoginFormEvents
>(
  "vaadin-login-form",
  LoginFormProperties,
  LoginFormEvents,
  () => import("@vaadin/login/vaadin-login-form"),
  "LoginForm"
);

const LoginOverlayEventMapper = eventMapper<LoginOverlayEventMap>();
const LoginOverlayEvents = {
  ...LoginOverlayEventMapper("onForgotPassword", "forgot-password"),
  ...LoginOverlayEventMapper("onLogin", "login"),
};

const LoginOverlayProperties = {
  description: "string",
  opened: "boolean",
  title: "string",
  version: "string",
  action: "string | null",
  disabled: "boolean",
  error: "boolean",
  noForgotPassword: "boolean",
  noAutofocus: "boolean",
  i18n: "LoginI18n",
};

export const LoginOverlay = createPolymerComponent<
  LoginOverlayClass,
  typeof LoginOverlayEvents
>(
  "vaadin-login-overlay",
  LoginOverlayProperties,
  LoginOverlayEvents,
  () => import("@vaadin/login/vaadin-login-overlay"),
  "LoginOverlay"
);
