import React, { Component } from 'react';
import Playground from 'component-playground';
import stripIndent from 'strip-indent';
import { scope } from './demos';
import './Snippet.css';

export default class Snippet extends Component {

  render() {
    return <Playground
      theme="neo"
      noRender={true}
      scope={scope}
      codeText={stripIndent(this.props.codeText).trim()}>
    </Playground>
  }

}
