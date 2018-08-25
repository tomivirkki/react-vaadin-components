import React from 'react';
import ReactDOM from 'react-dom';
import VaadinComponent from './VaadinComponent';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-tree-toggle';

export class VaadinGrid extends VaadinComponent {
  constructor() {
    super('vaadin-grid');
  }

  _configRef(g) {
    // Something not working right with the scoping shim, use this patch for now
    if (window.ShadyCSS && !this.__scopeObserver) {
      this.__scopeObserver = new MutationObserver(() => {
        Array.from(g.shadowRoot.querySelectorAll('tr:not(.style-scope), td:not(.style-scope), th:not(.style-scope)'))
          .forEach(e => e.classList.add('style-scope', 'vaadin-grid'));
      });
      this.__scopeObserver.observe(g.$.scroller, {childList: true, subtree: true});
    }
  }
}

export class VaadinGridColumn extends VaadinComponent {
  constructor() {
    super('vaadin-grid-column');
  }

  _configRef(column) {
    if (this.props.renderer) {
      column.renderer = column.renderer || ((root, grid, model) => {
        ReactDOM.render(this.props.renderer(model), root);
      });
    }

    if (this.props.header) {
      column.headerRenderer = column.headerRenderer || ((root, grid) => {
        ReactDOM.render(this.props.header, root);
      });
    }
  }
}

export class VaadinGridTreeToggle extends VaadinComponent {
  constructor() {
    super('vaadin-grid-tree-toggle');
  }
}
