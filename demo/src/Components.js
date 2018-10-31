import React, { Component } from 'react';
import './Components.css';
import demos from './demos';
import Playground from 'component-playground';
import { Tree } from './Tree';
import { Redirect } from 'react-router-dom';
import {
  VaadinHorizontalLayout,
  VaadinVerticalLayout
} from 'react-vaadin-components';

export class Components extends Component {

  state = {}

  itemSelected = item => {
    if (!item.parent) {
      debugger;
    }

    this.setState({
    redirectTo: `${this.props.match.path.split('/:')[0]}/${item.parent.id}/${item.id}`,
    menuOpen: false
  })
}

  render() {
    const params = this.props.match.params;
    const component = demos.find(component => component.id === params.component) || demos[0];
    const demo = component.children.find(demo => demo.id === params.demo) || component.children[0];

    return <VaadinHorizontalLayout style={{height: '100%', position: 'relative'}}>
      <VaadinVerticalLayout style={{flex: 1, overflow: 'auto'}} theme="padding">
        <h2>{demo.parent.title + ' – ' + demo.title}</h2>
        <Playground noRender={!demo.render} codeText={demo.code || ''} scope={demo.scope || {}}/>
      </VaadinVerticalLayout>

      <VaadinVerticalLayout className={`Menubar${this.state.menuOpen ? ' open' : ''}`} theme="padding">
        <Tree items={demos} onItemSelected={this.itemSelected} />
      </VaadinVerticalLayout>

      <div className="Menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>
      {this.state.redirectTo && <Redirect to={this.state.redirectTo} push />}
    </VaadinHorizontalLayout>;
  }

}
