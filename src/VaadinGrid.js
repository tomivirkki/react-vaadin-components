import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VaadinComponent from './VaadinComponent';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-tree-toggle';

const e = React.createElement;

export class VaadinGrid extends VaadinComponent {

  constructor() {
    super('vaadin-grid');
  }

  _configRef(g) {
    g.heightByRows = this.props.heightByRows;

    if (this.props.dataProvider) {
      g.dataProvider = this.props.dataProvider;
    } else if (this.props.items) {
      g.items = this.props.items;
    }

    g.size = this.props.size || g.size;
    g.expandedItems = this.props.expandedItems;
    g.selectedItems = this.props.selectedItems;

    // TODO: Switch to using a renderers once they're available.
    if (!g._monkeyPatched) {
      const ui = g._updateItem;
      g._updateItem = (row, item) => {
        ui.call(g, row, item);
        Array.from(row.children).forEach((cell, index) => {
          ReactDOM.render(cell._column.renderer(item), cell._content);
          cell._instance = {item: row._item, setProperties: () => {}};
          if (cell._column._headerCell && cell._column.header) {
            // FIXME: Not the best place to do this as it's run quite often.
            ReactDOM.render(cell._column.header, cell._column._headerCell._content);
          }
        });
      }
      g._monkeyPatched = true;
    }
  }
}

export class VaadinGridColumn extends Component {
  render() {
    const headerTemplate =  e('template', {className: 'header'});
    return e('vaadin-grid-column', {
      ref: c => c && Object.assign(c, this.props)
    }, this.props.header ? headerTemplate : '');
  }
}

export class VaadinGridTreeToggle extends VaadinComponent {

  constructor() {
    super('vaadin-grid-tree-toggle');
  }

  _configRef(t) {
    t.leaf = this.props.leaf;
    t.expanded = this.props.expanded;
  }
}
