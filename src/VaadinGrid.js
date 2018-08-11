import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/vaadin-grid-tree-toggle';

const e = React.createElement;

export class VaadinGrid extends Component {

  constructor() {
    super();
    this.state = {};
    // Needed for now to fix an issue with missing style scopes on FireFox
    customElements.whenDefined('vaadin-grid').then(() => {
      this.setState(Object.assign(this.state, {defined: true}));
    });
  }

  render() {
    if (!this.state.defined) {
      return null;
    }
    return e('vaadin-grid', {
      theme: this.props.theme,
      class: this.props.className,
      ref: g => {
        if (!g) {
          return;
        }
        g.heightByRows = this.props.heightByRows;

        if (this.props.dataProvider) {
          g.dataProvider = this.props.dataProvider;
        } else if (this.props.items) {
          g.items = this.props.items;
        }

        g.size = this.props.size || g.size;
        g.expandedItems = this.props.expandedItems;

        // TODO: Switch to using a renderers once they're available.
        if (!g._monkeyPatched) {
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
          g._monkeyPatched = true;
        }
      }
    }, this.props.children);
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

export class VaadinGridTreeToggle extends Component {
  render() {
    return e('vaadin-grid-tree-toggle', {
      ref: t => {
        if (!t) {
          return
        }
        t.leaf = this.props.leaf;
        t.expanded = this.props.expanded;

        if (!t._hasExpandedListener) {
          t.addEventListener('expanded-changed', e => {
            this.props.expandedChanged(e.detail.value);
          });
          t._hasExpandedListener = true;
        }
      }
    }, this.props.children);
  }
}
