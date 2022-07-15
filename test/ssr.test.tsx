import React from "react";
import { TestComponent as TestComponentClass } from "./web-components/test-component/test-component.js";
import { context } from "../src/create-component";
import { renderComponent } from "./helpers";

// @ts-ignore
globalThis.HTMLElement = undefined;
context.isBrowser = false;

const { TestComponent } = await import("./index");

describe("SSR", () => {
  let testComponentElement: TestComponentClass;

  beforeEach(async () => {
    const rendereredTestComponent =
      await renderComponent<TestComponentClass>(() => (
        <TestComponent>
          <div>child</div>
        </TestComponent>
      ));
    testComponentElement = rendereredTestComponent.element;
  });

  test("should not define custom element", () => {
    expect(customElements.get("test-component")).not.toBeDefined();
  });

  test("should not have a value attribute", () => {
    expect(testComponentElement.hasAttribute("value")).toBeFalsy();
  });

  test("should render the child component", () => {
    expect(testComponentElement.firstElementChild?.textContent).toBe("child");
  });

  test("should not suppress a lit dev mode warning", () => {
    const litIssuedWarnings = (window as any).litIssuedWarnings;
    expect(litIssuedWarnings).not.toBeDefined();
  });
});
