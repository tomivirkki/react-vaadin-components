import * as React from "react";
import ReactDOM from "react-dom";
import { createComponent, EventName } from "@lit-labs/react";

export const context = {
  isBrowser: typeof window !== "undefined",
};

function suppressLitDevModeWarning() {
  const window = globalThis as any;
  window.litIssuedWarnings = window.litIssuedWarnings || new Set();
  window.litIssuedWarnings.add(
    "Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information."
  );
}

type Events = Record<string, EventName | string>;
type Constructor<T> = {
  new (): T;
};

export function createPolymerComponent<I extends HTMLElement, E extends Events>(
  tagName: string,
  properties: { [key: string]: any },
  events: E,
  importFunc: Function,
  importName: string
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
    if (context.isBrowser && !('__called' in importFunc)) { 
      (importFunc as any).__called = true;
      importFunc();
    }

    // TODO: Explicilty mark the components that support a renderer. Remove "renderer" from the type.
    if (context.isBrowser && props.renderer) {
      const renderRoot = document.createElement('div')
      const portal = ReactDOM.createPortal(props.children, renderRoot);

      props = {
        ...props,
        ref: (el: any) => {
          if (el?._element) {
            // TODO: Handle different types of renderer
            el._element.renderer = (root: HTMLElement) => root.appendChild(renderRoot);
          }
        },
        children: portal,
      };
    }

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
