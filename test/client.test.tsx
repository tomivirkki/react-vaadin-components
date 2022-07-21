import "./web-components/test-component/src/mock-polymer-element";
import React from "react";
import type { TestComponent as TestComponentClass } from "./web-components/test-component/test-component";
import { TestComponent } from "./index";
import { renderComponent } from "./helpers";

describe("client", () => {
  let testComponentElement: TestComponentClass;

  beforeEach(async () => {
    [testComponentElement] = await renderComponent<TestComponentClass>(() => (
      <TestComponent value="foo" opened />
    ));
  });

  test("should have correct tag name", () => {
    expect(testComponentElement.localName).toBe("test-component");
  });

  test("should have a value property", () => {
    // TODO: Use screen
    expect(testComponentElement.value).toBe("foo");
  });

  test("should have opened boolean attribute", () => {
    expect(testComponentElement.getAttribute("opened")).toBe("");
  });

  test("should define custom element", () => {
    expect(customElements.get("test-component")).toBeDefined();
  });

  test("should suppress a lit dev mode warning", () => {
    const { litIssuedWarnings } = globalThis as any;
    const [first] = litIssuedWarnings as Set<string>;
    expect(first).toContain("Lit is in dev mode.");
  });
});
