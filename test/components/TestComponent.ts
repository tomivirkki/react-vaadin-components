// Generated file. Do not edit.

import React from "react";
import {
  createVaadinComponent,
  eventMapper,
} from "../../src/create-component.js";
import type * as TestComponentElement from "../web-components/test-component/test-component";

type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type TestComponentClass = TestComponentElement.TestComponent;

type TestComponentEventMap = TestComponentElement.TestComponentEventMap;

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
  itemRenderer: "",
};

type TestComponentClassExtended = Omit<
  TestComponentClass,
  "overlayRenderer" | "headerRenderer" | "renderer"
> & {
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
  () => import("../web-components/test-component/test-component.js"),
  "TestComponent",
  {
    components: { "": "overlayRenderer", header: "headerRenderer" },
    itemRenderers: { itemRenderer: "renderer" },
  },
  getTestComponentPreRenderConfig
);

export { TestComponentElement };
