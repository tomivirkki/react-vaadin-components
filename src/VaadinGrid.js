import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';

export class VaadinGrid extends Component {

  render() {
    return <vaadin-grid ref={g => {
      g.items = this.props.items;
      const ui = g._updateItem;
      g._updateItem = (row, item) => {
        ui.call(g, row, item);
        Array.from(row.children).forEach((cell, index) => {
          ReactDOM.render(cell._column.renderer(item), cell._content);
          if (cell._column._headerCell && cell._column.header) {
            // FIXME: Not the best place to do this as it's run quite often.
            // Switch to using a renderers once they're available.
            ReactDOM.render(cell._column.header, cell._column._headerCell._content);
          }
        });
      }
    }}>
      {this.props.children}
    </vaadin-grid>;
  }
}


export class VaadinGridColumn extends Component {
  render() {
    const headerTemplate = this.props.header ? <template className="header"></template> : '';

    return <vaadin-grid-column
      ref={c => {
        c.renderer = this.props.renderer;
        c.header = this.props.header;
      }}
      width={this.props.width}
      flex-grow={this.props.flexGrow}
    >
      {headerTemplate}
    </vaadin-grid-column>;
  }
}
