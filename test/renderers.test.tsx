import React from "react";
import { TestComponent as TestComponentClass } from "./web-components/test-component/test-component.js";
import { TestComponent } from "./index";
// TODO: Re-export from the React component
import type { TestComponentItemModel } from "./web-components/test-component/test-component.js";
import { jest } from "@jest/globals";
import { renderComponent } from "./helpers";
import "@testing-library/jest-dom/extend-expect";

describe("renderers", () => {
  describe("child renderer", () => {
    let testComponentElement: TestComponentClass;

    beforeEach(async () => {
      const rendereredTestComponent =
        await renderComponent<TestComponentClass>(() => (
          <TestComponent>
            <div>overlay</div>
          </TestComponent>
        ));
      testComponentElement = rendereredTestComponent.element;
    });

    test("should not have child elements", () => {
      expect(testComponentElement.children).toHaveLength(0);
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

    beforeEach(async () => {
      const rendereredTestComponent =
        await renderComponent<TestComponentClass>(() => (
          <TestComponent headerComponent={<div>header</div>}></TestComponent>
        ));

      testComponentElement = rendereredTestComponent.element;
    });

    test("should render the component into the root element", async () => {
      expect(testComponentElement.header.textContent).toBe("header");
    });

    test("should not redefine the renderer function", async () => {
      // const rendererFunction =
      //   testComponentElement[componentRendererFunctionName];
      // await rerender();
      // expect(testComponentElement[componentRendererFunctionName]).toBe(
      //   rendererFunction
      // );
    });

    test("should only create root once", async () => {
      // const consoleError = jest.spyOn(console, "error");
      // const root = document.createElement("div");
      // runComponentRenderer(root);
      // runComponentRenderer(root);
      // expect(consoleError).not.toHaveBeenCalled();
      // consoleError.mockRestore();
    });
  });

  describe("item renderers", () => {
    let testComponentElement: TestComponentClass;

    type Item = {
      name: string;
    };

    beforeEach(async () => {
      const itemRenderer = ({ index, item }: TestComponentItemModel<Item>) => {
        return (
          <div>
            Item {index}: {item.name}
          </div>
        );
      };

      const items: Item[] = [{ name: "foo" }, { name: "bar" }];

      const rendereredTestComponent =
        await renderComponent<TestComponentClass>(() => (
          <TestComponent
            items={items}
            itemRenderer={itemRenderer}
          ></TestComponent>
        ));
      testComponentElement = rendereredTestComponent.element;
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
      // const rendererFunction =
      //   testComponentElement[itemRendererFunctionName];
      // await rerender();
      // expect(testComponentElement[itemRendererFunctionName]).toBe(
      //   rendererFunction
      // );
    });

    test("should only create root once", async () => {
      // const consoleError = jest.spyOn(console, "error");
      // const root = document.createElement("div");
      // runItemRenderer(root, { item: "foo" });
      // runItemRenderer(root, { item: "foo" });
      // expect(consoleError).not.toHaveBeenCalled();
      // consoleError.mockRestore();
    });
  });
});
