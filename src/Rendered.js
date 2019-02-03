import ReactDOM from 'react-dom';

export default superClass => class Rendered extends superClass {

  _createOverlayContentContainer() {
    return document.createElement('div');
  }

  render() {
    this._overlayContentContainer = this._overlayContentContainer || this._createOverlayContentContainer();
    const portal = ReactDOM.createPortal(this.props.children, this._overlayContentContainer);
    this._children = [portal];
    return super.render();
  }

  _configRef(element) {
    element.renderer = root => {
      this._rendererRoot = root;
      this._rendererRoot.appendChild(this._overlayContentContainer);
    };

    if (this._rendererRoot) {
      this._rendererRoot.appendChild(this._overlayContentContainer);
    }
  }

}
