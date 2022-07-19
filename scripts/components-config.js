const gridColumnRenderers = {
  components: {
    headerComponent: "headerRenderer",
    footerComponent: "footerRenderer",
  },
  itemRenderers: {
    itemRenderer: "renderer",
  },
};

// TODO: Merge renderers and preRenderConfigs under one object mapped by component names
export const renderers = {
  "test-component": {
    childRenderer: "overlayRenderer",
    components: {
      headerComponent: "headerRenderer",
    },
    itemRenderers: {
      itemRenderer: "renderer",
    },
  },
  "vaadin-dialog": {
    childRenderer: "renderer",
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
  },
  "vaadin-grid-column": gridColumnRenderers,
  "vaadin-grid-tree-column": gridColumnRenderers,
  "vaadin-grid-filter-column": gridColumnRenderers,
  "vaadin-grid-sort-column": gridColumnRenderers,
  "vaadin-grid-selection-column": gridColumnRenderers,
  "vaadin-grid-column-group": {
    components: gridColumnRenderers.components,
  },
  "vaadin-grid": {
    itemRenderers: {
      itemDetailsRenderer: "rowDetailsRenderer",
    },
  },
};

// TODO: Would be safer to just use (conditional) styles since props will be in effect even after hydration
const inputFieldHostProperties = {
  "'has-label'": "props.label ? '' : undefined",
  "'has-value'": "props.value ? '' : undefined",
  "'has-helper'": "props.helperText ? '' : undefined",
  "'clear-button-visible'": "props.clearButtonVisible ? '' : undefined",
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

const inputFieldConfig = {
  hostProperties: inputFieldHostProperties,
  children: [inputFieldLabel, inputFieldInput, inputFieldHelper],
};

export const preRenderConfigs = {
  "test-component": {
    styles: `
      :host {
        --test-component-prerender-style: 1;
      }
    `,
    // TODO: Test
    hostProperties: {
      "'has-value'": "props.value ? '' : undefined",
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
  },
  "vaadin-checkbox": {
    hostProperties: {
      "'has-label'": "props.label ? '' : undefined",
      "'has-value'": "props.value ? '' : undefined",
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
  "vaadin-checkbox-group": {
    hostProperties: {
      "'has-label'": "props.label ? '' : undefined",
    },
    children: [inputFieldLabel],
  },
  "vaadin-text-field": inputFieldConfig,
  "vaadin-date-picker": inputFieldConfig,
  "vaadin-password-field": inputFieldConfig,
  "vaadin-combo-box": inputFieldConfig,
  "vaadin-multi-select-combo-box": {
    hostProperties: {
      ...inputFieldHostProperties,
      "'has-value'": "props.selectedItems?.length ? '' : undefined",
    },
    children: [inputFieldLabel, inputFieldInput],
  },
  "vaadin-integer-field": inputFieldConfig,
  "vaadin-email-field": inputFieldConfig,
  "vaadin-number-field": inputFieldConfig,
  "vaadin-select": {
    hostProperties: {
      "'has-label'": "props.label ? '' : undefined",
      "'has-value'": "props.value ? '' : undefined",
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
  "vaadin-text-area": {
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
  "vaadin-radio-button": {
    hostProperties: {
      "'has-label'": "props.label ? '' : undefined",
      "'has-value'": "props.value ? '' : undefined",
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
  "vaadin-radio-group": {
    hostProperties: {
      "'has-label'": "props.label ? '' : undefined",
      "'has-value'": "props.value ? '' : undefined",
    },
    children: [inputFieldLabel],
  },
  "vaadin-tabs": {
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
  "vaadin-tab": {
    styles: `
      :host(:not([orientation])) ::slotted(a[href]) {
        justify-content: var(--_slotted-anchor-justify-content, center) !important;
      }
    `,
  },
  "vaadin-progress-bar": {
    styles: `
      :host {
        --vaadin-progress-value: 0;
      }
    `,
  },
  "vaadin-details": {
    styles: `
      :host([opened]) [part="content"] {
        max-height: none !important;
      }
    `,
  },
  "vaadin-accordion-panel": {
    styles: `
      :host([opened]) [part="content"] {
        max-height: none !important;
      }
    `,
  },

  // TODO: There's still a brief layout shift when the drawer is open, even with javascript disabled (without hydration)
  "vaadin-app-layout": {
    styles: `
      :host {
        --_vaadin-app-layout-drawer-offset-size: 16em !important;
        --vaadin-app-layout-transition: 0 !important;
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
  // With other components the shadow DOM content is mostly static.
  // In grid's case, the content is dynamic so it can't be SSR'd the same way (would require dynamically rendering the component server-side)
  // Only include the styles affecting the host element for now.
  "vaadin-grid": {
    shadowDomContent: `<style>\n    \n\n    :host {\n        display: block;\n        height: 400px;\n        flex: 1 1 auto;\n        align-self: stretch;\n        position: relative;\n    }\n\n    :host([hidden]) {\n        display: none !important;\n    }\n\n    :host([disabled]) {\n        pointer-events: none;\n    }\n\n    :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-s);\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n        box-sizing: border-box;\n        -webkit-text-size-adjust: 100%;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n  \n        /* For internal use only */\n      --_lumo-grid-border-color: var(--lumo-contrast-20pct);\n      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);\n      --_lumo-grid-border-width: 1px;\n      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);\n    }\n\n    /* No (outer) border */\n\n    :host(:not([theme~='no-border'])) {\n        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);\n    }\n\n    :host([disabled]) {\n        opacity: 0.7;\n    }\n  </style>`,
  },
};
