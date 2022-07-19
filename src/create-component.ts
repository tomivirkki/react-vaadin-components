/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
import * as React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { createComponent, EventName } from "@lit-labs/react";

export const context = {
  isBrowser: typeof window !== "undefined",
};

// A set of custom element names included in the first render.
const firstRenderElements = new Set<string>();

const browserSupportsDeclarativeShadowDom =
  context.isBrowser && "getInnerHTML" in HTMLElement.prototype;

function suppressLitDevModeWarning() {
  (globalThis as any).litIssuedWarnings ||= new Set([
    "Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.",
  ]);
}

// Properties that the Web Component reflects as attributes (for styling purposes).
// The component should render them as attributes directly to avoid styling issues
// with SSR (before hydration).
const knownAttributes = [
  "disabled",
  "hidden",
  "readonly",
  "checked",
  "indeterminate",
  "required",
  "opened",
  "orientation",
];

/**
 * Recursively creates a shadow DOM for the given element and populates it with the given content.
 * Recursion needed because the content may include <template shadowroot="open"> elements.
 */
function applyShadowDOM(el: HTMLElement, content: string) {
  if (el.shadowRoot) {
    return;
  }
  el.attachShadow({ mode: "open" });

  const template = document.createElement("template");
  template.innerHTML = content;

  while (template.content.querySelector("template[shadowroot]")) {
    const shadowRootTemplate = template.content.querySelector(
      "template[shadowroot]"
    )!;
    const shadowRootHost = shadowRootTemplate.parentElement;
    shadowRootTemplate.remove();
    applyShadowDOM(shadowRootHost!, shadowRootTemplate.innerHTML);
  }

  el.shadowRoot!.append(...Array.from(template.content.children));
}

type Events = Record<string, EventName | string>;
type Constructor<T> = {
  new (): T;
};

export type RenderersConfig = {
  childRenderer?: string;
  components?: Record<string, string>;
  itemRenderers?: Record<string, string>;
};

type PreRenderConfig = {
  hostProperties?: { [key: string]: any };
  children?: {
    tag: string;
    properties?: { [key: string]: any };
    textContent?: string;
  }[];
  shadowDomContent?: string;
};

