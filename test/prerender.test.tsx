import React from "react";
import type { TestComponent as TestComponentClass } from "./web-components/test-component/test-component.js";
import { TestComponent } from "./index";
import { renderComponent } from "./helpers";

// customElements.define is overridden in the test environment
// because prerendering takes place on browser before the Web Component
// is defined.
customElements.define = () => {};

describe("prerender", () => {
  let testComponentElement: TestComponentClass;
  let rerender: () => Promise<void>;

  beforeEach(async () => {
    const rendereredTestComponent =
      await renderComponent<TestComponentClass>(() => (
        <TestComponent>
          <div>child</div>
        </TestComponent>
      ));
    testComponentElement = rendereredTestComponent.element;
    rerender = rendereredTestComponent.rerender;
  });

  test("should not define custom element", () => {
    expect(customElements.get("test-component")).not.toBeDefined();
  });

  test("should have a shadow root", () => {
    expect(testComponentElement.shadowRoot).not.toBeNull();
  });
});
