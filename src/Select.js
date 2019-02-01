import Overlaid from './Overlaid';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-select';

export class Select extends Overlaid(CustomElementIs('vaadin-select')) {

  _createOverlayContentContainer() {
    return document.createElement('vaadin-list-box');
  }

}
