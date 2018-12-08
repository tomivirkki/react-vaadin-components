import React, { Component } from 'react';
import Playground from 'component-playground';
import stripIndent from 'strip-indent';
import { scope } from './demos';
import './Snippet.css';

export default class Snippet extends Component {

  render() {
    const playground = <Playground
      theme="neo"
      noRender={this.props.noRender}
      scope={Object.assign(scope)}
      codeText={(this.props.noRender || this.props.codeText.indexOf('ReactDOM') > -1) ? stripIndent(this.props.codeText).trim() : stripIndent(`
  class ComponentExample extends Component {
    state = {}

    render() {
      return ${this.props.codeText.trim()};
    }
  }

  ReactDOM.render(<ComponentExample/>, mountNode);`).trim()}>
    </Playground>

    return playground;
  }

}
