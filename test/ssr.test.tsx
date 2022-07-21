import "./web-components/test-component/src/mock-polymer-element";
import React from "react";
import { TestComponent as TestComponentClass } from "./web-components/test-component/test-component";
import { context } from "../src/create-component";
import { renderComponent } from "./helpers";

// @ts-ignore
globalThis.HTMLElement = undefined;
context.isBrowser = false;

const { TestComponent } = await import("./index");

describe("SSR", () => {
  let testComponentElement: TestComponentClass;

  beforeEach(async () => {
    [testComponentElement] = await renderComponent<TestComponentClass>(() => (
      <TestComponent value="foo">
        <div>overlay</div>
      </TestComponent>
    ));
  });

  test("should not define a custom element", () => {
    expect(customElements.get("test-component")).not.toBeDefined();
  });

  test("should not have a value attribute", () => {
    expect(testComponentElement.hasAttribute("value")).toBeFalsy();
  });

  test("should have has-value attribute", () => {
    expect(testComponentElement.hasAttribute("has-value")).toBeTruthy();
  });

  test("should render the child component", () => {
    expect(testComponentElement.firstElementChild?.textContent).toBe("overlay");
  });

  test("should not suppress a lit dev mode warning", () => {
    const { litIssuedWarnings } = window as any;
    expect(litIssuedWarnings).not.toBeDefined();
  });
});
