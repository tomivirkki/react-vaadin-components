import React, { Component } from 'react';
import { Components } from './Components';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import {
  VaadinAppLayout,
  VaadinTabs,
  VaadinTab
} from 'react-vaadin-components';

class App extends Component {

  pages = [
    {title: 'Intro', path: "/intro", component: null},
    {title: 'Tutorial', path: "/tutorial", component: null},
    {title: 'Components', path: "/components/:component?/:demo?", component: Components},
  ]

  getRootPath = page => page.path.split('/:')[0]

  onTabChanged = e => this.setState({activePage: this.pages[e.detail.value]})

  state = { activePage: this.pages.find(p => window.location.href.includes(this.getRootPath(p))) || this.pages[0] }

  render() {
    const rootPath = this.getRootPath(this.state.activePage);
    const shouldRedirect = !window.location.href.includes(rootPath);

    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }

}

export default App;
