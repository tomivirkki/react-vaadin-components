import ReactDOM from 'react-dom';
import { WebComponent } from './WebComponent';
import '@vaadin/vaadin-grid/all-imports';

export class VaadinGrid extends WebComponent {
  constructor() {
    super('vaadin-grid');
    this.propertyBlacklist.push('renderer', 'headerRenderer', 'footerRenderer');
  }
}

export class VaadinGridColumn extends WebComponent {
  constructor() {
    super('vaadin-grid-column');
  }

  _configRef(column) {
    if (this.props.renderer) {
      column.renderer = column.renderer || ((root, grid, model) => {
        ReactDOM.render(this.props.renderer(model), root);
      });
    }

    if (this.props.headerComponent) {
      column.headerRenderer = column.headerRenderer || ((root, grid) => {
        ReactDOM.render(this.props.headerComponent, root);
      });
    }
  }
}

export class VaadinGridColumnGroup extends WebComponent {
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

export class VaadinGridSelectionColumn extends WebComponent {
  constructor() {
    super('vaadin-grid-selection-column');
  }
}

export class VaadinGridSortColumn extends WebComponent {
  constructor() {
    super('vaadin-grid-sort-column');
  }
}

export class VaadinGridFilterColumn extends WebComponent {
  constructor() {
    super('vaadin-grid-filter-column');
  }
}

export class VaadinGridTreeColumn extends WebComponent {
  constructor() {
    super('vaadin-grid-tree-column');
  }
}
