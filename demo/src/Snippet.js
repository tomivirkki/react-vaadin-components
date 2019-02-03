import React, { Component } from 'react';
import Playground from 'component-playground';
import stripIndent from 'strip-indent';
import { scope } from './demos';
import './Snippet.css';

export default class Snippet extends Component {

  render() {

    const codeText = this.props.codeText;
    const usesState = codeText.indexOf('this.state') > -1;
    const isWrapped = codeText.indexOf('ReactDOM') > -1;

    const showFullSource = isWrapped || usesState || !this.props.noRender;

    const playground = <Playground
      theme="neo"
      noRender={!showFullSource}
      scope={Object.assign(scope)}
      codeText={!showFullSource || isWrapped ? stripIndent(this.props.codeText).trim() : stripIndent(`
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
