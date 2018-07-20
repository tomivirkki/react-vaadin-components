# React-Vaadin

[Vaadin components](https://vaadin.com/components) are a free, open source, high quality set of UI widgets. They ship with two configurable built-in themes, have responsive mobile-first controls, they're accessible and well tested...

They are, however, built as Web Components and therefor have some known limitations when it comes to using them in React applications. This project wraps them as React Components so that they're easy to use with React.

## Quick start

`npm install --save react-vaadin`

```
import { VaadinGrid, VaadinGridColumn } from react-vaadin;

...

<VaadinGrid items={[this.state.items]}>

  <VaadinGridColumn width="100px" flexGrow="0"
    header={<div>Name</div>}
    renderer={item => <div>{item.name}</div>}>
  </VaadinGridColumn>

  <VaadinGridColumn
    header={<div>Item Index</div>}
    renderer={item => <div>{item.itemIndex}</div>}>
  </VaadinGridColumn>

</VaadinGrid>
```