// TODO: Still missing some tests
export function createVaadinComponent<I extends HTMLElement, E extends Events>(
  tagName: string,
  properties: { [key: string]: any },
  events: E,
  importFunc: Function,
  importName: string,
  renderers?: RenderersConfig | undefined,
  getPreRenderConfig?: (props: { [key: string]: any }) => PreRenderConfig
) {
  if (context.isBrowser) {
    suppressLitDevModeWarning();
  }

  // Avoid an exception in createComponent when running SSR
  // @ts-ignore
  globalThis.HTMLElement ||= class {};

  // The actual Web Component can't be defined when running SSR, so need to use a mock class instead
  const mock = class {};
  const filteredProperties = { ...properties };
  knownAttributes.forEach((attribute) => delete filteredProperties[attribute]);
  Object.assign(mock.prototype, filteredProperties);

  // Create the component
  const component = createComponent(
    React,
    tagName,
    mock as Constructor<I>,
    events,
    importName
  );

  // Override the component's render function to enable render-time features
  const originalRenderFunc = (component as any).render;
  (component as any).render = (props: any, ...rest: any) => {
    props = { ...props };

    // Once all the custom elements on the active page are defined, add a marker attribute to body
    const DEFINED_ATTRIBUTE = "vaadin-components-defined";
    if (context.isBrowser && !document.body.hasAttribute(DEFINED_ATTRIBUTE)) {
      firstRenderElements.add(tagName);

      customElements.whenDefined(tagName).then(() => {
        if ([...firstRenderElements].every((tag) => customElements.get(tag))) {
          document.body.toggleAttribute(DEFINED_ATTRIBUTE, true);
        }
      });
    }

    // Run dynamic import for the component
    if (context.isBrowser && !("__called" in importFunc)) {
      (importFunc as any).__called = true;
      importFunc();
    }

    // Renderers - childRenderer

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

    // Renderers - Components
    // TODO: Instead of a component property API, consider a child element API with a marker.
    const componentToRendererMap = React.useMemo(() => new Map(), []);
    Object.entries(renderers?.components || {})
      .filter(([api]) => api in props)
      .forEach(([api, renderer]) => {
        // TODO: Use portal for components?
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

    // Renderers - Item renderers
    const itemRendererToRendererMap = React.useMemo(() => new Map(), []);
    Object.entries(renderers?.itemRenderers || {})
      .filter(([api]) => api in props)
      .forEach(([api, renderer]) => {
        if (!itemRendererToRendererMap.has(api)) {
          itemRendererToRendererMap.set(
            api,
            (root: any, _: any, model: any) => {
              if (!root.__reactRoot) {
                root.__reactRoot = createRoot(root);
              }
              root.__reactRoot.render(props[api](model));
            }
          );
        }

        props[renderer] = itemRendererToRendererMap.get(api);
      });

    // SSR

    const preRenderConfig = getPreRenderConfig?.(props);

    // SSR - host properties
    props = { ...props, ...(preRenderConfig?.hostProperties || []) };

    // SSR - declarative shadow DOM
    if (
      preRenderConfig?.shadowDomContent &&
      (!context.isBrowser || !browserSupportsDeclarativeShadowDom)
    ) {
      // Create and add a <template shadowroot="open"> element with the content
      const shadowRoot = React.createElement("template", {
        key: -1,
        shadowroot: "open",
        dangerouslySetInnerHTML: { __html: preRenderConfig.shadowDomContent },
      });
      props = { ...props, children: [...[props.children], shadowRoot] };
    }

    // SSR - children
    preRenderConfig?.children?.forEach((child) => {
      props.children = [
        ...[props.children],
        React.createElement(child.tag, {
          key: props.children?.length || 0,
          ...(child.properties || {}),
          ...(child.textContent
            ? { dangerouslySetInnerHTML: { __html: child.textContent } }
            : {}),
        }),
      ];
    });

    // SSR - client-side pre-rendering & hydration fixes
    const ref = React.useRef();
    React.useEffect(() => {
      if (context.isBrowser && ref.current) {
        const element = (ref.current as any)._reactInternals.child.stateNode;

        // Remove the `<template shadowroot="open">` element from inside the element if it exists
        // (some browsers don't support declarative shadow DOM)
        element.querySelector("template[shadowroot]")?.remove();

        if (preRenderConfig?.shadowDomContent && !customElements.get(tagName)) {
          // The element is not defined yet, pre-render shadow DOM on the client
          applyShadowDOM(element, preRenderConfig?.shadowDomContent);
        }

        customElements.whenDefined(tagName).then(() => {
          // Polymer element hydration fix: Replace the pre-rendered shadow DOM content with the effective rendered content
          if (element.shadowRoot && element.__templateInfo?.nodeList.length) {
            const effectiveRoot =
              element.__templateInfo.nodeList[0].getRootNode();
            if (!effectiveRoot.isConnected) {
              // TODO: While this fixes multiple components, it breaks combo-box dropdown
              element.shadowRoot.replaceChildren(...effectiveRoot.children);
            }
          }
        });
      }
    });
    props = { ...props, ref };

    knownAttributes.forEach((attribute) => {
      if (typeof props[attribute] === "boolean") {
        // Fix boolean property attributes. Workaround https://github.com/facebook/react/issues/9230
        if (props[attribute]) {
          props[attribute] = "";
        } else {
          delete props[attribute];
        }
      }
    });

    return originalRenderFunc(props, ...rest);
  };

  return component;
}

export function eventMapper<EventMap extends { [key: string]: any }>() {
  return <A extends string, I extends keyof EventMap>(
    name: A,
    eventName: I
  ): { [key in A]: EventName<EventMap[I]> } =>
    ({
      [name]: eventName,
    } as any);
}
