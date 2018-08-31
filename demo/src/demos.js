import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  VaadinGrid,
  VaadinGridColumn,
  VaadinGridColumnGroup,
  VaadinGridSelectionColumn,
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

const getIndent = spaces => Array.from(new Array(spaces)).map(_ => '').join(' ') + ' ';

const defaultIndent = 6;

const buildColumn = ({path, label, attributes, spaces} = {}) => {
  attributes = attributes || [];
  spaces = spaces || defaultIndent + 2;
  const isIndexColumn = label == '#';

  if (isIndexColumn) {
    attributes.push(`header={<div>#</div>}`);
    attributes.push(`renderer={({index}) => <div>{index}</div>}`);
  } else {
    // Replace once label and path are available for column
    if (!label && path) {
      label = path
        .substr(path.lastIndexOf('.') + 1)
        .replace(/([A-Z])/g, '-$1').toLowerCase()
        .replace(/-/, ' ')
        .replace(/\w\S*/g, str => str.charAt(0).toUpperCase() + str.substr(1));
    }
    if (label) {
      attributes.push(`header={<div>${label}</div>}`);
    }
    if (path) {
      attributes.push(`renderer={({item}) => <div>{item.${path}}</div>}`);
    }
  }

  return `${getIndent(spaces)}<VaadinGridColumn ${attributes ? ('\n'+ getIndent(spaces + 2) + attributes.join('\n'+ getIndent(spaces + 2))) : ''}>${'\n' + getIndent(spaces)}</VaadinGridColumn>`;
};

const buildIndexColumn = ({spaces, attributes} = {}) => {
  attributes = attributes || [];
  return buildColumn({label: '#', attributes: ['width="50px"', 'flexGrow="0"'].concat(attributes), spaces})
}

const buildAddressColumn = ({spaces} = {}) => {
  return buildColumn({attributes: [
    "header={<div>Address</div>}",
    "renderer={({item}) => <div style={{whiteSpace: 'normal'}}>{item.address.street}, {item.address.city}</div>}"
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
  return `${getIndent(spaces)}<VaadinGridColumnGroup ${attributes}>${'\n' + content.join('\n\n') + '\n'}${getIndent(spaces)}</VaadinGridColumnGroup>`;
}

const demos = [
  {title: 'Grid', scope: {VaadinGrid, VaadinGridColumn, VaadinGridColumnGroup, VaadinGridSelectionColumn, React, ReactDOM, Component, users}, pages: [
    {title: 'Items and Columns',
    code: buildGrid('items={users}', [
      buildIndexColumn(),
      buildColumn({path: 'firstName'}),
      buildColumn({path: 'lastName'}),
      buildAddressColumn()
      ])
    },
    {title: 'Lazy Data Loading', render: true, code: `
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
    {title: 'Column Groups', code: buildGrid('items={users}', [
      buildSelectionColumn(),
      buildIndexColumn(),
      buildColumnGroup('header={<div>Name</div>}', [
        buildColumn({path: 'firstName', label: 'First', spaces: defaultIndent + 4}),
        buildColumn({path: 'lastName', label: 'Last', spaces: defaultIndent + 4}),
      ]),
      buildColumnGroup('header={<div>Address</div>}', [
        buildColumn({path: 'address.street', spaces: defaultIndent + 4}),
        buildColumn({path: 'address.city', spaces: defaultIndent + 4}),
        buildColumn({path: 'address.country', spaces: defaultIndent + 4})
      ]),
      ])
    },
    {title: 'Frozen Columns', code: buildGrid('items={users}', [
      buildSelectionColumn({attributes: ['frozen']}),
      buildIndexColumn({attributes: ['frozen']}),
      buildColumnGroup('header={<div>Name</div>}', [
        buildColumn({path: 'firstName', label: 'First', spaces: defaultIndent + 4}),
        buildColumn({path: 'lastName', label: 'Last', spaces: defaultIndent + 4}),
      ]),
      buildColumnGroup('header={<div>Address</div>}', [
        buildColumn({path: 'address.street', spaces: defaultIndent + 4}),
        buildColumn({path: 'address.city', spaces: defaultIndent + 4}),
        buildColumn({path: 'address.country', spaces: defaultIndent + 4})
      ]),
      ])
    },
    {title: 'Reordering and Resizing Columns', code: buildGrid('items={users} columnReorderingAllowed', [
      buildSelectionColumn({attributes: ['frozen']}),
      buildIndexColumn({attributes: ['frozen']}),
      buildColumnGroup('header={<div>Name</div>} resizable', [
        buildColumn({path: 'firstName', label: 'First', spaces: defaultIndent + 4}),
        buildColumn({path: 'lastName', label: 'Last', spaces: defaultIndent + 4}),
      ]),
      buildColumnGroup('header={<div>Address</div>} resizable', [
        buildColumn({path: 'address.street', spaces: defaultIndent + 4}),
        buildColumn({path: 'address.city', spaces: defaultIndent + 4}),
        buildColumn({path: 'address.country', spaces: defaultIndent + 4})
      ]),
      ])
    },
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
    {title: 'Active Item', code: `
    <VaadinGrid items={users}
      onActiveItemChanged={e => this.setState({selectedItem: e.detail.value})}
      selectedItems={this.state ? [this.state.selectedItem] : []}>

      <VaadinGridColumn
        header={<div>First</div>}
        renderer={({item}) => <div>{item.firstName}</div>}>
      </VaadinGridColumn>

      <VaadinGridColumn
        header={<div>Last</div>}
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
