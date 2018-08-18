import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const e = React.createElement;

export default class VaadinComponent extends Component {

  constructor(tagName) {
    super();
    this.tagName = tagName;
    this.state = {};
    // Needed for now to fix an issue with missing style scopes on FireFox
    customElements.whenDefined(tagName).then(() => {
      this.setState({defined: true});
    });

    this._eventListeners = {};
  }

  render() {
    if (!this.state.defined) {
      return null;
    }
    

    return e(this.tagName, {
      theme: this.props.theme,
      class: this.props.className,
      ref: g => {
        if (!g) {
          return;
        }
        // Add listeners
        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            const eventName = prop.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).replace('on-', '');

            g.removeEventListener(eventName, this._eventListeners[eventName]);
            this._eventListeners[eventName] = this.props[prop];
            g.addEventListener(eventName, this._eventListeners[eventName]);
          }
        }

        this._configRef(g);
      }
    }, this.props.children);
  }
}