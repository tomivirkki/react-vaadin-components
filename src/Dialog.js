import Rendered from './Rendered';
import { CustomElementIs } from './CustomElement';
import('@vaadin/vaadin-dialog');

export class Dialog extends Rendered(CustomElementIs('vaadin-dialog')) {}
