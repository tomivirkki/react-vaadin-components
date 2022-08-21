import { NotificationTemplate } from "./Notification-template.js";

const gridColumnRenderers = {
  components: {
    header: "headerRenderer",
    footer: "footerRenderer",
  },
  itemRenderers: {
    itemRenderer: "renderer",
  },
};

const hostPropertyHasLabel = { "'has-label'": "props.label ? '' : undefined" };
const hostPropertyHasValue = { "'has-value'": "props.value ? '' : undefined" };
const hostPropertyHasHelper = {
  "'has-helper'":
    "props.helperText || [props.children].flat(Infinity).some((child) => child?.props.slot === 'helper') ? '' : undefined",
};
const hostPropertyClearButtonVisible = {
  "'clear-button-visible'": "props.clearButtonVisible ? '' : undefined",
};

const inputFieldHostProperties = {
  ...hostPropertyHasLabel,
  ...hostPropertyHasValue,
  ...hostPropertyHasHelper,
  ...hostPropertyClearButtonVisible,
};

const inputFieldLabel = {
  tag: "'label'",
  textContent: "props.label",
  properties: {
    slot: "'label'",
  },
};

const inputFieldInput = {
  tag: "'input'",
  properties: {
    slot: "'input'",
    placeholder: "props.placeholder",
  },
};

const inputFieldHelper = {
  tag: "'div'",
  textContent: "props.helperText",
  properties: {
    slot: "'helper'",
  },
};

const inputFieldPreRenderConfig = {
  hostProperties: inputFieldHostProperties,
  children: [inputFieldLabel, inputFieldInput, inputFieldHelper],
  styles: `
    :host([disabled]) vaadin-input-container {
      background-color: var(--lumo-contrast-5pct);
    }
  `,
};

