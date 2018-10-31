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

  render() {
    const params = this.props.match.params;
    const component = demos.find(component => component.id === params.component);
    let demo = null;
    if (component) {
      demo = component.children.find(demo => demo.id === params.demo);
    }

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
      window.location = `/components/${parentItem.id}/${item.id}`;
    }

  }
}
