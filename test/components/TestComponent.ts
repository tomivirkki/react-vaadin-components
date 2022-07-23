// Generated file. Do not edit.
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { createVaadinComponent, eventMapper } from "../../src/create-component";

import type {
  TestComponent as TestComponentClass,
  TestComponentEventMap,
} from "../web-components/test-component/test-component";

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

const TestComponentEventMapper = eventMapper<TestComponentEventMap>();
const TestComponentEvents = {
  ...TestComponentEventMapper("onValueChanged", "value-changed"),
};

const TestComponentProperties = {
  value: "",
  items: "",
  overlayRenderer: "",
  headerRenderer: "",
  renderer: "",
  opened: "",
  header: "",
  overlay: "",
  itemlist: "",
  headerComponent: "",
  itemRenderer: "",
};

type TestComponentClassExtended = Omit<
  TestComponentClass,
  "overlayRenderer" | "headerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  itemRenderer: (
    model: Parameters<
      Exclude<PropType<TestComponentClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

const getTestComponentPreRenderConfig = (props: { [key: string]: any }) => ({
  hostProperties: { "has-value": props.value ? "" : undefined },
  children: [
    { tag: "div", textContent: props.value, properties: { slot: "foo" } },
    { tag: "div" },
  ],
  shadowDomContent: `<style>\n      :host {\n        --test-component-prerender-style: 1;\n      }\n    </style>\n    <style>\n      :host {\n          --test-component-style: 1;\n      }\n    </style>\n    \n    <div id="header"></div>\n\n    <div id="overlay"></div>\n\n    <ul id="itemlist">\n        <li></li>\n        <li></li>\n    </ul>\n\n    <test-sub-component id="sub-component"><template shadowroot="open">\n    <style>\n      :host {\n          --test-sub-component-style: 1;\n      }\n    </style>\n  </template></test-sub-component>\n  `,
  postRender: (element: HTMLElement) => {
    element.style.setProperty("--test-component-background", "red");
  },
});

export const TestComponent = createVaadinComponent<
  TestComponentClassExtended,
  typeof TestComponentEvents
>(
  "test-component",
  TestComponentProperties,
  TestComponentEvents,
  () => import("../web-components/test-component/test-component"),
  "TestComponent",
  {
    childRenderer: "overlayRenderer",
    components: { headerComponent: "headerRenderer" },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getTestComponentPreRenderConfig
);