export const componentsConfig = {
  "test-component": {
    renderers: {
      components: {
        "": "overlayRenderer",
        header: "headerRenderer",
      },
      itemRenderers: {
        itemRenderer: "renderer",
      },
    },
    preRenderConfig: {
      styles: `
      :host {
        --test-component-prerender-style: 1;
      }
    `,
      hostProperties: {
        ...hostPropertyHasValue,
      },
      children: [
        {
          tag: "'div'",
          textContent: "props.value",
          properties: {
            slot: "'foo'",
          },
        },
        {
          tag: "'div'",
        },
      ],
      postRender: `(element: HTMLElement) => {
        element.style.setProperty("--test-component-background", "red");
      }`,
    },
  },
  "vaadin-dialog": {
    renderers: {
      components: {
        "": "renderer",
        header: "headerRenderer",
        footer: "footerRenderer",
      },
    },
  },
  "vaadin-grid-column": {
    renderers: gridColumnRenderers,
  },
  "vaadin-grid-tree-column": {
    renderers: gridColumnRenderers,
  },
  "vaadin-grid-filter-column": {
    renderers: gridColumnRenderers,
  },
  "vaadin-grid-sort-column": {
    renderers: gridColumnRenderers,
  },
  "vaadin-grid-selection-column": {
    renderers: gridColumnRenderers,
  },
  "vaadin-grid-column-group": {
    renderers: {
      components: gridColumnRenderers.components,
    },
  },
  "vaadin-grid": {
    preRenderConfig: {
      // With other components the shadow DOM content is mostly static.
      // In grid's case, the content is dynamic so it can't be SSR'd the same way (would require dynamically rendering the component server-side)
      // Only include the styles affecting the host element for now.
      shadowDomContent: `<style>\n    \n\n    :host {\n        display: block;\n        height: 400px;\n        flex: 1 1 auto;\n        align-self: stretch;\n        position: relative;\n    }\n\n    :host([hidden]) {\n        display: none !important;\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n    }\n\n    :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-s);\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n  \n        /* For internal use only */\n      --_lumo-grid-border-color: var(--lumo-contrast-20pct);\n      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);\n      --_lumo-grid-border-width: 1px;\n      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);\n    }\n\n    /* No (outer) border */\n\n    :host(:not([theme~='no-border'])) {\n        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);\n    }\n\n    :host([disabled]) {\n        opacity: 0.7;\n    }\n  </style>`,
    },
    renderers: {
      itemRenderers: {
        itemDetailsRenderer: "rowDetailsRenderer",
      },
    },
  },
  "vaadin-custom-field": {
    preRenderConfig: {
      children: [inputFieldLabel, inputFieldHelper],
      hostProperties: {
        ...hostPropertyHasLabel,
        ...hostPropertyHasHelper,
      },
    },
  },
  "vaadin-checkbox": {
    preRenderConfig: {
      hostProperties: {
        ...hostPropertyHasLabel,
        ...hostPropertyHasValue,
      },
      children: [
        inputFieldLabel,
        {
          tag: "'input'",
          properties: {
            slot: "'input'",
            type: "'checkbox'",
          },
        },
      ],
    },
  },
  "vaadin-checkbox-group": {
    preRenderConfig: {
      hostProperties: {
        ...hostPropertyHasLabel,
      },
      children: [inputFieldLabel],
    },
  },

  "vaadin-text-field": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-date-picker": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-password-field": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-combo-box": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-integer-field": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-email-field": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-number-field": {
    preRenderConfig: inputFieldPreRenderConfig,
  },
  "vaadin-multi-select-combo-box": {
    preRenderConfig: {
      hostProperties: {
        ...inputFieldHostProperties,
        "'has-value'": "props.selectedItems?.length ? '' : undefined",
      },
      children: [inputFieldLabel, inputFieldInput],
    },
  },
  "vaadin-select": {
    preRenderConfig: {
      hostProperties: {
        ...hostPropertyHasLabel,
        ...hostPropertyHasValue,
      },
      children: [
        inputFieldLabel,
        {
          tag: "'vaadin-select-value-button'",
          properties: {
            slot: "'value'",
          },
        },
      ],
    },
  },
  "vaadin-text-area": {
    preRenderConfig: {
      hostProperties: inputFieldHostProperties,
      children: [
        inputFieldLabel,
        {
          tag: "'textarea'",
          properties: {
            slot: "'textarea'",
            placeholder: "props.placeholder",
          },
        },
      ],
    },
  },
  "vaadin-radio-button": {
    preRenderConfig: {
      hostProperties: {
        ...hostPropertyHasLabel,
        ...hostPropertyHasValue,
      },
      children: [
        inputFieldLabel,
        {
          tag: "'input'",
          properties: {
            slot: "'input'",
            type: "'radio'",
          },
        },
      ],
    },
  },
  "vaadin-radio-group": {
    preRenderConfig: {
      hostProperties: {
        ...hostPropertyHasLabel,
        ...hostPropertyHasValue,
      },
      children: [inputFieldLabel],
    },
  },
  "vaadin-tabs": {
    preRenderConfig: {
      hostProperties: {
        "'orientation'": "props.orientation || 'horizontal'",
      },
      styles: `
      :host([orientation="vertical"]) ::slotted(vaadin-tab) {
        transform-origin: 0% 50%;
        padding: 0.25rem 1rem;
        min-height: var(--lumo-size-m);
        min-width: 0;
        --_slotted-anchor-justify-content: normal;
      }
    `,
    },
  },
  "vaadin-tab": {
    preRenderConfig: {
      styles: `
      :host(:not([orientation])) ::slotted(a[href]) {
        justify-content: var(--_slotted-anchor-justify-content, center) !important;
      }
    `,
    },
  },
  "vaadin-progress-bar": {
    preRenderConfig: {
      styles: `
      :host {
        --vaadin-progress-value: 0;
      }
    `,
    },
  },
  "vaadin-details": {
    preRenderConfig: {
      styles: `
      :host([opened]) [part="content"] {
        max-height: none !important;
      }
    `,
    },
  },
  "vaadin-accordion-panel": {
    preRenderConfig: {
      styles: `
      :host([opened]) [part="content"] {
        max-height: none !important;
      }
    `,
    },
  },
  "vaadin-app-layout": {
    preRenderConfig: {
      hostProperties: {
        "'style'": `{
            /* A hack to avoid a declarative shadow related FOUC (happens even with JS disabled) */
            opacity: 'var(--_vaadin-app-layout-opacity, 0)',
            
            /* Add some preliminary height for the app-layout navbar in case it has children */
            '--_vaadin-app-layout-navbar-offset-size': ([...props.children].some(child => child.props.slot === 'navbar') ? '44px' : '0px'),

            /* Finally add any existing styles */
            ...(props.style || {})
      }`.replace(/\n/g, ""),
      },
      postRender: `(element: HTMLElement) => {
        /* A hack to avoid a declarative shadow related FOUC (happens even with JS disabled) */
        element.style.setProperty("--_vaadin-app-layout-opacity", "1");
      }`,
      styles: `
      :host {
        --_vaadin-app-layout-drawer-offset-size: 16em !important;
        --vaadin-app-layout-transition: 0 !important;

        /* A hack to avoid a declarative shadow related FOUC (happens even with JS disabled) */
        --_vaadin-app-layout-opacity: 1;
      }

      :host [part="drawer"] {
        display: block !important;
      }

      :host [part="navbar"] {
        display: flex !important;
      }

      @media (max-width: 800px), (max-height: 600px) {
        :host {
          --_vaadin-app-layout-drawer-offset-size: 0 !important;
        }

        :host [part="drawer"] {
          opacity: 0;
        }
      }

      :host {
        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
      }
      
      :host(:not([dir='rtl'])[primary-section='drawer']:not([overlay])) [part='navbar'] {
        left: var(--vaadin-app-layout-drawer-offset-left, 0);
      }
  
      :host([dir='rtl'][primary-section='drawer']:not([overlay])) [part='navbar'] {
        right: var(--vaadin-app-layout-drawer-offset-left, 0);
      }
  
      :host [part='drawer'] {
        visibility: visible;
        transform: translateX(0%);
      }
  
      :host([dir='rtl']) [part='drawer'] {
        transform: translateX(0%);
      }
      
      :host(:not([dir='rtl']):not([overlay])) {
        padding-left: var(--vaadin-app-layout-drawer-offset-left);
      }
      
      :host([dir='rtl']:not([overlay])) {
        padding-right: var(--vaadin-app-layout-drawer-offset-left);
      }
    `,
    },
  },
};

export const packagesConfig = {
  notification: {
    componentFileContent: NotificationTemplate,
  },
  icon: {
    componentFileAdditionalContent: `
      export function LumoIconset() {
        if (typeof window !== "undefined") {
          // @ts-ignore
          import("@vaadin/vaadin-lumo-styles/vaadin-iconset");
        }
        return null;
      }

      export function VaadinIconset() {
        if (typeof window !== "undefined") {
          // @ts-ignore
          import("@vaadin/icons/vaadin-iconset");
        }
        return null;
      }
    `,
  },
};
