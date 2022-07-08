import * as React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { createComponent, EventName } from "@lit-labs/react";

export const context = {
  isBrowser: typeof window !== "undefined",
};

function suppressLitDevModeWarning() {
  (globalThis as any).litIssuedWarnings ||= new Set([
    "Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.",
  ]);
}

type Events = Record<string, EventName | string>;
type Constructor<T> = {
  new (): T;
};

export type RenderersConfig = {
  childRenderer?: string;
  components?: Record<string, string>;
  componentRenderers?: Record<string, string>;
};

// TODO: Rename to createVaadinComponent
export function createPolymerComponent<I extends HTMLElement, E extends Events>(
  tagName: string,
  properties: { [key: string]: any },
  events: E,
  importFunc: Function,
  importName: string,
  renderers?: RenderersConfig
) {
  if (context.isBrowser) {
    suppressLitDevModeWarning();
  }

  if (!globalThis.HTMLElement) {
    // Avoid an exception in createComponent when running SSR
    // @ts-ignore
    globalThis.HTMLElement = class {};
  }

  // The actual Web Component can't be defined when running SSR, so need to use a mock class instead
  const mock = class {};
  Object.assign(mock.prototype, properties);

  const component = createComponent(
    React,
    tagName,
    mock as Constructor<I>,
    events,
    importName
  );

  const originalRenderFunc = (component as any).render;
  (component as any).render = (props: any, ...rest: any) => {
    props = { ...props };

    // TODO: SSR support

    // Run dynamic import for the component
    if (context.isBrowser && !("__called" in importFunc)) {
      (importFunc as any).__called = true;
      importFunc();
    }

    // A function which appends the childContainer inside the renderer's root element and the child container.
    const [childrenRendererFunction, childContainer] = React.useMemo(() => {
      const container = context.isBrowser
        ? document.createElement("div")
        : null;

      const rendererFunction = (root: HTMLElement) => {
        if (container && container.parentElement !== root) {
          root.appendChild(container);
        }
      };

      return [rendererFunction, container];
    }, []);

    // Create a Portal for the component's children if they're being rendered into a separate element.
    if (renderers?.childRenderer && childContainer) {
      props = {
        ...props,
        children: ReactDOM.createPortal(props.children, childContainer),
        [renderers.childRenderer]: childrenRendererFunction,
      };
    }

    // Components
    const componentToRendererMap = React.useMemo(() => new Map(), []);
    Object.entries(renderers?.components || {})
      .filter(([api]) => api in props)
      .forEach(([api, renderer]) => {
        // TODO: Use portal for compoenents?
        if (!componentToRendererMap.has(api)) {
          componentToRendererMap.set(api, (root: any) => {
            if (!root.__reactRoot) {
              root.__reactRoot = createRoot(root);
            }
            root.__reactRoot.render(props[api]);
          });
        }
        props[renderer] = componentToRendererMap.get(api);
      });

    // Component renderers
    const componentRendererToRendererMap = React.useMemo(() => new Map(), []);
    Object.entries(renderers?.componentRenderers || {})
      .filter(([api]) => api in props)
      .forEach(([api, renderer]) => {
        if (!componentRendererToRendererMap.has(api)) {
          componentRendererToRendererMap.set(
            api,
            (root: any, _: any, model: any) => {
              if (!root.__reactRoot) {
                root.__reactRoot = createRoot(root);
              }
              root.__reactRoot.render(props[api](model));
            }
          );
        }

        props[renderer] = componentRendererToRendererMap.get(api);
      });

    return originalRenderFunc(props, ...rest);
  };

  return component;
}

export function eventMapper<EventMap extends { [key: string]: any }>() {
  return function <A extends string, I extends keyof EventMap>(
    name: A,
    eventName: I
  ): { [key in A]: EventName<EventMap[I]> } {
    return {
      [name]: eventName,
    } as any;
  };
}
