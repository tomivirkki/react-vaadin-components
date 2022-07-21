/* eslint-disable no-undef */
import "./web-components/test-component/src/mock-polymer-element";
import React from "react";
import type { TestComponent as TestComponentClass } from "./web-components/test-component/test-component";
import { TestComponent } from "./index";
import { nextFrame, renderComponent } from "./helpers";

// This test suite works the same as prerender.test.tsx but the custom element
// gets defined as part of a test. Since it's a global side-effect, it reuqires a
// separate test suite, which can only include one test case.
const originalDefine = customElements.define;
const customElementsToDefine: { [key: string]: CustomElementConstructor } = {};
customElements.define = (name, elementClass) => {
  customElementsToDefine[name] = elementClass;
};

function flushDefine() {
  customElements.define = originalDefine;
  Object.entries(customElementsToDefine).forEach(([name, element]) =>
    customElements.define(name, element)
  );
}

describe("prerender - define", () => {
  test("should remove prerender-only styles on define", async () => {
    const [testComponentElement] = await renderComponent<TestComponentClass>(
      () => <TestComponent />
    );

    expect(testComponentElement.shadowRoot!.textContent).toContain(
      "--test-component-prerender-style: 1"
    );

    flushDefine();
    await nextFrame();

    const content = testComponentElement.shadowRoot!.textContent;
    expect(content).toContain("--test-component-style: 1");
    expect(content).not.toContain("--test-component-prerender-style: 1");
  });
});
