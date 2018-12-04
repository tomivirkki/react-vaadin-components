import React, { Component } from 'react';
import {
  Grid,
  GridTreeColumn
} from 'react-vaadin-components';

export class Tree extends Component {

  state = { expandedItems: [] }

  _dataProvider = (params, callback) => {
    const children = params.parentItem ? params.parentItem.children : this.props.items;
    callback(children, children.length);
  }

  expandedChanged(item, expanded) {
    const expandedItems = this.state.expandedItems
      .filter(i => i !== item)
      .concat(expanded ? item : []);
    this.setState({ expandedItems });
  }

  _activeItemChanged = e => {
    if (!e.detail.value.children) {
      this.props.onItemSelected && this.props.onItemSelected(e.detail.value);
    }
    this.setState({activeItem: null});
  }

  _gridKeydown = e => {
    const item = e.target.getEventContext(e).item;
    const keyCode = e.keyCode;
    if (keyCode === 39) {
      item.children && this.expandedChanged(item, true);
    } else if (keyCode === 37) {
      // The following is hacky as it accessess grid's internals
      const parentToggleCell = Array.from(e.target.querySelectorAll('vaadin-grid-tree-toggle'))
        .map(toggle => toggle.parentNode.assignedSlot.parentNode)
        .filter(cell => {
          const parentItem = cell._instance.item;
          return parentItem && parentItem.children && parentItem.children.indexOf(item) > -1;
        })[0];

      if (parentToggleCell) {
        parentToggleCell.focus();
      } else {
        this.expandedChanged(item, false);
      }
    }
  }

  render() {
    return (
      <Grid
        style={{'--lumo-base-color': 'transparent'}}
        theme="no-border no-row-borders"
        onKeydown={this._gridKeydown}
        dataProvider={this._dataProvider}
        expandedItems={this.state.expandedItems}
        onActiveItemChanged={this._activeItemChanged}
        activeItem={this.state.activeItem}
        heightByRows
        ref={g => g && (g._element.$.header.hidden = true) /* hide the header */}>
        <GridTreeColumn path="title"></GridTreeColumn>
      </Grid>
    );
  }
}
