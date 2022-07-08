import { createPolymerComponent, eventMapper, RenderersConfig } from "../src/create-component";

// TODO: Genrerate the test component also

export type TestComponentType = HTMLElement & {
  value: string;

  itemRenderer: Function;
};

const TestComponentClass = class extends HTMLElement {} as TestComponentType &
  CustomElementConstructor;

const testComponentProperties = {
  value: "string",
  renderer: "Function",
  childRenderer: "Function",
};

type TestComponentEventMap = {
  change: CustomEvent<string>;
};

const testComponentEventMapper = eventMapper<TestComponentEventMap>();
const testComponentEvents = {
  ...testComponentEventMapper("onChange", "change"),
};

export const createTestComponent = (
  importFunc?: Function,
  renderers?: RenderersConfig
) => {
  if (!importFunc) {
    importFunc = () => {
      customElements.define("test-component", TestComponentClass);
      return Promise.resolve({ TestComponent: TestComponentClass });
    };
  }

  return createPolymerComponent<
    typeof TestComponentClass,
    typeof testComponentEvents
  >(
    "test-component",
    testComponentProperties,
    testComponentEvents,
    importFunc,
    "TestComponent",
    renderers
  );
};
