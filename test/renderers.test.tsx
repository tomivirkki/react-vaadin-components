/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { jest } from "@jest/globals";
import { act } from "@testing-library/react";
import { TestComponent as TestComponentClass } from "./web-components/test-component/test-component";
import { TestComponent } from "./index";
// TODO: Re-export from the React component
import type { TestComponentItemModel } from "./web-components/test-component/test-component";
import { renderComponent } from "./helpers";
import "@testing-library/jest-dom/extend-expect";

describe("renderers", () => {
  describe("child renderer", () => {
    let testComponentElement: TestComponentClass;

    beforeEach(async () => {
      [testComponentElement] = await renderComponent<TestComponentClass>(() => (
        <TestComponent>
          <div id="overlay">overlay</div>
        </TestComponent>
      ));
    });

    test("should not have the overlay as direct child element", () => {
      expect(testComponentElement.querySelector("#overlay")).toBeNull();
    });

    test("should render the child element to render root", () => {
      expect(testComponentElement.overlay.textContent).toBe("overlay");
    });

    test("should not try to append the render root again", async () => {
      const appendChild = jest.spyOn(
        testComponentElement.overlay,
        "appendChild"
      );
      testComponentElement.overlayRenderer(testComponentElement.overlay);
      expect(appendChild).not.toHaveBeenCalled();
    });
  });

  describe("components", () => {
    let testComponentElement: TestComponentClass;
    let rerender: Function;

    beforeEach(async () => {
      [testComponentElement, rerender] =
        await renderComponent<TestComponentClass>(() => (
          <TestComponent headerComponent={<div>header</div>} />
        ));
    });

    test("should render the component into the root element", async () => {
      expect(testComponentElement.header.textContent).toBe("header");
    });

    test("should not redefine the renderer function", async () => {
      const rendererFunction = testComponentElement.headerRenderer;
      rerender();
      expect(testComponentElement.headerRenderer).toBe(rendererFunction);
    });

    test("should only create root once", async () => {
      const consoleError = jest.spyOn(console, "error");
      act(() => {
        testComponentElement.requestContentUpdate();
        testComponentElement.requestContentUpdate();
      });
      expect(consoleError).not.toHaveBeenCalled();
      consoleError.mockRestore();
    });
  });

  describe("item renderers", () => {
    let testComponentElement: TestComponentClass;
    let rerender: Function;

    type Item = {
      name: string;
    };

    beforeEach(async () => {
      const itemRenderer = ({ index, item }: TestComponentItemModel<Item>) => (
        <div>
          Item {index}: {item.name}
        </div>
      );

      const items: Item[] = [{ name: "foo" }, { name: "bar" }];

      [testComponentElement, rerender] =
        await renderComponent<TestComponentClass>(() => (
          <TestComponent items={items} itemRenderer={itemRenderer} />
        ));
    });

    test("should render the items", async () => {
      expect(testComponentElement.itemlist.children[0]).toHaveTextContent(
        "Item 0: foo"
      );
      expect(testComponentElement.itemlist.children[1]).toHaveTextContent(
        "Item 1: bar"
      );
    });

    test("should not redefine the renderer function", async () => {
      const rendererFunction = testComponentElement.renderer;
      rerender();
      expect(testComponentElement.renderer).toBe(rendererFunction);
    });

    test("should only create root once", async () => {
      const consoleError = jest.spyOn(console, "error");
      act(() => {
        testComponentElement.requestContentUpdate();
        testComponentElement.requestContentUpdate();
      });
      expect(consoleError).not.toHaveBeenCalled();
      consoleError.mockRestore();
    });
  });
});
