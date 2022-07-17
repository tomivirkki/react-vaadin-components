import React from "react";
import type { TestComponent as TestComponentClass } from "./web-components/test-component/test-component";
import { TestComponent } from "./index";
import { renderComponent } from "./helpers";

// customElements.define is overridden in the test environment
// because prerendering takes place on browser before the Web Component
// is defined.
customElements.define = () => {};

describe("prerender", () => {
  let testComponentElement: TestComponentClass;
  let rerender: () => void;

  beforeEach(async () => {
    [testComponentElement, rerender] =
      await renderComponent<TestComponentClass>(() => (
        <TestComponent value="foo">
          <div>overlay</div>
        </TestComponent>
      ));
  });

  test("should not define a custom element", () => {
    expect(customElements.get("test-component")).not.toBeDefined();
  });

  test("should have a shadow root", () => {
    expect(testComponentElement.shadowRoot).not.toBeNull();
  });

  test("should include styles", () => {
    expect(testComponentElement.shadowRoot!.textContent).toContain(
      "--test-component-style: 1"
    );
  });

  test("should include prerender-only styles", () => {
    expect(testComponentElement.shadowRoot!.textContent).toContain(
      "--test-component-prerender-style: 1"
    );
  });

  test("should not try to recreate the shadow root", () => {
    expect(() => rerender()).not.toThrow();
  });

  test("should have a shadow root on the sub-component", () => {
    const subComponent = testComponentElement.shadowRoot?.querySelector(
      "#sub-component"
    ) as HTMLElement;

    expect(subComponent.shadowRoot).not.toBeNull();
    expect(subComponent.shadowRoot!.textContent).toContain(
      "--test-sub-component-style: 1"
    );
  });

  test("should include prerender children", () => {
    const childElement = testComponentElement.querySelector('[slot="foo"]')!;
    expect(childElement.textContent).toContain("foo");
    expect(childElement.localName).toBe("div");
  });
});
