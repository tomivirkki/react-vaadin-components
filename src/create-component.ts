/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
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

/* istanbul ignore else */
if (context.isBrowser) {
  window.Vaadin ||= {};
  // Avoid a template inside components warning.
  (window.Vaadin as any).templateRendererCallback = () => {};

  (
    (globalThis as any).MockPolymerImport ||
    /* istanbul ignore next */
    import("@polymer/polymer/polymer-element")
  ).then(({ PolymerElement }: { PolymerElement: any }) => {
    // Override _attachDom from Polymer's element-mixin.js to support hydrating better.
    PolymerElement.prototype._attachDom = function _attachDom(dom: any) {
      if (dom) {
        // If the element doesn't have a shadow root, create one.
        if (!this.shadowRoot) {
          this.attachShadow({ mode: "open" });
        }

        // Replace prerendered shadow root content with the given dom.
        this.shadowRoot!.replaceChildren(dom);

        // When `adoptedStyleSheets` is supported a stylesheet is made
        // available on the element constructor.
        if (this.constructor._styleSheet) {
          this.shadowRoot.adoptedStyleSheets = [this.constructor._styleSheet];
        }
      }

      return this.shadowRoot;
    };
  });
}

// Properties that the Web Component reflects as attributes (for styling purposes).
// The component should render them as attributes directly to avoid styling issues
// with SSR (before hydration).
// TODO: Move to components config
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

  let shadow;
  // eslint-disable-next-line no-cond-assign
  while ((shadow = template.content.querySelector("template[shadowroot]"))) {
    const shadowRootHost = shadow.parentElement;
    shadow.remove();
    applyShadowDOM(shadowRootHost!, shadow.innerHTML);
  }

  el.shadowRoot!.append(...Array.from(template.content.children));
}

type Events = Record<string, EventName | string>;
type Constructor<T> = {
  new (): T;
};

export type RenderersConfig = {
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
  postRender?: (el: HTMLElement) => void;
};

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

    // Renderers - Component renderers

    // Create renderers for each rendered component
    const componentRenderers = React.useMemo(
      () =>
        Object.entries(renderers?.components || {}).map(
          ([componentName, functionName]) => {
            const container = context.isBrowser
              ? document.createElement("div")
              : null;

            return {
              componentName,
              functionName,
              container,
              rendererFunction: (root: HTMLElement) => {
                if (container && container.parentElement !== root) {
                  root.appendChild(container);
                }
              },
            };
          }
        ),
      []
    );

    // Need to disable portals for the first render to avoid hydration mismatch :/
    const [portalsEnabled, setPortalsEnabled] = React.useState(false);
    React.useEffect(() => setPortalsEnabled(componentRenderers.length > 0), []);

    componentRenderers.forEach((renderer) => {
      const currentChildren = [props.children || []].flat(Infinity);

      const targetChildren = currentChildren.filter((child) => {
        // TODO: This is not a good way to identify a portal
        if (child.children) {
          // Filter out portals
          return false;
        }
        // The unnamed component renderer targets all children without a slot name
        if (renderer.componentName === "") {
          return !child.props.slot;
        }
        // Include children that have a matching slot name
        return child.props.slot === renderer.componentName;
      });

      if (portalsEnabled && targetChildren.length && renderer.container) {
        props = {
          ...props,
          children: [
            // Exclude the children that get added to the portal
            ...currentChildren.filter(
              (child) => !targetChildren.includes(child)
            ),
            // Include the portal
            ReactDOM.createPortal(targetChildren, renderer.container),
          ].filter((n) => n),

          // Set the Web Component renderer function
          [renderer.functionName]: renderer.rendererFunction,
        };
      }
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
    props = { ...props, ...(preRenderConfig?.hostProperties || {}) };

    // SSR - declarative shadow DOM
    if (
      preRenderConfig?.shadowDomContent &&
      (!context.isBrowser || !browserSupportsDeclarativeShadowDom)
    ) {
      // Create and add a <template shadowroot="open"> element with the content
      const shadowRoot = React.createElement("template", {
        key: -1,
        shadowroot: "open",
        // Without the slot name, for example vaadin-checkbox would consider this an unwrapped slotted label
        slot: "ignore",
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

        if (preRenderConfig?.shadowDomContent && !customElements.get(tagName)) {
          // The element is not defined yet, pre-render shadow DOM on the client
          applyShadowDOM(element, preRenderConfig?.shadowDomContent);
        }

        // If the element has a post-render hook, run it
        preRenderConfig?.postRender?.(element);
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
