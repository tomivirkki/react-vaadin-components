> **Warning**
> **This project is deprecated** in favor of [vaadin/react-components](https://github.com/vaadin/react-components)
> 
> The React wrappers imported from `@hilla/react-components` don't (at least yet) support server-side rendering, but they can still be used in a Next.js project as a dynamic import with [SSR disabled](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr):
> ```js
> import dynamic from "next/dynamic";
>
> export const Button = dynamic(
>   () => import("@hilla/react-components/Button.js").then((mod) => mod.Button),
>   {
>     ssr: false,
>   }
> );
> ```
> 
> To enable Lumo theme in the app:
>
> ```js
> if (typeof window !== "undefined") {
>   (async () => {
>     const allImports = await import(
>       "@vaadin/vaadin-lumo-styles/all-imports.js"
>     );
>
>     const style = document.createElement("style");
>     Object.values(allImports).forEach((css) => {
>       style.append(document.createTextNode(css.toString()));
>     });
>     document.head.append(style);
>   })();
> }
> ```


# React Vaadin Components

React Vaadin Components is a set of React compatible wrappers for [Vaadin components](https://vaadin.com/docs/latest/components).

The wrappers are server side renderable and can be used with frameworks such as Next.js and Gatsby.

**[Live Demo](https://react-vaadin-components.vercel.app/)** ([Demo source](https://github.com/tomivirkki/react-vaadin-components/tree/master/examples/next))

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
  TextField,
  Button,
  Notification
} from 'react-vaadin-components';

...

const [name, setName] = useState("");

...
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
```
