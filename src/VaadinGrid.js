import ReactDOM from 'react-dom';
import { WebComponent } from './WebComponent';
import '@vaadin/vaadin-grid/all-imports';

export class VaadinGrid extends WebComponent {
  constructor() {
    super('vaadin-grid');
  }
}

export class VaadinGridColumn extends WebComponent {
  constructor() {
    super('vaadin-grid-column');
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

export class VaadinGridColumnGroup extends WebComponent {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-column-group';
  }
}

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
