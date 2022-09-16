import "./web-components/test-component/src/mock-polymer-element.js";
import React from "react";
import type { TestComponentElement } from "./index";
import { context } from "../src/create-component";
import { renderComponent } from "./helpers";

// @ts-ignore
globalThis.HTMLElement = undefined;
context.isBrowser = false;

const { TestComponent } = await import("./index");

describe("SSR", () => {
  let testComponentElement: TestComponentElement.TestComponent;

  beforeEach(async () => {
    [testComponentElement] =
      await renderComponent<TestComponentElement.TestComponent>(() => (
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
    expect(
      [...testComponentElement.children].some(
        (child) => child.textContent === "overlay"
      )
    ).toBeTruthy();
  });

  test("should not suppress a lit dev mode warning", () => {
    const { litIssuedWarnings } = window as any;
    expect(litIssuedWarnings).not.toBeDefined();
  });

  test("should have a declarative shadow root template", () => {
    const template = testComponentElement.querySelector(
      "template[shadowroot='open']"
    );
    expect(template).toBeInstanceOf(HTMLTemplateElement);
    expect(template!.innerHTML).toContain("--test-component-prerender-style");
    expect(template?.getAttribute("slot")).toBe("ignore");
  });
});
