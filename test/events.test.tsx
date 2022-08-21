import "./web-components/test-component/src/mock-polymer-element.js";
import React from "react";
import { jest } from "@jest/globals";
import { TestComponent, TestComponentElement } from "./index";
import { renderComponent } from "./helpers";

describe("client", () => {
  let listener: ReturnType<typeof jest.fn>;

  beforeEach(async () => {
    listener = jest.fn();
    await renderComponent<TestComponentElement.TestComponent>(() => (
      <TestComponent onValueChanged={listener} value="foo" />
    ));
  });

  test("should have dispatched an event", () => {
    expect(listener).toHaveBeenCalledTimes(1);

    const event: TestComponentElement.ValueChangedEvent =
      listener.mock.calls[0][0];
    expect(event.type).toBe("value-changed");
    expect(event.detail).toBe("foo");
  });
});
