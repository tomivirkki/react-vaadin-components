import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-form-layout';
import '@vaadin/vaadin-form-layout/vaadin-form-item';

export class FormLayout extends CustomElementIs('vaadin-form-layout') {}

export class FormItem extends CustomElementIs('vaadin-form-item') {
  constructor() {
    super();
    this.attributeWhitelist = this.attributeWhitelist.concat('colspan');
  }
}
