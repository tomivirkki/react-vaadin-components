import React, { Component } from 'react';
import { Components } from './Components';

import {
  VaadinAppLayout,
  VaadinTabs,
  VaadinTab
} from 'react-vaadin-components';

class App extends Component {

  render() {
    return (
      <VaadinAppLayout>
        <h3 slot="branding">React Vaadin Components</h3>

        <VaadinTabs slot="menu">
          <VaadinTab>Intro</VaadinTab>
          <VaadinTab>Tutorial</VaadinTab>
          <VaadinTab>Components</VaadinTab>
        </VaadinTabs>

        <div style={{height: '100%'}}>
          <Components></Components>
        </div>

      </VaadinAppLayout>
    );
  }
}

export default App;
