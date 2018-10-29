import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-password-field';

export class VaadinTextField extends CustomElementIs('vaadin-text-field') {}

export class VaadinTextArea extends CustomElementIs('vaadin-text-area') {}

export class VaadinPasswordField extends CustomElementIs('vaadin-password-field') {}
