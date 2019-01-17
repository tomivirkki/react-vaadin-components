import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-grid/all-imports';

class GridCellRendererComponent extends Component {
  render() {
    this.props.proxy.setModel = model => this.setState({model});
    return this.state ? this.props.render(this.state.model) : null;
  }
}

export class Grid extends CustomElementIs('vaadin-grid') {
  constructor() {
    super();
    this.propertyBlacklist.push('rowDetailsRenderer');
  }

  _configRef(grid) {
    if (this.props.rowDetailsRenderer) {
      grid.rowDetailsRenderer = grid.rowDetailsRenderer || ((root, grid, model) => {
        if (!root._rendererComponent) {
          root._rendererComponent = React.createElement(GridCellRendererComponent, {
            proxy: root._rendererProxy = {},
            render: this.props.rowDetailsRenderer
          });
          const portal = ReactDOM.createPortal(root._rendererComponent, root);
          this.setState({portals: this.state.portals.concat(portal)});
        }

        root._rendererProxy.setModel(model);
      });
    }
  }
}

export class GridColumn extends CustomElementIs('vaadin-grid-column') {
  constructor() {
    super();
    this.propertyBlacklist.push('renderer');
  }

  _configRef(column) {
    if (this.props.renderer) {
      column.renderer = column.renderer || ((root, grid, model) => {
        if (!root._rendererComponent) {
          root._rendererComponent = React.createElement(GridCellRendererComponent, {
            proxy: root._rendererProxy = {},
            render: this.props.renderer
          });
          const portal = ReactDOM.createPortal(root._rendererComponent, root);
          this.setState({portals: this.state.portals.concat(portal)});
        }

        root._rendererProxy.setModel(model);
      });
    }

    if (this.props.headerComponent) {
      column.headerRenderer = column.headerRenderer || (root => {
        if (!root._portal) {
          root._portal = ReactDOM.createPortal(this.props.headerComponent, root);
          this.setState({portals: this.state.portals.concat(root._portal)});
        }
      });
    }
  }
}

export class GridColumnGroup extends CustomElementIs('vaadin-grid-column-group') {}

export class GridSelectionColumn extends GridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-selection-column';
  }
}

export class GridSortColumn extends GridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-sort-column';
  }
}

export class GridFilterColumn extends GridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-filter-column';
  }
}

export class GridTreeColumn extends GridColumn {
  constructor() {
    super();
    this.tagName = 'vaadin-grid-tree-column';
  }
}
