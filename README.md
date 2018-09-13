# React-Vaadin-Components

[Vaadin components](https://vaadin.com/components) are a free, open source, high quality set of UI widgets. They ship with two configurable built-in themes, have responsive mobile-first controls, they're accessible and well tested...

They are, however, built as Web Components and therefor have some known limitations when it comes to using them in React applications. This project wraps them as React Components so that they're easy to use with React.

## Quick start

`npm install --save react-vaadin-components`

```
import { VaadinGrid, VaadinGridColumn } from react-vaadin-components;

...

<VaadinGrid items={[this.state.items]}>
  <VaadinGridColumn width="100px" flexGrow="0" path="name"></VaadinGridColumn>
  <VaadinGridColumn label="Index" path="itemIndex"></VaadinGridColumn>
</VaadinGrid>
```


