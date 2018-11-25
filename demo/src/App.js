import React, { Component } from 'react';
import { Components } from './Components';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import {
  VaadinAppLayout,
  VaadinTabs,
  VaadinTab
} from 'react-vaadin-components';

class App extends Component {

  pages = [
    {title: 'Intro', path: "/intro", component: null},
    {title: 'Tutorial', path: "/tutorial", component: null},
    {title: 'Components', path: "/components/:component?/:page?", component: Components},
  ]

  getRootPath = page => page.path.split('/:')[0]

  onTabChanged = e => this.setState({activePage: this.pages[e.detail.value]})

  state = { activePage: this.pages.filter(p => window.location.href.indexOf(this.getRootPath(p)) > -1)[0] || this.pages[0] }

  render() {
    const rootPath = this.getRootPath(this.state.activePage);
    const shouldRedirect = !window.location.href.indexOf(rootPath) > -1;

    return (
      <HashRouter>
        <VaadinAppLayout>
          <h3 slot="branding">React Vaadin Components</h3>

          <VaadinTabs slot="menu" onSelectedChanged={this.onTabChanged} selected={this.pages.indexOf(this.state.activePage)}>
            {this.pages.map(page => <VaadinTab key={page.path}>{page.title}</VaadinTab> )}
          </VaadinTabs>

          <div style={{height: '100%'}}>
            {this.pages.map(page => <Route key={page.path} path={page.path} component={page.component} /> )}

            {shouldRedirect && <Redirect to={rootPath} push />}
          </div>

        </VaadinAppLayout>
      </HashRouter>
    );
  }

}

export default App;
