# React Vaadin Components

[Vaadin components](https://vaadin.com/components) are a free, open source, high quality set of UI components. They ship with configurable built-in themes, have responsive mobile-first UI controls, they're accessible and well tested.

Vaadin components are built as Web Components and therefore have some known limitations when it comes to using them in React applications as such. This project wraps them as React Components so that it's more straightforward to use them with React.

The project is still experimental.

## Quick start

```sh
yarn add react-vaadin-components
```

```js
import {
  Grid,
  GridColumn,
  GridSortColumn,
  GridSelectionColumn
} from 'react-vaadin-components';

...

fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
  .then(res => res.json())
  .then(json => this.setState({
    users: json.result
  }));

...

<Grid items={this.state.users}>
  <GridSelectionColumn autoSelect></GridSelectionColumn>
  <GridSortColumn path="firstName"></GridSortColumn>
  <GridSortColumn path="firstName"></GridSortColumn>
  <GridColumn path="address.city"></GridColumn>
</Grid>
```

