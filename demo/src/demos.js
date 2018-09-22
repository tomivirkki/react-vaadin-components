import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as components from 'react-vaadin-components';
import users from './users.js';
const scope = {React, ReactDOM, Component, users, ...components};

// Demo build helpers

/*
Grid:

Theme variants
footer
reordering and resizing
sorting and filtering

row details
Tree grid
Active item
*/

const getIndent = spaces => ' '.repeat(spaces);

const defaultIndent = 6;

const buildColumn = ({path, label, attributes, spaces} = {}) => {
  attributes = attributes || [];
  spaces = spaces || defaultIndent + 2;
  const isIndexColumn = label === '#';

  if (isIndexColumn) {
    attributes.push(`label="#"`);
    attributes.push(`renderer={({index}) => <div>{index}</div>}`);
  } else {
    if (label) {
      attributes.push(`label="${label}"`);
    }
    if (path) {
      attributes.push(`path="${path}"`);
    }
  }

  if (attributes.find(a => a.includes('renderer'))) {
    return `${getIndent(spaces)}<VaadinGridColumn ${attributes ? ('\n'+ getIndent(spaces + 2) + attributes.join('\n'+ getIndent(spaces + 2))) : ''}>${'\n' + getIndent(spaces)}</VaadinGridColumn>`;
  } else {
    return `${getIndent(spaces)}<VaadinGridColumn ${attributes ? (attributes.join(' ')) : ''}></VaadinGridColumn>`;
  }

};

const buildIndexColumn = ({spaces, attributes} = {}) => {
  attributes = attributes || [];
  return buildColumn({label: '#', attributes: ['width="50px"', 'flexGrow="0"'].concat(attributes), spaces})
}

const buildAddressColumn = ({spaces} = {}) => {
  return buildColumn({attributes: [
    "label=\"Address\"",
    "renderer={({item}) => <div>{item.address.street}, {item.address.city}</div>}"
  ], spaces});
}

const buildSelectionColumn = ({spaces, attributes} = {}) => {
  attributes = attributes || [];
  attributes.push('autoSelect="true"');
  spaces = spaces || defaultIndent + 2;
  return getIndent(spaces) + `<VaadinGridSelectionColumn ${attributes.join(' ')}></VaadinGridSelectionColumn>`;
}

const buildGrid = (attributes, content, spaces = defaultIndent) => {
  return `${getIndent(spaces)}<VaadinGrid ${attributes}>${'\n' + content.join('\n\n') + '\n'}${getIndent(spaces)}</VaadinGrid>`;
}

const buildColumnGroup = (attributes, content, spaces = defaultIndent + 2) => {
  return `${getIndent(spaces)}<VaadinGridColumnGroup ${attributes}>${'\n\n' + content.join('\n\n') + '\n\n'}${getIndent(spaces)}</VaadinGridColumnGroup>`;
}

const buildGroupedGridDemo = ({resizable, reorderable, frozenColumns} = {}) => {
  return buildGrid('items={users}'.concat(reorderable ? ' columnReorderingAllowed' : ''), [
    buildSelectionColumn({attributes: frozenColumns ? ['frozen'] : []}),
    buildIndexColumn({attributes: frozenColumns ? ['frozen'] : []}),
    buildColumn({path: 'email', attributes: ['width="calc(210px + 10%)"', 'flexGrow="0"'].concat(resizable ? ['resizable'] : [])}),
    buildColumnGroup('header={<div>Name</div>}'.concat(resizable ? ' resizable' : ''), [
      buildColumn({path: 'firstName', label: 'First', attributes: ['width="130px"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
      buildColumn({path: 'lastName', label: 'Last', attributes: ['width="130px"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
    ]),
    buildColumnGroup('header={<div>Address</div>}'.concat(resizable ? ' resizable' : ''), [
      buildColumn({path: 'address.street', attributes: ['width="25%"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
      buildColumn({path: 'address.city', attributes: ['width="15%"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
      buildColumn({path: 'address.country', spaces: defaultIndent + 4})
    ]),
    ])
}

const demos = [
  {title: 'Data Grid', scope, pages: [
    {title: 'Items and Columns',
    code: buildGrid('items={users}', [
      buildIndexColumn(),
      buildColumn({path: 'firstName'}),
      buildColumn({path: 'lastName'}),
      buildAddressColumn()
      ])
    },
    {title: 'Lazy Loading Data', render: true, code: `
      class ComponentExample extends Component {
        render() {
          return (${'\n' + buildGrid('dataProvider={this.dataProvider} size="200"', [
            buildIndexColumn({spaces: defaultIndent + 8}),
            buildColumn({path: 'firstName', spaces: defaultIndent + 8}),
            buildColumn({path: 'lastName', spaces: defaultIndent + 8}),
            buildAddressColumn({spaces: defaultIndent + 8})
            ], defaultIndent + 6)}
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
    {title: 'Selecting', code: buildGrid('items={users}', [
      buildSelectionColumn(),
      buildIndexColumn(),
      buildColumn({path: 'firstName'}),
      buildColumn({path: 'lastName'}),
      buildAddressColumn()
      ])
    },
    {title: 'Column Groups',
      code: buildGroupedGridDemo()
    },
    {title: 'Frozen Columns',
      code: buildGroupedGridDemo({frozenColumns: true})
    },
    {title: 'Reordering Columns',
      code: buildGroupedGridDemo({reorderable: true, frozenColumns: true})
    },
    {title: 'Resizing Columns',
      code: buildGroupedGridDemo({resizable: true, frozenColumns: true})
    },
  ]},
  {title: 'Button', scope, pages: [
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
  {title: 'Text Field', scope, pages: [
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
  {title: 'Checkbox', scope, pages: [
    {title: 'Checkbox', code: `
    <VaadinCheckbox>Subscribe</VaadinCheckbox>
    `}
  ]},
  {title: 'Radio Button', scope, pages: [
    {title: 'Radio Button Group', code: `
    <VaadinRadioGroup>
      <VaadinRadioButton>One</VaadinRadioButton>
      <VaadinRadioButton>Two</VaadinRadioButton>
      <VaadinRadioButton>Three</VaadinRadioButton>
    </VaadinRadioGroup>
    `}
  ]},
  {title: 'Date Picker', scope, pages: [
    {title: 'Date Picker', code: `
    <VaadinDatePicker></VaadinDatePicker>
    `}
  ]},
  {title: 'Combo Box', scope, pages: [
    {title: 'Combo Box', code: `
    <VaadinComboBox
      items={users}
      itemLabelPath="email"
      itemValuePath="email"
      style="width: 300px">
    </VaadinComboBox>
    `}
  ]}
]

function getId(title) {
  return title.toLowerCase().replace(/ /g, '-');
}

function addDemoIds(demos, parent) {
  demos.forEach(demo => {
    demo.id = getId(demo.title);
    demo.pages && addDemoIds(demo.pages, demo);
    demo.parent = parent;
  });
}

addDemoIds(demos);

demos.forEach(component => {
  component.pages.forEach(page => {
    page.scope = component.scope;
  })
});

export default demos;
