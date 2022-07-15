class TestComponent extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });

      // TODO: Mimic Polymer element behavior when the component is hydrated
      this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                padding: 10px;
                border: 1px solid #ccc;
                background-color: #eee;
            }
        </style>
        
        <div id="header"></div>

        <div id="overlay"></div>

        <ul id="itemlist">
            <li></li>
            <li></li>
        </ul>  
    `;
    }
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

        li.hidden = item !== undefined;

        if (item !== undefined) {
          this.renderer(li, this, { item, index });
        }
      });
    }
  }

  connectedCallback() {
    this.requestContentUpdate();
  }
}

customElements.define("test-component", TestComponent);

export { TestComponent };
