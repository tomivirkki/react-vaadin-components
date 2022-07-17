/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { jest } from "@jest/globals";
import type {
  // TODO: Re-export from the React component
  ValueChangedEvent,
  TestComponent as TestComponentClass,
} from "./web-components/test-component/test-component";
import { TestComponent } from "./index";
import { renderComponent } from "./helpers";

describe("client", () => {
  let listener: ReturnType<typeof jest.fn>;

  beforeEach(async () => {
    listener = jest.fn();
    await renderComponent<TestComponentClass>(() => (
      <TestComponent onValueChanged={listener} value="foo" />
    ));
  });

  test("should have dispatched an event", () => {
    expect(listener).toHaveBeenCalledTimes(1);

    const event: ValueChangedEvent = listener.mock.calls[0][0];
    expect(event.type).toBe("value-changed");
    expect(event.detail).toBe("foo");
  });
});
