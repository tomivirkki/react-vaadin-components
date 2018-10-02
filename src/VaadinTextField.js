import { WebComponent } from './WebComponent';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-password-field';

export class VaadinTextField extends WebComponent {
  constructor() {
    super('vaadin-text-field');
  }
}

export class VaadinTextArea extends WebComponent {
  constructor() {
    super('vaadin-text-area');
  }
}

export class VaadinPasswordField extends WebComponent {
  constructor() {
    super('vaadin-password-field');
  }
}
