import ReactDOM from 'react-dom';
import { CustomElementIs } from './CustomElement';
import '@vaadin/vaadin-notification';

export class Notification extends CustomElementIs('vaadin-notification') {

  _configRef(notification) {
    notification.renderer = root => {
      if (!this.state.portals.length) {
        this._overlayContentContainer = document.createElement('div');
        const portal = ReactDOM.createPortal(this.props.children, this._overlayContentContainer);
        this.setState({portals: [portal]});
      }
      this._rendererRoot = root;
      this._rendererRoot.appendChild(this._overlayContentContainer);
    };

    if (this._rendererRoot && this._overlayContentContainer) {
      this._rendererRoot.appendChild(this._overlayContentContainer);
    }
  }

}
