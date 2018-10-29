import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as components from 'react-vaadin-components';
import users from './users.js';
const scope = {React, ReactDOM, Component, users, ...components};

// Demo build helpers

/*
Grid:

Other convenience columns
Renderers
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

const buildColumn = ({path, header, textAlign, attributes, spaces} = {}) => {
  attributes = attributes || [];
  textAlign && attributes.push(`textAlign="${textAlign}"`)
  spaces = spaces || defaultIndent + 2;
  const isIndexColumn = header === '#';

  if (isIndexColumn) {
    attributes.push(`header="#"`);
    attributes.push(`renderer={({index}) => <div>{index}</div>}`);
  } else {
    if (header) {
      attributes.push(`header="${header}"`);
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

const buildSelectionColumn = ({spaces, attributes} = {}) => {
  attributes = attributes || [];
  attributes.push('autoSelect');
  spaces = spaces || defaultIndent + 2;
  return getIndent(spaces) + `<VaadinGridSelectionColumn ${attributes.join(' ')}></VaadinGridSelectionColumn>`;
}

const buildSortColumn = ({spaces, attributes} = {}) => {
  attributes = attributes || [];
  spaces = spaces || defaultIndent + 2;
  return getIndent(spaces) + `<VaadinGridSortColumn ${attributes.join(' ')}></VaadinGridSortColumn>`;
}

const buildGrid = (attributes, content, spaces = defaultIndent) => {
  return `${getIndent(spaces)}<VaadinGrid ${attributes}>${'\n' + content.join('\n') + '\n'}${getIndent(spaces)}</VaadinGrid>`;
}

const buildColumnGroup = (attributes, content, spaces = defaultIndent + 2) => {
  return `\n${getIndent(spaces)}<VaadinGridColumnGroup ${attributes}>${'\n' + content.join('\n') + '\n'}${getIndent(spaces)}</VaadinGridColumnGroup>`;
}

const buildGroupedGridDemo = ({resizable, reorderable, frozenColumns} = {}) => {
  return buildGrid('items={users}'.concat(reorderable ? ' columnReorderingAllowed' : ''), [
    buildSelectionColumn({attributes: frozenColumns ? ['frozen'] : []}),
    buildColumn({path: 'username', attributes: ['width="170px"', 'flexGrow="0"'].concat(frozenColumns ? ['frozen'] : [])}),
    buildColumn({path: 'email', attributes: ['width="calc(210px + 10%)"', 'flexGrow="0"'].concat(resizable ? ['resizable'] : [])}),
    buildColumnGroup('header="Name"'.concat(resizable ? ' resizable' : ''), [
      buildColumn({path: 'name.first', attributes: ['width="130px"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
      buildColumn({path: 'name.last', attributes: ['width="180px"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
    ]),
    buildColumnGroup('header="Address"'.concat(resizable ? ' resizable' : ''), [
      buildColumn({path: 'location.street', attributes: ['width="25%"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
      buildColumn({path: 'location.city', attributes: ['width="15%"', 'flexGrow="0"'], spaces: defaultIndent + 4}),
      buildColumn({path: 'location.state', spaces: defaultIndent + 4})
    ]),
    ])
}

const demos = [
  {title: 'Grid', scope, children: [
    {title: 'Items and Columns',
    code: buildGrid('items={users}', [
      buildColumn({path: 'name.first', header: 'First Name'}),
      buildColumn({path: 'name.last', header: 'Last Name'}),
      buildColumn({path: 'location.city'}),
      buildColumn({path: 'visitCount', textAlign: 'end', width: '100px', flexGrow: '0'})
      ])
    },
    {title: 'Lazy Loading Data', render: true, code: `
      class ComponentExample extends Component {
        render() {
          return (${'\n' + buildGrid('dataProvider={this.dataProvider}', [
            buildColumn({path: 'firstName', spaces: defaultIndent + 8}),
            buildColumn({path: 'lastName', spaces: defaultIndent + 8}),
            buildColumn({path: 'email', spaces: defaultIndent + 8}),
            ], defaultIndent + 6)}
          );
        }

        dataProvider(params, callback) {
          const KNOWN_DATA_SIZE = 200;
          const xhr = new XMLHttpRequest();

          xhr.onload = () => {
            const result = JSON.parse(xhr.responseText).result;
            callback(result, KNOWN_DATA_SIZE);
          }

          const index = params.page * params.childrenize;
          xhr.open('GET', 'https://demo.vaadin.com/demo-data/1.0/people?index=' + index + '&count=' + params.childrenize, true);
          xhr.send();
        }
      }

      ReactDOM.render(<ComponentExample/>, mountNode);
    `},
    {title: 'Selecting', code: buildGrid('items={users}', [
      buildSelectionColumn(),
      buildColumn({path: 'name.first', header: 'First Name'}),
      buildColumn({path: 'name.last', header: 'Last Name'}),
      buildColumn({path: 'email'})
      ])
    },
    {title: 'Sorting', code: buildGrid('items={users}', [
      buildSortColumn({attributes: ['path="name.first"', 'header="First Name"']}),
      buildSortColumn({attributes: ['path="name.last"', 'header="Last Name"']}),
      buildSortColumn({attributes: ['path="location.city"']}),
      buildColumn({path: 'email'})
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
  {title: 'Button', scope, children: [
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
  {title: 'Text Field', scope, children: [
    {title: 'Text Field', code: `
    <VaadinTextField label='First Name'></VaadinTextField>
    `},
    {title: 'Text Area', code: `
    <VaadinTextArea label="Description"></VaadinTextArea>
    `},
    {title: 'Password Field', code: `
    <VaadinPasswordField label="Password"></VaadinPasswordField>
    `},
  ]},
  {title: 'Checkbox', scope, children: [
    {title: 'Checkbox', code: `
    <VaadinCheckbox>Subscribe</VaadinCheckbox>
    `}
  ]},
  {title: 'Radio Button', scope, children: [
    {title: 'Radio Button Group', code: `
    <VaadinRadioGroup>
      <VaadinRadioButton>One</VaadinRadioButton>
      <VaadinRadioButton>Two</VaadinRadioButton>
      <VaadinRadioButton>Three</VaadinRadioButton>
    </VaadinRadioGroup>
    `}
  ]},
  {title: 'Date Picker', scope, children: [
    {title: 'Date Picker', code: `
    <VaadinDatePicker></VaadinDatePicker>
    `}
  ]},
  {title: 'Combo Box', scope, children: [
    {title: 'Combo Box', code: `
    <VaadinComboBox
      items={users}
      itemLabelPath="username"
      itemValuePath="username">
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
    demo.children && addDemoIds(demo.children, demo);
    demo.parent = parent;
  });
}

addDemoIds(demos);

demos.forEach(component => {
  component.children.forEach(page => {
    page.scope = component.scope;
  })
});

export default demos;
