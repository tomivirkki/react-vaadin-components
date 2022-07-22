/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
/* istanbul ignore file */
export class MockPolymerElement extends HTMLElement {
  _attachDom(dom) {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.append(dom);
    }
  }
}

globalThis.MockPolymerImport = Promise.resolve({
  PolymerElement: MockPolymerElement,
});
