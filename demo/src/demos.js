import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as vaadinComponents from 'react-vaadin-components';
import users from './users.js';
export const scope = {React, ReactDOM, Component, users, ...vaadinComponents};

const components = [
  {
    name: 'Button',
    category: 'visualization & interaction',
    description: `Button is a typical UI control for communicating a user action.`,
    demo: '<Button>Button</Button>',
    featuresDescription: `
      The \`Button\` element works the same as the native \`<button>\` element,
      but offers better styling support and accessibility features.

      In addition to clicking, you can focus the button using the keyboard, and activate it with the Enter and Space keys.
      To add a listener for the resulting \`click\` event, use the typical \`onClick\` event binding.

      The built-in Lumo theme provides multiple variants for buttons of differet sizes and appearance.
      See more theme variant examples [here](https://vaadin.com/components/vaadin-button/html-examples/button-theme-variants-demos).
    `,
    featuresDemo: `
      <VerticalLayout>
        <TextField label="Activity Name" placeholder="eg. CIS 42" value={this.state.name} />
        <DatePicker label="Activity Date" value={this.state.date}></DatePicker>

        <HorizontalLayout theme="spacing">
          <Button theme="error tertiary" onClick={() => this.setState({name: '', date: ''})}>Reset</Button>

          <Button theme="primary">Submit</Button>
        </HorizontalLayout>
      </VerticalLayout>
      `
  },
  {
    name: 'TextField',
    category: 'form inputs',
    description: `TextField specifies a text input control typically used in forms.`,
    demo: '<TextField label="First Name"></TextField>',
    featuresDescription: `
      TextField description
    `,
    featuresDemo: `
      <VerticalLayout>
        <TextField label="User name"></TextField>
        <PasswordField label="Password"></PasswordField>
        <TextArea label="Description"></TextArea>
      </VerticalLayout>`
  }
].map(component => {
  component.id = component.name
    .replace(/([A-Z])/g, m => '-' + m.toLowerCase())
    .substr(1);
  return component;
});

export default components;
