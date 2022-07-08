import React from "react";
import { createTestComponent, TestComponentType } from "./TestComponent";
import { render, screen } from "@testing-library/react";
import { context } from "../src/create-component";
import { jest } from "@jest/globals";
import { act } from "react-dom/test-utils";

function getTestComponentTemplate(
  TestComponent: Awaited<ReturnType<typeof createTestComponent>>,
  props: any = {}
) {
  return (
    <TestComponent {...props}>
      <div>child</div>
    </TestComponent>
  );
}

async function renderTestComponent(
  TestComponent: Awaited<ReturnType<typeof createTestComponent>>,
  props: any = {}
) {
  const rendered = await render(getTestComponentTemplate(TestComponent, props));

  return {
    element: rendered.container.firstElementChild as TestComponentType,
    rerender: async () => rendered.rerender(getTestComponentTemplate(TestComponent, props)),
  };
}

describe("createPolymerComponent", () => {
  beforeEach(async () => {
    customElements.define = jest.fn();
    delete (window as any).litIssuedWarnings;
  });

  describe("CSR", () => {
    let testComponentElement: TestComponentType;

    beforeAll(() => {
      context.isBrowser = true;
    });

    beforeEach(async () => {
      const rendereredTestComponent = await renderTestComponent(
        createTestComponent(),
        {
          value: "foo",
        }
      );
      testComponentElement = rendereredTestComponent.element;
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
      const TestComponent = createTestComponent(importFunc);
      await renderTestComponent(TestComponent);
      await renderTestComponent(TestComponent);
      expect(importFunc).toHaveBeenCalledTimes(1);
    });

    test("should suppress a lit dev mode warning", () => {
      const litIssuedWarnings = (window as any).litIssuedWarnings;
      const [first] = litIssuedWarnings as Set<string>;
      expect(first).toContain("Lit is in dev mode.");
    });
  });

  describe("SSR", () => {
    let testComponentElement: TestComponentType;

    beforeAll(() => {
      context.isBrowser = false;
    });

    beforeEach(async () => {
      const HTMLElement = globalThis.HTMLElement;
      // @ts-ignore
      globalThis.HTMLElement = undefined;
      const rendereredTestComponent = await renderTestComponent(
        createTestComponent()
      );
      testComponentElement = rendereredTestComponent.element;
      globalThis.HTMLElement = HTMLElement;
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

  describe("renderers", () => {
    beforeAll(() => {
      context.isBrowser = true;
    });

    describe("child renderer", () => {
      let testComponentElement: TestComponentType;
      let childRenderRoot: HTMLDivElement;
      const childRendererFunctionName = "childRenderer";

      function runChildRenderer() {
        testComponentElement[childRendererFunctionName](childRenderRoot);
      }

      beforeEach(async () => {
        const TestComponent = createTestComponent(undefined, {
          childRenderer: childRendererFunctionName,
        });
        const rendereredTestComponent = await renderTestComponent(
          TestComponent
        );
        testComponentElement = rendereredTestComponent.element;
        childRenderRoot = document.createElement("div");
        runChildRenderer();
      });

      test("should not have child elements", () => {
        expect(testComponentElement.children).toHaveLength(0);
      });

      test("should render the child element to render root", () => {
        expect(childRenderRoot.textContent).toBe("child");
      });

      test("should not try to append the render root again", () => {
        const appendChild = jest.spyOn(childRenderRoot, "appendChild");
        runChildRenderer();
        expect(appendChild).not.toHaveBeenCalled();
      });
    });

    describe("components", () => {
      const componentAPIName = "component";
      const componentRendererFunctionName = "renderer";
      let testComponentElement: TestComponentType;
      let rerender: () => Promise<void>;

      function runComponentRenderer(root: HTMLElement) {
        act(() => testComponentElement[componentRendererFunctionName](root));
      }

      beforeEach(async () => {
        const TestComponent = createTestComponent(undefined, {
          components: {
            [componentAPIName]: componentRendererFunctionName,
          },
        });
        const rendereredTestComponent = await renderTestComponent(
          TestComponent,
          {
            [componentAPIName]: <div>foo</div>,
          }
        );
        testComponentElement = rendereredTestComponent.element;
        rerender = rendereredTestComponent.rerender;
      });

      test("should render the component into the root element", async () => {
        const root = document.createElement("div");
        runComponentRenderer(root);
        expect(root.textContent).toBe("foo");
      });

      test("should not redefine the renderer function", async () => {
        const rendererFunction = testComponentElement[componentRendererFunctionName];
        await rerender();
        expect(testComponentElement[componentRendererFunctionName]).toBe(rendererFunction);
      });

      test("should only create root once", async () => {
        const consoleError = jest.spyOn(console, "error");

        const root = document.createElement("div");
        runComponentRenderer(root);
        runComponentRenderer(root);
        expect(consoleError).not.toHaveBeenCalled();

        consoleError.mockRestore();
      });
    });

    describe("component renderers", () => {
      let testComponentElement: TestComponentType;
      let rerender: () => Promise<void>;
      const componentRendererAPIName = "itemRenderer";
      const componentRendererFunctionName = "renderer";

      function runComponentRenderer(root: HTMLElement, model: any) {
        act(() =>
          testComponentElement[componentRendererFunctionName](root, null, model)
        );
      }

      beforeEach(async () => {
        const TestComponent = createTestComponent(undefined, {
          componentRenderers: {
            [componentRendererAPIName]: componentRendererFunctionName,
          },
        });
        const rendereredTestComponent = await renderTestComponent(
          TestComponent,
          {
            [componentRendererAPIName]: (model) => <div>{model.item}</div>,
          }
        );

        testComponentElement = rendereredTestComponent.element;
        rerender = rendereredTestComponent.rerender;
      });

      test("should render the model item into the root element", async () => {
        const root = document.createElement("div");
        runComponentRenderer(root, { item: "foo" });
        expect(root.textContent).toBe("foo");
      });

      test("should not redefine the renderer function", async () => {
        const rendererFunction = testComponentElement[componentRendererFunctionName];
        await rerender();
        expect(testComponentElement[componentRendererFunctionName]).toBe(rendererFunction);
      });

      test("should only create root once", async () => {
        const consoleError = jest.spyOn(console, "error");

        const root = document.createElement("div");
        runComponentRenderer(root, { item: "foo" });
        runComponentRenderer(root, { item: "foo" });
        expect(consoleError).not.toHaveBeenCalled();

        consoleError.mockRestore();
      });
    });
  });
});
