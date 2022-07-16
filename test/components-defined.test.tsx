import React from "react";
import type { TestComponent as TestComponentClass } from "./web-components/test-component/test-component.js";
import { TestComponent } from "./index";
import { renderComponent } from "./helpers";
import { createPolymerComponent } from "../src/create-component";

const AnotherComponent = createPolymerComponent(
  "another-component",
  {},
  {},
  () => {},
  "AnotherComponent"
);

describe("components-defined", () => {
  const DEFINED_ATTRIBUTE = "vaadin-components-defined";

  test("should add defined attribute only once all first render components are defined", async () => {
    // Render a view with a '<test-component>' and '<another-component>' custom elements.
    await renderComponent<TestComponentClass>(() => (
      <>
        <TestComponent></TestComponent>
        <AnotherComponent></AnotherComponent>
      </>
    ));

    // Only '<test-component>' is defined thus far.
    expect(document.body.hasAttribute(DEFINED_ATTRIBUTE)).toBeFalsy();

    // Manually define '<another-component>'
    await customElements.define(
      "another-component",
      class extends HTMLElement {}
    );

    // '<test-component>' and '<another-component>' are both defined. The defined attribute should be added.
    expect(document.body.hasAttribute(DEFINED_ATTRIBUTE)).toBeTruthy();
  });
});
