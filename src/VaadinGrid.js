import ReactDOM from 'react-dom';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-grid/all-imports';

export class VaadinGrid extends CustomElementIs('vaadin-grid') {
  constructor() {
    super();
    this.propertyBlacklist.push('rowDetailsRenderer');
  }

  _configRef(grid) {
    if (this.props.rowDetailsRenderer) {
      grid.rowDetailsRenderer = grid.rowDetailsRenderer || ((root, grid, model) => {
        ReactDOM.render(this.props.rowDetailsRenderer(model), root);
      });
    }
  }
}

export class VaadinGridColumn extends CustomElementIs('vaadin-grid-column') {
  constructor() {
    super();
    this.propertyBlacklist.push('renderer');
  }

  _configRef(column) {
    if (this.props.renderer) {
      column.renderer = column.renderer || ((root, grid, model) => {
        ReactDOM.render(this.props.renderer(model), root);
      });
    }

    if (this.props.headerComponent) {
      column.headerRenderer = column.headerRenderer || ((root) => {
        ReactDOM.render(this.props.headerComponent, root);
      });
    }
  }
}

export class VaadinGridColumnGroup extends CustomElementIs('vaadin-grid-column-group') {}

export class VaadinGridSelectionColumn extends VaadinGridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-selection-column';
  }
}

export class VaadinGridSortColumn extends VaadinGridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-sort-column';
  }
}

export class VaadinGridFilterColumn extends VaadinGridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-filter-column';
  }
}

export class VaadinGridTreeColumn extends VaadinGridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-tree-column';
  }
}
