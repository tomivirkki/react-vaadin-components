import * as React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { createComponent, EventName } from "@lit-labs/react";

export const context = {
  isBrowser: typeof window !== "undefined",
};

const definedCustomElements: string[] = [];

const browserSupportsDeclarativeShadowDom =
  context.isBrowser && "getInnerHTML" in HTMLElement.prototype;

function suppressLitDevModeWarning() {
  (globalThis as any).litIssuedWarnings ||= new Set([
    "Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.",
  ]);
}

const knownBooleanAttributes = [
  "disabled",
  "hidden",
  "readonly",
  "checked",
  "required",
  "opened",
];

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

// TODO: Rename to createVaadinComponent
export function createPolymerComponent<I extends HTMLElement, E extends Events>(
  tagName: string,
  properties: { [key: string]: any },
  events: E,
  importFunc: Function,
  importName: string,
  renderers?: RenderersConfig,
  getPreRenderConfig?: (props: { [key: string]: any }) => PreRenderConfig
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

  const filteredProperties = { ...properties };
  knownBooleanAttributes.forEach(
    (attribute) => delete filteredProperties[attribute]
  );

  Object.assign(mock.prototype, filteredProperties);

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

    // Fix boolean property attributes. Workaround https://github.com/facebook/react/issues/9230
    knownBooleanAttributes.forEach((attribute) => {
      if (props[attribute]) {
        props[attribute] = "";
      } else {
        delete props[attribute];
      }
    });

    // Once all the custom elements on the active page are defined, add a marker attribute to body
    if (
      context.isBrowser &&
      !document.body.hasAttribute("vaadin-components-defined")
    ) {
      definedCustomElements.push(tagName);

      customElements.whenDefined(tagName).then(() => {
        if (definedCustomElements.every((tag) => customElements.get(tag))) {
          document.body.toggleAttribute("vaadin-components-defined", true);
        }
      });
    }

    // SSR

    const preRenderConfig = getPreRenderConfig?.(props);

    // SSR - host properties
    props = { ...props, ...(preRenderConfig?.hostProperties || {}) };

    // SSR - declarative shadow DOM
    if (
      preRenderConfig?.shadowDomContent &&
      (!context.isBrowser || !browserSupportsDeclarativeShadowDom)
    ) {
      const shadowRoot = React.createElement("template", {
        key: -1,
        shadowroot: "open",
        dangerouslySetInnerHTML: { __html: preRenderConfig.shadowDomContent },
      });
      props = { ...props, children: [...[props.children], shadowRoot] };
    }

    // SSR - children
    preRenderConfig?.children?.forEach((child, index) => {
      props.children = [
        ...[props.children],
        React.createElement(child.tag, {
          key: index,
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

        if (element) {
          // Remove the `<template shadowroot="open">` element from inside the element if it exists
          element.querySelector("template[shadowroot]")?.remove();

          if (
            preRenderConfig?.shadowDomContent &&
            !customElements.get(tagName)
          ) {
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
      }
    });
    props = { ...props, ref };

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

    // Item renderers
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
