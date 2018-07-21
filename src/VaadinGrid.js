import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';

const e = React.createElement;

export class VaadinGrid extends Component {

  render() {
    return e('vaadin-grid', {
      ref: g => {
        g.items = this.props.items;

        // TODO: Switch to using a renderers once they're available.
        const ui = g._updateItem;
        g._updateItem = (row, item) => {
          ui.call(g, row, item);
          Array.from(row.children).forEach((cell, index) => {
            ReactDOM.render(cell._column.renderer(item), cell._content);
            if (cell._column._headerCell && cell._column.header) {
              // FIXME: Not the best place to do this as it's run quite often.
              ReactDOM.render(cell._column.header, cell._column._headerCell._content);
            }
          });
        }
      }
    }, this.props.children);
  }
}


export class VaadinGridColumn extends Component {
  render() {
    const headerTemplate =  e('template', {className: 'header'});

    return e('vaadin-grid-column', {
      ref: c => Object.assign(c, this.props)
    }, this.props.header ? headerTemplate : '');
  }
}
