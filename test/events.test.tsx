import "./web-components/test-component/src/mock-polymer-element.js";
import React from "react";
import { jest } from "@jest/globals";
import { TestComponent, TestComponentElement } from "./index";
import { renderComponent } from "./helpers";

describe("client", () => {
  let listener: ReturnType<typeof jest.fn>;
  let listenerGenericType: ReturnType<typeof jest.fn>;

  beforeEach(async () => {
    listener = jest.fn();
    listenerGenericType = jest.fn();

    // Use generic event to make sure the listener is type compatible
    const typedListener: (
      e: TestComponentElement.ItemsChangedEvent<string>
    ) => void = listenerGenericType;

    await renderComponent<TestComponentElement.TestComponent>(() => (
      <TestComponent
        onValueChanged={listener}
        onItemsChanged={typedListener}
        items={["foo"]}
        value="foo"
      />
    ));
  });

  test("should have dispatched an event", () => {
    expect(listener).toHaveBeenCalledTimes(1);

    const event: TestComponentElement.ValueChangedEvent =
      listener.mock.calls[0][0];
    expect(event.type).toBe("value-changed");
    expect(event.detail).toBe("foo");
  });

  test("should have dispatched an event with generic type", () => {
    expect(listenerGenericType).toHaveBeenCalled();

    const event: TestComponentElement.ItemsChangedEvent<string> =
      listenerGenericType.mock.calls[0][0];
    expect(event.type).toBe("items-changed");
    expect(event.detail[0]).toBe("foo");
  });
});
