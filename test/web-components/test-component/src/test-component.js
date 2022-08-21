/* eslint-disable no-underscore-dangle */

import { MockPolymerElement } from "./mock-polymer-element.js";

class AbstractTestComponent extends MockPolymerElement {
  constructor() {
    super();

    const { template } = this.constructor;

    this._attachDom(
      template && document.createRange().createContextualFragment(template)
    );

    if (this.value) {
      this.dispatchValueChangedEvent();
    }
  }
}

class TestComponent extends AbstractTestComponent {
  static template = `
    <style>
      :host {
          --test-component-style: 1;
      }
    </style>
    
    <div id="header"></div>

    <div id="overlay"></div>

    <ul id="itemlist">
        <li></li>
        <li></li>
    </ul>

    <test-sub-component id="sub-component"></test-sub-component>
  `;

  static get _styleSheet() {
    return new CSSStyleSheet();
  }

  get overlay() {
    return this.shadowRoot.querySelector("#overlay");
  }

  get header() {
    return this.shadowRoot.querySelector("#header");
  }

  get itemlist() {
    return this.shadowRoot.querySelector("#itemlist");
  }

  get overlayRenderer() {
    return this._overlayRenderer;
  }

  set overlayRenderer(value) {
    this._overlayRenderer = value;
    this.requestContentUpdate();
  }

  get headerRenderer() {
    return this._headerRenderer;
  }

  set headerRenderer(value) {
    this._headerRenderer = value;
    this.requestContentUpdate();
  }

  get renderer() {
    return this._renderer;
  }

  set renderer(value) {
    this._renderer = value;
    this.requestContentUpdate();
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.dispatchValueChangedEvent();
  }

  dispatchValueChangedEvent() {
    this.dispatchEvent(
      new CustomEvent("value-changed", { detail: this.value })
    );
  }

  requestContentUpdate() {
    if (this.overlayRenderer) {
      this.overlayRenderer(this.overlay, this);
    }

    if (this.headerRenderer) {
      this.headerRenderer(this.header, this);
    }

    if (this.renderer && this.items) {
      // Supports max 2 items
      [...this.itemlist.children].forEach((li, index) => {
        const item = this.items[index];

        // eslint-disable-next-line no-param-reassign
        li.hidden = item !== undefined;
        this.renderer(li, this, { item, index });
      });
    }
  }

  connectedCallback() {
    this.requestContentUpdate();
  }
}

customElements.define("test-component", TestComponent);

export { TestComponent, AbstractTestComponent };

class TestSubComponent extends AbstractTestComponent {
  static template = `
    <style>
      :host {
          --test-sub-component-style: 1;
      }
    </style>
  `;
}

customElements.define("test-sub-component", TestSubComponent);
