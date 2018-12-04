import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { VerticalLayout } from 'react-vaadin-components';

export class Tutorial extends Component {

  render() {
    return <VerticalLayout theme="margin">
      <ReactMarkdown source={`
# Hello

Foo`} />
</VerticalLayout>
  }

}
