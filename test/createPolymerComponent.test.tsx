import React from "react";
import { createTestComponent, TestComponentType } from "./TestComponent";
import { render, screen } from "@testing-library/react";
import { context } from "../src/create-component";
import { jest } from "@jest/globals";

describe("createPolymerComponent", () => {
  let TestComponent: Awaited<ReturnType<typeof createTestComponent>>;
  let testComponentElement: TestComponentType;

  beforeEach(async () => {
    const { container } = await render(
      <TestComponent data-testid="test" value="foo">
        <div>child</div>
      </TestComponent>
    );
    testComponentElement = container.firstElementChild as TestComponentType;
  });

  describe("createPolymerComponent - CSR", () => {
    beforeAll(() => {
      context.isBrowser = true;
      customElements.define = jest.fn();
      TestComponent = createTestComponent();
    });

    test("should have correct tag name", () => {
      expect(testComponentElement.localName).toBe("test-component");
    });

    test("should have a value property", () => {
      expect(testComponentElement.value).toBe("foo");
    });

    test("should define custom element", () => {
      expect(customElements.define).toHaveBeenCalled();
    });

    test("should invoke the import function once", async () => {
      const importFunc = jest.fn();
      TestComponent = createTestComponent(importFunc);
      await render(<TestComponent />);
      await render(<TestComponent />);
      expect(importFunc).toHaveBeenCalledTimes(1);
    });

    test("should suppress a lit dev mode warning", () => {
      const litIssuedWarnings = (window as any).litIssuedWarnings;
      const [first] = litIssuedWarnings as Set<string>;
      expect(first).toContain("Lit is in dev mode.");
    });
  });

  describe("createPolymerComponent - SSR", () => {
    beforeAll(() => {
      delete (window as any).litIssuedWarnings;
      // @ts-ignore
      globalThis.HTMLElement = undefined;
      context.isBrowser = false;
      customElements.define = jest.fn();
      TestComponent = createTestComponent();
    });

    test("should not have a value attribute", () => {
      expect(testComponentElement.hasAttribute("value")).toBeFalsy();
    });

    test("should render the child component", () => {
      expect(testComponentElement.firstElementChild?.textContent).toBe("child");
    });

    test("should not define custom element", () => {
      expect(customElements.define).not.toHaveBeenCalled();
    });

    test("should not suppress a lit dev mode warning", () => {
      const litIssuedWarnings = (window as any).litIssuedWarnings;
      expect(litIssuedWarnings).not.toBeDefined();
    });
  });
});
