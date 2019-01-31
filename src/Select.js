import Overlaid from './Overlaid';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-select';

export class Select extends Overlaid(CustomElementIs('vaadin-select')) {

  _configRef(select) {
    super._configRef(select);

    const ame = select._assignMenuElement;
    select._assignMenuElement = () => {
      const content = select._overlayElement.content;
      select._overlayElement.content = this._overlayContentContainer;
      ame.call(select);
      select._overlayElement.content = content;
    };
  }

}
