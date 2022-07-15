// Generated file. Do not edit.
type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
import {
  createPolymerComponent,
  eventMapper,
} from "../../src/create-component";

import type { TestComponent as TestComponentClass } from "../web-components/test-component/test-component";

const TestComponentEvents = {};

const TestComponentProperties = {
  value: "",
  items: "",
  overlayRenderer: "",
  headerRenderer: "",
  renderer: "",
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

const getTestComponentPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: {},
    children: [],
    shadowDomContent: `\n        <style>\n            :host {\n                display: block;\n                padding: 10px;\n                border: 1px solid #ccc;\n                background-color: #eee;\n            }\n        </style>\n        \n        <div id="header"></div>\n\n        <div id="overlay"></div>\n\n        <ul id="itemlist">\n            <li></li>\n            <li></li>\n        </ul>  \n    `,
  };
};

export const TestComponent = createPolymerComponent<
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
