import React, { Component } from 'react';
import './Components.css';
import demos from './demos';
import Playground from 'component-playground';
import { Tree } from './Tree';

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
    return <div style={{display: 'flex', height: '100%', position: 'relative'}}>
      <div style={{flex: 1, padding: 'var(--lumo-space-m)', overflow: 'auto'}}>
        <h1>{demo.parent.title + ' – ' + demo.title}</h1>
        <Playground noRender={!demo.render} codeText={demo.code || ''} scope={demo.scope || {}}/>
      </div>

      <div className="Menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>

      <div className={`Menubar${this.state.menuOpen ? ' open' : ''}`}>
        <Tree items={demos} onItemSelected={this._itemSelected} style={{height: '100%'}} />
      </div>
    </div>;
  }

  _itemSelected = item => {
    const parentItem = demos.find(d => d.children.includes(item));
    if (parentItem) {
      window.location.hash = `/${parentItem.id}/${item.id}`;
    }

  }
}
