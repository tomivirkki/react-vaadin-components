import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Snippet from './Snippet';
import stripIndent from 'strip-indent';
import { VerticalLayout } from 'react-vaadin-components';
import '@github/details-menu-element';

export class Tutorial extends Component {

  render() {
    return <VerticalLayout theme="margin">
      <ReactMarkdown source={stripIndent(`
        ## Component APIs and Demos

        Each component page under "Components" has links to the corresponding component API docs and Demos hosted
        on the Vaadin website. Note however, that _the documentation on Vaadin website concerns the underlying Custom Element,
        not the wrapper component exported by this library_.
      `)} />
      <ReactMarkdown source={stripIndent(`
        ## Binding Events and Properties

        In order to get notified of component property changes, the events can be listened with
        \`on{PropertyName}Changed\` binding. This works under the assumption that the property is marked
        with \`notify\` in the component's API docs.
      `)} />
      <Snippet noRender={true} codeText={`
        <TextField
          maxlength="10"
          clearButtonVisible
          label={\`\${this.state && this.state.valueLength || 0}/10 characters\`}
          onValueChanged={e => this.setState({valueLength: e.detail.value.length})} />
      `} />
      <ReactMarkdown source={stripIndent(`
        Under the hood, when a \`property\` (marked with \`notify\`) changes, the component actually dispatches
        an event with name "property-changed". In above case of the \`TextField\`'s \`value\` property, when it's changed,
        the underlying Custom Element will emit a "value-changed" event and by convention \`onValueChanged\`
        assigns a listener for it.

        Respectively, an event with name "upload-success" (even if it doesn't directly communicate a change to
        a specific property) can be bound to with \`onUploadSuccess={...}\`.

        Properties can be bound to the component wrappers normally by assagning the values using React's conventions.
      `)} />
      <Snippet noRender={true} codeText={`
        <ComboBox
          label="My favorite fruit"
          items={['Apple', 'Banana', 'Orange']} />
      `} />

      <ReactMarkdown source={stripIndent(`
        Note that some of the Custom Element examples hosted on Vaadin's website use attribute deserialization
        to assign primitive proeprty values, mainly for the sake of convenience.
        The names defined in the attributes in "dash-case" are internally transformed as "camelCase" and the
        string value of the attribute is deserialized as the value for the corresponding property.
        This isn't necessary in React, so ignore these bindings and stick to using the property names as they are.
      `)} />

      <ReactMarkdown source={stripIndent(`
        ## Wrapping Other Custom Elements

        The library exports a module named \`CustomElement\` which can be used to wrap any Custom Element
        as a React component.
        For example, to wrap a Custom Element called \`<details-menu>\`, the following does the job
      `)} />
      <Snippet noRender={true} codeText={`
        <details>
          <summary>Preferred robot: <span data-menu-button>None</span></summary>
          <details-menu>
            <ul>
              <li><button type="button" role="menuitem" data-menu-button-text="">Hubot</button></li>
              <li><button type="button" role="menuitem" data-menu-button-text="">Bender</button></li>
              <li><button type="button" role="menuitem" data-menu-button-text="">BB-8</button></li>
            </ul>
          </details-menu>
        </details>
      `} />

      <ReactMarkdown source={stripIndent(`
        Note that this will only create the wrapper and an element instance with the given tag name,
        but the custom element still needs to be explicilty imported with...

        \`import '@github/details-menu-element'\`

        ...in order to get the element upgraded to a functioning Custom Element.

        Most of the components in this library are merely shorthands for what's described above.
      `)} />
    </VerticalLayout>
  }

}
