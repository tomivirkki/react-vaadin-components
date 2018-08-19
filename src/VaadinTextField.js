import VaadinComponent from './VaadinComponent';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-password-field';

export class VaadinTextField extends VaadinComponent {
  constructor() {
    super('vaadin-text-field');
  }
}

export class VaadinTextArea extends VaadinComponent {
  constructor() {
    super('vaadin-text-area');
  }
}

export class VaadinPasswordField extends VaadinComponent {
  constructor() {
    super('vaadin-password-field');
  }
}
