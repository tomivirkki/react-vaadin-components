import React, { Component } from 'react';
import './Demo.css';
import demos from 'react-vaadin-components/demo/src/demos';

import Playground from 'component-playground';

class Demo extends Component {

  constructor() {
    super();
    this.state = {};

    window.addEventListener('hashchange', this._updateState.bind(this));
  }

  componentDidMount() {
    this._updateState();
  }

  _updateState() {
    const {componentId, demoId} = this._parseHash();
    const component = demos.find(component => component.id === componentId);
    if (component) {
      const demo = component.pages.find(demo => demo.id === demoId);
      if (this.state.demo !== demo) {
        this.setState({demo});
      }
    }
  }

  _parseHash() {
    const hash = window.location.hash.substr(2);
    const parts = hash.split('/');
    return {componentId: parts[0], demoId: parts[1]};
  }

  render() {
    if (this.state.demo) {
      return <div className="Demo">
        <h1>{this.state.demo.parent.title + ' – ' + this.state.demo.title}</h1>
        <Playground noRender={!this.state.demo.render} codeText={this.state.demo.code} scope={this.state.demo.scope}/>
      </div>
    } else {
      return <div className="Demo">Hello React</div>
    }
  }
}

export default Demo;
