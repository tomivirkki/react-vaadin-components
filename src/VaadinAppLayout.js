import { WebComponent } from './WebComponent';
import '@vaadin/vaadin-app-layout';

export class VaadinAppLayout extends WebComponent {
  constructor() {
    super('vaadin-app-layout');
  }

  _configRef(al) {
    // TODO: test
    // Better default for the content height
    al.shadowRoot.querySelector('[part=content]').style.height = '100%';
  }
}
