import Overlaid from './Overlaid';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-notification';

export class Notification extends Overlaid(CustomElementIs('vaadin-notification')) {}
