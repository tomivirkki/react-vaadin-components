import React, { Component } from 'react';
import './custom-elements-polyfills';

export class CustomElement extends Component {
  constructor() {
    super();
    this.state = {};
    this.propertyBlacklist = ['children', 'tagName'];
    this._forceUpdate = this._forceUpdate.bind(this);
  }

  _forceUpdate() {
    this.forceUpdate();
  }

  render() {
    const attributes = {};
    Object.keys(this.props)
      .filter(key => key.indexOf('aria-') === 0 || key === 'theme' || key === 'style')
      .forEach(key => attributes[key] = this.props[key]);

    return React.createElement(this.tagName || this.props.tagName, Object.assign(attributes, {
      ref: element => {
        if (this._element) {
          // Remove existing event listeners
          for (let eventName in this._eventListeners) {
            this._element.removeEventListener(eventName, this._eventListeners[eventName]);
          }
        }
        this._element = element;

        if (!element) {
          return;
        }

        // Hide the element if the custom element is still loading to avoid FOUC
        if (!window.customElements) {
          window.addEventListener('WebComponentsReady', this._forceUpdate);
          element.style.visibility = 'hidden';
        } else if (!window.customElements.get(element.localName)) {
          window.customElements.whenDefined(element.localName).then(this._forceUpdate);
          element.style.visibility = 'hidden';
        } else {
          element.style.visibility = '';
        }

        this._eventListeners = {};
        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            const eventName = prop.replace(/([A-Z])/g, name => `-${name[0].toLowerCase()}`).replace('on-', '');
            this._eventListeners[eventName] = this.props[prop];
          } else if (this.propertyBlacklist.indexOf(prop) === -1 && !attributes.hasOwnProperty(prop)) {
            element[prop] = this.props[prop];
          }
        }

        // Add the event listeners after setting the properties
        for (let eventName in this._eventListeners) {
          element.addEventListener(eventName, this._eventListeners[eventName]);
        }

        this._configRef && this._configRef(element);
      }
    }), this._children || this.props.children);
  }
}

export const CustomElementIs = tagName => class Clazz extends CustomElement {
  constructor() {
    super();
    this.tagName = tagName;
  }
}
