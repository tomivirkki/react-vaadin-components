/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
export class MockPolymerElement extends HTMLElement {
  _attachDom() {
    throw Error("Should be overridden");
  }
}

globalThis.MockPolymerImport = Promise.resolve({
  PolymerElement: MockPolymerElement,
});
