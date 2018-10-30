import React, { Component } from 'react';
import './Components.css';
import demos from './demos';
import Playground from 'component-playground';
import { Tree } from './Tree';
import {
  VaadinHorizontalLayout,
  VaadinVerticalLayout
} from 'react-vaadin-components';

export class Components extends Component {

  state = {};

  constructor() {
    super();
    window.addEventListener('hashchange', this._updateState.bind(this));
  }

  componentDidMount() {
    this._updateState();
  }

  _updateState() {
    const {componentId, demoId} = this._parseHash();
    const component = demos.find(component => component.id === componentId);
    if (component) {
      const demo = component.children.find(demo => demo.id === demoId);
      if (this.state.demo !== demo) {
        this.setState({demo, menuOpen: false});
        return;
      }
    }
    this.setState({demo: null, menuOpen: false});
  }

  _parseHash() {
    const hash = window.location.hash.substr(2);
    const parts = hash.split('/');
    return {componentId: parts[0], demoId: parts[1]};
  }

  render() {
    const demo = this.state.demo || {parent: {}};
    return <VaadinHorizontalLayout style={{height: '100%', position: 'relative'}}>
      <VaadinVerticalLayout style={{flex: 1, overflow: 'auto'}} theme="padding">
        <h2>{demo.parent.title + ' – ' + demo.title}</h2>
        <Playground noRender={!demo.render} codeText={demo.code || ''} scope={demo.scope || {}}/>
      </VaadinVerticalLayout>

      <VaadinVerticalLayout className={`Menubar${this.state.menuOpen ? ' open' : ''}`} theme="padding">
        <Tree items={demos} onItemSelected={this._itemSelected} />
      </VaadinVerticalLayout>

      <div className="Menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>
    </VaadinHorizontalLayout>;
  }

  _itemSelected = item => {
    const parentItem = demos.find(d => d.children.includes(item));
    if (parentItem) {
      window.location.hash = `/${parentItem.id}/${item.id}`;
    }

  }
}
