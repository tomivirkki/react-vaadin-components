import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-app-layout';

export class VaadinAppLayout extends CustomElementIs('vaadin-app-layout') {

  _configRef(al) {
    // TODO: test
    // Better default for the content height
    al.shadowRoot.querySelector('[part=content]').style.height = '100%';
  }
}
