import ReactDOM from 'react-dom';
import VaadinComponent from './VaadinComponent';
import '@vaadin/vaadin-grid/all-imports';

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

export class VaadinGridSelectionColumn extends VaadinComponent {
  constructor() {
    super('vaadin-grid-selection-column');
  }
}

export class VaadinGridSortColumn extends VaadinComponent {
  constructor() {
    super('vaadin-grid-sort-column');
  }
}

export class VaadinGridFilterColumn extends VaadinComponent {
  constructor() {
    super('vaadin-grid-filter-column');
  }
}

export class VaadinGridTreeColumn extends VaadinComponent {
  constructor() {
    super('vaadin-grid-tree-column');
  }
}

export class VaadinGridColumnGroup extends VaadinComponent {
  constructor() {
    super('vaadin-grid-column-group');
  }

  _configRef(column) {
    if (this.props.headerComponent) {
      column.headerRenderer = column.headerRenderer || ((root, grid) => {
        ReactDOM.render(this.props.headerComponent, root);
      });
    }
  }
}

export class VaadinGridTreeToggle extends VaadinComponent {
  constructor() {
    super('vaadin-grid-tree-toggle');
  }
}
