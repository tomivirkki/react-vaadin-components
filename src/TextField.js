import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-area';
import '@vaadin/vaadin-text-field/vaadin-password-field';

export class TextField extends CustomElementIs('vaadin-text-field') {}

export class TextArea extends CustomElementIs('vaadin-text-area') {}

export class PasswordField extends CustomElementIs('vaadin-password-field') {}
