import "./web-components/test-component/src/mock-polymer-element.js";
import React from "react";
import { jest } from "@jest/globals";
import type { TestComponent as TestComponentClass } from "./web-components/test-component/test-component";
import { TestComponent } from "./index";
import { renderComponent } from "./helpers";
import { createVaadinComponent } from "../src/create-component";

const importFunc = jest.fn();
const AnotherComponent = createVaadinComponent(
  "another-component",
  {},
  {},
  importFunc,
  "AnotherComponent",
  undefined,
  () => ({
    children: [
      {
        tag: "div",
      },
    ],
  })
);

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
    expect(testComponentElement.value).toBe("foo");
  });

  test("should have opened boolean attribute", () => {
    expect(testComponentElement.getAttribute("opened")).toBe("");
  });

  test("should not have opened attribute", async () => {
    const [nonOpenedElement] = await renderComponent<TestComponentClass>(() => (
      <TestComponent opened={false} />
    ));
    expect(nonOpenedElement.hasAttribute("opened")).toBe(false);
  });

  test("should define custom element", () => {
    expect(customElements.get("test-component")).toBeDefined();
  });

  test("should suppress a lit dev mode warning", () => {
    const { litIssuedWarnings } = globalThis as any;
    const [first] = litIssuedWarnings as Set<string>;
    expect(first).toContain("Lit is in dev mode.");
  });

  test("should have constructed stylesheets", () => {
    const sheet: CSSStyleSheet[] =
      // @ts-ignore
      testComponentElement.shadowRoot?.adoptedStyleSheets;

    expect(sheet).toHaveLength(1);
    expect(sheet[0]).toBeInstanceOf(CSSStyleSheet);
  });

  test("should only run the import function once", async () => {
    await renderComponent(() => <AnotherComponent />);
    await renderComponent(() => <AnotherComponent />);
    expect(importFunc).toHaveBeenCalledTimes(1);
  });

  test("should run post-render hook", async () => {
    expect(
      testComponentElement.style.getPropertyValue("--test-component-background")
    ).toBe("red");
  });

  test("should remove the declarative shadow root template", () => {
    const template = testComponentElement.querySelector(
      "template[shadowroot='open']"
    );
    expect(template).toBeNull();
  });

  test("should add a dummy template renderer callback", () => {
    expect(() =>
      (window as any).Vaadin.templateRendererCallback()
    ).not.toThrow();
  });
});
