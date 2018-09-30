# React Vaadin Components

[Vaadin components](https://vaadin.com/components) are a free, open source, high quality set of UI components. They ship with configurable built-in themes, have responsive mobile-first UI controls, they're accessible and well tested.

Vaadin components are built as Web Components and therefore have some known limitations when it comes to using them in React applications as such. This project wraps them as React Components so that it's more straightforward to use them with React.

The project is still experimental.

## Quick start

```console
npm install --save react-vaadin-components
```

```js
import { VaadinGrid, VaadinGridColumn, VaadinGridSortColumn, VaadinGridSelectionColumn } from react-vaadin-components;

...
<VaadinGrid items={this.state.users}>
  <VaadinGridSelectionColumn autoSelect></VaadinGridSelectionColumn>
  <VaadinGridSortColumn header="First Name" path="name.first"></VaadinGridSortColumn>
  <VaadinGridSortColumn header="Last Name" path="name.last"></VaadinGridSortColumn>
  <VaadinGridColumn path="location.city"></VaadinGridColumn>
  <VaadinGridColumn textAlign="end" path="visitCount"></VaadinGridColumn>
</VaadinGrid>
```

