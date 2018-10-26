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
        <h3 slot="branding">Branding</h3>

        <VaadinTabs slot="menu">
          <VaadinTab>Intro</VaadinTab>
          <VaadinTab>Tutorial</VaadinTab>
          <VaadinTab>Components</VaadinTab>
        </VaadinTabs>

        <div style={{height: '100%', width: '100%', position: 'absolute'}}>
          <Components></Components>
        </div>

      </VaadinAppLayout>
    );
  }
}

export default App;
