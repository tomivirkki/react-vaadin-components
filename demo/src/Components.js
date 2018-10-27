import React, { Component } from 'react';
import './Demo.css';
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
        this.setState({demo});
        return;
      }
    }
    this.setState({demo: null});
  }

  _parseHash() {
    const hash = window.location.hash.substr(2);
    const parts = hash.split('/');
    return {componentId: parts[0], demoId: parts[1]};
  }

  render() {
    const demo = this.state.demo || {parent: {}};
    return <div style={{display: 'flex', height: '100%'}}>
      <div style={{flex: 1, padding: 'var(--lumo-space-m)'}}>
        <h1>{demo.parent.title + ' – ' + demo.title}</h1>
        <Playground noRender={!demo.render} codeText={demo.code || ''} scope={demo.scope || {}}/>
      </div>

      <div style={{
        overflow: 'auto',
        height: '100%',
        background: 'var(--lumo-contrast-10pct)',
        padding: 'var(--lumo-space-s)',
        flex: '0 1 auto',
        width: '300px',
        maxWidth: '100%',
        boxSizing: 'border-box'

        }}>
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
