import Overlaid from './Overlaid';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-dialog';

export class Dialog extends Overlaid(CustomElementIs('vaadin-dialog')) {}
