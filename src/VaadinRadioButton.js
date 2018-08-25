import VaadinComponent from './VaadinComponent';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

export class VaadinRadioButton extends VaadinComponent {
  constructor() {
    super('vaadin-radio-button');
  }
}

export class VaadinRadioGroup extends VaadinComponent {
  constructor() {
    super('vaadin-radio-group');
  }
}
