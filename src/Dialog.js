import ReactDOM from 'react-dom';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-dialog';

export class Dialog extends CustomElementIs('vaadin-dialog') {

  _configRef(dialog) {
    dialog.renderer = root => {
      if (!this.state.portals.length) {
        this._overlayContentContainer = document.createDocumentFragment();
        const portal = ReactDOM.createPortal(this.props.children, this._overlayContentContainer);
        this.setState({portals: [portal]});
      }
      root.appendChild(this._overlayContentContainer);
    };
  }

}
