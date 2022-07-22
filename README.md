# React Vaadin Components

React Vaadin Components is a set of React compatible wrappers for [Vaadin components](https://vaadin.com/docs/latest/components).

The components support server side rendering and can be used with frameworks such as Next.js and Gatsby.

## Quick start

Install the component set

```sh
npm i react-vaadin-components
```

Once installed, import the and use the components in your React app

```jsx
import 'react-vaadin-components/dist/css/core.css'

...

import {
  VerticalLayout,
  TextField,
  Button,
  Notificaation
} from 'react-vaadin-components';

...

const [name, setName] = useState("");

...

<VerticalLayout>
  <TextField
    label="Name"
    clearButtonVisible
    onValueChanged={e => setName(e.detail.value)}>
  </TextField>

  <Button
    theme="primary"
    disabled={!name}
    onClick={e => Notification.show(`Hello ${name}`)}>
    Say Hello
  </Button>
</VerticalLayout>
```
