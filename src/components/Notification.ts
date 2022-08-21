// Generated file. Do not edit.

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

import React from "react";

import { ShowOptions } from "@vaadin/notification/vaadin-notification.js";
import { createRoot } from "react-dom/client";

export const Notification = {
  show: (content: string | React.ReactNode, options?: ShowOptions) => {
    import("@vaadin/notification/vaadin-notification.js");

    const notification = document.createElement("vaadin-notification");
    if (
      options &&
      typeof options.duration === "number" &&
      Number.isFinite(options.duration)
    ) {
      notification.duration = options.duration;
    }

    if (options && options.position) {
      notification.position = options.position;
    }

    if (options && options.theme) {
      notification.setAttribute("theme", options.theme);
    }

    notification.renderer = (root: any) => {
      if (typeof content === "string") {
        root.textContent = content;
      } else {
        if (!root.__reactRoot) {
          root.__reactRoot = createRoot(root);
        }
        root.__reactRoot.render(content);
      }
    };

    document.body.appendChild(notification);
    notification.opened = true;

    notification.addEventListener("opened-changed", (e) => {
      if (!e.detail.value) {
        notification.remove();
      }
    });

    return {
      close: () => {
        notification.opened = false;
      },
    };
  },
};
