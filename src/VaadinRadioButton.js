import { WebComponent } from './WebComponent';
import '@vaadin/vaadin-radio-button';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';

export class VaadinRadioButton extends WebComponent {
  constructor() {
    super('vaadin-radio-button');
  }
}

export class VaadinRadioGroup extends WebComponent {
  constructor() {
    super('vaadin-radio-group');
  }
}
