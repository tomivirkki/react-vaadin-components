import Rendered from './Rendered';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-notification';

export class Notification extends Rendered(CustomElementIs('vaadin-notification')) {}
