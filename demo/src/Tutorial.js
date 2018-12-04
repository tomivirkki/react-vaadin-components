import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { VaadinVerticalLayout } from 'react-vaadin-components';

export class Tutorial extends Component {

  render() {
    return <VaadinVerticalLayout theme="margin">
      <ReactMarkdown source={`
# Hello

Foo`} />
</VaadinVerticalLayout>
  }

}
