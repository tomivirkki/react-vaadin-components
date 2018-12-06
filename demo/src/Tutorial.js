import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import stripIndent from 'strip-indent';
import { VerticalLayout } from 'react-vaadin-components';

export class Tutorial extends Component {

  render() {
    return <VerticalLayout theme="margin">
      <ReactMarkdown source={stripIndent(`
        ## Component APIs and Demos

        Each component has a

        ## Binding Events and Properties

        In order to listen to

        ## Wrapping Other Custom Elements

        Foo bar baz quz

        ## Minimizing the Bundle Size

        Foo bar baz quz
      `).trim()} />
    </VerticalLayout>
  }

}
