import { createPolymerComponent, eventMapper } from "../src/create-component";

export type TestComponentType = HTMLElement & {
  /**
   * Value of the component
   */
  value: string;
};

const TestComponentClass = class extends HTMLElement {} as TestComponentType &
  CustomElementConstructor;

const testComponentProperties = {
  value: "string",
};

type TestComponentEventMap = {
  change: CustomEvent<string>;
};

const testComponentEventMapper = eventMapper<TestComponentEventMap>();
const testComponentEvents = {
  ...testComponentEventMapper("onChange", "change"),
};

export const createTestComponent = (importFunc?: Function) => {
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
    "TestComponent"
  );
};
