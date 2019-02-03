import ReactDOM from 'react-dom';

export default superClass => class Rendered extends superClass {

  _createRenderContainer() {
    return document.createElement('div');
  }

  render() {
    this._renderContainer = this._renderContainer || this._createRenderContainer();
    const portal = ReactDOM.createPortal(this.props.children, this._renderContainer);
    this._children = [portal];
    return super.render();
  }

  _configRef(element) {
    element.renderer = root => {
      this._rendererRoot = root;
      this._rendererRoot.appendChild(this._renderContainer);
    };

    if (this._rendererRoot) {
      this._rendererRoot.appendChild(this._renderContainer);
    }
  }

}
