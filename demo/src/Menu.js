import React, { Component } from 'react';
import './Menu.css';
import demos from './demos.js';
import { VaadinGrid, VaadinGridColumn, VaadinGridTreeToggle } from 'react-vaadin-components';

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      pages: demos,
      expandedItems: [demos.find(demo => demo.id === this._parseHash().componentId)]
    }
    this._boundDataProvider = this.dataProvider.bind(this);
  }

  _parseHash() {
    const hash = window.location.hash.substr(2);
    const parts = hash.split('/');
    return {componentId: parts[0], demoId: parts[1]};
  }

  dataProvider(params, callback) {
    const pages = params.parentItem ? params.parentItem.pages : this.state.pages;

    if (params.parentItem) {
      pages.forEach(page => page.link = `${params.parentItem.id}/${page.id}`);
    }

    callback(pages, pages.length);
  }

  expandedChanged(item, expanded) {
    let expandedItems = this.state.expandedItems.slice(0);
    if (expanded) {
      if (expandedItems.indexOf(item) === -1) {
        expandedItems.push(item);
      }
    } else {
      const idx = expandedItems.indexOf(item);
      expandedItems.splice(idx, 1);
    }
    this.setState({
      expandedItems
    });
  }

  _activeItemChanged(e) {
    if (e.detail.value && e.detail.value.link) {
      window.location.hash = '/' + e.detail.value.link;
    }
  }

  render() {
    return (
      <div className="menu">
        <VaadinGrid
          theme="no-border no-row-borders"
          dataProvider={this._boundDataProvider}
          expandedItems={this.state.expandedItems}
          heightByRows={true}
          onActiveItemChanged={this._activeItemChanged.bind(this)}>
          <VaadinGridColumn
            renderer={({item}) => {
              return <VaadinGridTreeToggle
                expanded={this.state.expandedItems.includes(item)}
                leaf={!item.pages}
                onExpandedChanged={e => this.expandedChanged(item, e.detail.value)}>
                  {item.title}
              </VaadinGridTreeToggle>
            }}>
          </VaadinGridColumn>
        </VaadinGrid>
      </div>
    );
  }
}

export default Menu;
