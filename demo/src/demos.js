import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  VaadinGrid,
  VaadinGridColumn,
  VaadinButton,
  VaadinTextField,
  VaadinTextArea,
  VaadinPasswordField,
  VaadinCheckbox,
  VaadinRadioButton,
  VaadinRadioGroup
} from 'react-vaadin-components';
import users from './users.js';

const _commonScope = {React, ReactDOM, Component, users};

const demos = [
  {title: 'Grid', scope: {VaadinGrid, VaadinGridColumn, React, ReactDOM, Component, users}, pages: [
    {title: 'Items and Columns',
    description: `The "items" property accepts an array of objects, each of which represent a row in the grid.
    In this demo an item is a user object with properties such as {firstName: "Tomi", address: { city: "Turku" } ...}`,
    code: `
    <VaadinGrid items={users}>

      <VaadinGridColumn
        width="50px"
        flexGrow="0"
        header={<div>#</div>}
        renderer={({index}) => <div>{index}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn
        header={<div>First Name</div>}
        renderer={({item}) => <div>{item.firstName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn
        header={<div>Last Name</div>}
        renderer={({item}) => <div>{item.lastName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn width="150px"
        header={<div>Address</div>}
        renderer={({item}) => <div style={{whiteSpace: 'normal'}}>{item.address.street}, {item.address.city}</div>}>
      </VaadinGridColumn>

    </VaadinGrid>
    `},
    {title: 'Data as Array', code: `
    <VaadinGrid items={users} theme="row-stripes">

      <VaadinGridColumn
        header={<div>First Name</div>}
        renderer={({item}) => <div>{item.firstName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn
        header={<div>Last Name</div>}
        renderer={({item}) => <div>{item.lastName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn width="150px"
        header={<div>Address</div>}
        renderer={({item}) => <div style={{whiteSpace: 'normal'}}>{item.address.street}, {item.address.city}</div>}>
      </VaadinGridColumn>

    </VaadinGrid>
    `},
    {title: 'Lazy Data Loading', render: true, code: `
      class ComponentExample extends Component {
        render() {
          return (
            <VaadinGrid dataProvider={this.dataProvider} size="200">

              <VaadinGridColumn
                header={<div>First Name</div>}
                renderer={({item}) => <div>{item.firstName}</div>}>
              </VaadinGridColumn>

              <VaadinGridColumn
                header={<div>Last Name</div>}
                renderer={({item}) => <div>{item.lastName}</div>}>
              </VaadinGridColumn>

              <VaadinGridColumn width="150px"
                header={<div>Address</div>}
                renderer={({item}) => <div style={{whiteSpace: 'normal'}}>{item.address.street}, {item.address.city}</div>}>
              </VaadinGridColumn>

            </VaadinGrid>
          );
        }

        dataProvider(params, callback) {
          const xhr = new XMLHttpRequest();
          xhr.onload = () => callback(JSON.parse(xhr.responseText).result);

          const index = params.page * params.pageSize;
          xhr.open('GET', 'https://demo.vaadin.com/demo-data/1.0/people?index=' + index + '&count=' + params.pageSize, true);
          xhr.send();
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `},
    {title: 'Selecting', code: `
    <VaadinGrid items={users}
      onActiveItemChanged={e => this.setState({selectedItem: e.detail.value})}
      selectedItems={this.state ? [this.state.selectedItem] : []}>

      <VaadinGridColumn
        header={<div>First Name</div>}
        renderer={({item}) => <div>{item.firstName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn
        header={<div>Last Name</div>}
        renderer={({item}) => <div>{item.lastName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn width="150px"
        header={<div>Address</div>}
        renderer={({item}) => <div style={{whiteSpace: 'normal'}}>{item.address.street}, {item.address.city}</div>}>
      </VaadinGridColumn>

    </VaadinGrid>
    `},
    {title: 'Sorting and Filtering', code: `
    <VaadinGrid items={users}>

      <VaadinGridColumn
        header={<div>First Name</div>}
        renderer={({item}) => <div>{item.firstName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn
        header={<div>Last Name</div>}
        renderer={({item}) => <div>{item.lastName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn width="150px"
        header={<div>Address</div>}
        renderer={({item}) => <div style={{whiteSpace: 'normal'}}>{item.address.street}, {item.address.city}</div>}>
      </VaadinGridColumn>

    </VaadinGrid>
    `},
    {title: 'Row Details', code: `
    <VaadinGrid items={[1,2,3,4]} heightByRows="true">

      <VaadinGridColumn
        header={<div>Index</div>}
        renderer={({item}) => <div>{item}</div>}>
      </VaadinGridColumn>

    </VaadinGrid>
    `},
  ]},
  {title: 'Button', scope: Object.assign({VaadinButton}, _commonScope), pages: [
    {title: 'Basic Button', code: `
    <VaadinButton onClick={console.log}>Click Me</VaadinButton>
    `},
    {title: 'Theme Variants', code: `
    <div>
      <VaadinButton onClick={console.log}>Click Me</VaadinButton>

      <VaadinButton onClick={console.log} theme="primary">Click Me</VaadinButton>

      <VaadinButton onClick={console.log} theme="error">Click Me</VaadinButton>

      <VaadinButton onClick={console.log} theme="success">Click Me</VaadinButton>

      <VaadinButton onClick={console.log} theme="small">Click Me</VaadinButton>
    </div>
    `}
  ]},
  {title: 'Text Field', scope: Object.assign({VaadinTextField, VaadinTextArea, VaadinPasswordField}, _commonScope), pages: [
    {title: 'Text Field', code: `
    <VaadinTextField label="First Name"></VaadinTextField>
    `},
    {title: 'Text Area', code: `
    <VaadinTextArea label="Description"></VaadinTextArea>
    `},
    {title: 'Password Field', code: `
    <VaadinPasswordField label="Password"></VaadinPasswordField>
    `},
  ]},
  {title: 'Checkbox', scope: Object.assign({VaadinCheckbox}, _commonScope), pages: [
    {title: 'Checkbox', code: `
    <VaadinCheckbox>Subscribe</VaadinCheckbox>
    `}
  ]},
  {title: 'Radio Button', scope: Object.assign({VaadinRadioButton, VaadinRadioGroup}, _commonScope), pages: [
    {title: 'Radio Button Group', code: `
    <VaadinRadioGroup>
      <VaadinRadioButton>One</VaadinRadioButton>
      <VaadinRadioButton>Two</VaadinRadioButton>
      <VaadinRadioButton>Three</VaadinRadioButton>
    </VaadinRadioGroup>
    `}
  ]}
]

function getId(title) {
  return title.toLowerCase().replace(/ /g, '-');
}

function addDemoIds(demos) {
  demos.forEach(demo => {
    demo.id = getId(demo.title);
    demo.pages && addDemoIds(demo.pages);
  });
}

addDemoIds(demos);

export default demos;
