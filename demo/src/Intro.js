import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import stripIndent from 'strip-indent';
import Snippet from './Snippet';
import { VerticalLayout } from 'react-vaadin-components';

export class Intro extends Component {

  render() {
    return <VerticalLayout theme="margin">
      <ReactMarkdown source={stripIndent(`
        # React Vaadin Components

        [Vaadin components](https://vaadin.com/components) are a free,
        open source, high quality set of UI components. They ship with
        configurable built-in themes, have responsive mobile-first UI
        controls, they're accessible and well tested.

        This project wraps them as React components making it convenient
        to use them in React applications.

        ## Quick Start

        Install the component set
        \`\`\`sh
        npm i react-vaadin-components
        \`\`\`

        Once installed, import the components you intend to use
        \`\`\`js
        import {
          VerticalLayout,
          TextField,
          Button
        } from 'react-vaadin-components';
        \`\`\`

        Use the components in your React app.`)} />

      <Snippet noRender={true} codeText={`
        <VerticalLayout>
          <TextField
            label="Name"
            clearButtonVisible
            onValueChanged={e => this.setState({name: e.detail.value})}>
          </TextField>

          <Button
            theme="primary"
            disabled={!this.state.name}
            onClick={e => alert('Hello ' + this.state.name)}>
            Say Hello
          </Button>
        </VerticalLayout>
      `} />
    </VerticalLayout>
  }

}
