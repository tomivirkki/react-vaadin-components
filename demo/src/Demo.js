import React, { Component } from 'react';
import './Demo.css';
import demos from './demos';
import Playground from 'component-playground';
import ReactMarkdown from 'react-markdown';
import * as intro from 'react-vaadin-components/README.md';

class Demo extends Component {

  constructor() {
    super();
    this.state = {};

    window.addEventListener('hashchange', this._updateState.bind(this));

    fetch(intro)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          introText: text
        })
      })
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
    if (this.state.demo) {
      return <div className="Demo">
        <h1>{this.state.demo.parent.title + ' – ' + this.state.demo.title}</h1>
        <Playground noRender={!this.state.demo.render} codeText={this.state.demo.code} scope={this.state.demo.scope}/>
      </div>
    } else {
      return <div className="Demo">
        <ReactMarkdown source={this.state.introText} />
      </div>
    }
  }
}

export default Demo;
