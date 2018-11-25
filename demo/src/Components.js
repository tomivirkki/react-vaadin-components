import React, { Component } from 'react';
import './Components.css';
import demos, { loadCode } from './demos.js';
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
      return;
    }

    this.setState({
      redirectTo: `${this.props.match.path.split('/:')[0]}/${item.parent.id}/${item.id}`,
      menuOpen: false
    })
  }

  componentWillReceiveProps = props => {
    const params = props.match.params;
    const component = demos.filter(component => component.id === params.component)[0] || demos[0];
    const demo = component.children.filter(demo => demo.id === params.demo)[0] || component.children[0];

    if (demo.code) {
      this.setState({demo});
    } else {
      loadCode(demo).then(() => this.setState({demo}));
    }
  }


  render() {
    const demo = this.state.demo;

    return demo ? <VaadinHorizontalLayout style={{height: '100%', position: 'relative'}}>
      <VaadinVerticalLayout style={{flex: 1, overflow: 'auto'}} theme="padding">
        <h2>{demo.parent.title + ' – ' + demo.title}</h2>
        <Playground noRender={!demo.render} codeText={demo.code || ''} scope={demo.scope}/>
      </VaadinVerticalLayout>

      <VaadinVerticalLayout className={`Menubar${this.state.menuOpen ? ' open' : ''}`} theme="padding">
        <Tree items={demos} onItemSelected={this.itemSelected} />
      </VaadinVerticalLayout>

      <div className="Menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>
      {this.state.redirectTo && <Redirect to={this.state.redirectTo} push />}
    </VaadinHorizontalLayout> : null;
  }

}
