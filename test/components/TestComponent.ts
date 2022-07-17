// Generated file. Do not edit.
type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
import { createVaadinComponent, eventMapper } from "../../src/create-component";

import type {
  TestComponent as TestComponentClass,
  TestComponentEventMap,
} from "../web-components/test-component/test-component";

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

const getTestComponentPreRenderConfig = (props: { [key: string]: any }) => {
  return {
    hostProperties: { "has-value": props.value ? "" : undefined },
    children: [
      { tag: "div", textContent: props.value, properties: { slot: "foo" } },
      { tag: "div" },
    ],
    shadowDomContent: `<style>\n      :host {\n        --test-component-prerender-style: 1;\n      }\n    </style><style>\n      :host {\n          --test-component-style: 1;\n      }\n    </style><div id="header"></div><div id="overlay"></div><ul id="itemlist">\n        <li></li>\n        <li></li>\n    </ul><test-sub-component id="sub-component"><template shadowroot="open"><style>\n      :host {\n          --test-sub-component-style: 1;\n      }\n    </style></template></test-sub-component>`,
  };
};

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
