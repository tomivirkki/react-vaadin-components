import React, { Component } from 'react';
import './Components.css';
import demos, { loadDemos, scope } from './demos.js';
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
    const page = component.children.filter(page => page.id === params.page)[0] || component.children[0];

    if (page.demos) {
      this.setState({page});
    } else {
      loadDemos(page).then(page => this.setState({page}));
    }
  }

  render() {
    const page = this.state.page;

    const pageDemos = page && page.demos && page.demos.map(demo => <div key={demo.title} style={{width: '100%'}}>
      <h3>{demo.title}</h3>
      <Playground noRender={!demo.render} codeText={demo.code || ''} scope={scope}/>
    </div>);

    return page ? <VaadinHorizontalLayout style={{height: '100%', position: 'relative'}}>
      <VaadinVerticalLayout style={{flex: 1, overflow: 'auto'}} theme="padding">
        {pageDemos}
      </VaadinVerticalLayout>
      <VaadinVerticalLayout className={`Menubar${this.state.menuOpen ? ' open' : ''}`} theme="padding">
        <Tree items={demos} onItemSelected={this.itemSelected} />
      </VaadinVerticalLayout>

      <div className="Menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>
      {this.state.redirectTo && <Redirect to={this.state.redirectTo} push />}
    </VaadinHorizontalLayout> : null;
  }

}
