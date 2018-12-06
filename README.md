# React Vaadin Components

[Vaadin components](https://vaadin.com/components) are a free, open source, high quality set of UI components. They ship with configurable built-in themes, have responsive mobile-first UI controls, they're accessible and well tested.

## Quick start

Install the component set
```sh
npm i react-vaadin-components
```

Once installed, import the and use the components in your React app
```js
import {
  VerticalLayout,
  TextField,
  Button
} from 'react-vaadin-components';

...

<VerticalLayout>
  <TextField
    label="Name"
    clearButtonVisible
    onValueChanged={e => this.setState({name: e.detail.value})}>
  </TextField>

  <Button
    theme="primary"
    onClick={e => this.state && alert('Hello ' + this.state.name)}>
    Say Hello
  </Button>
</VerticalLayout>
```

