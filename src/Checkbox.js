import { CustomElementIs } from './CustomElement';
import('@vaadin/vaadin-checkbox');
import('@vaadin/vaadin-checkbox/vaadin-checkbox-group');

export class Checkbox extends CustomElementIs('vaadin-checkbox') {}

export class CheckboxGroup extends CustomElementIs('vaadin-checkbox-group') {}
