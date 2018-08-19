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

export class VaadinGridColumn extends VaadinComponent {

  constructor() {
    super('vaadin-grid-column');
  }

  _getChildren() {
    const headerTemplate =  React.createElement('template', {className: 'header'});
    return this.props.header ? headerTemplate : '';
  }

}

export class VaadinGridTreeToggle extends VaadinComponent {

  constructor() {
    super('vaadin-grid-tree-toggle');
  }

}
