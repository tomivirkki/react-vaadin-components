import Rendered from './Rendered';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-select';

export class Select extends Rendered(CustomElementIs('vaadin-select')) {

  _createOverlayContentContainer() {
    return document.createElement('vaadin-list-box');
  }

}
