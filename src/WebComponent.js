import React, { Component } from 'react';

export class WebComponent extends Component {
  constructor(tagName) {
    super();
    this.tagName = tagName;
    this.propertyBlacklist = ['children', 'theme'];
  }

  render() {
    return React.createElement(this.tagName, {
      theme: this.props.theme,
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

        this._eventListeners = {};
        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            const eventName = prop.replace(/([A-Z])/g, name => `-${name[0].toLowerCase()}`).replace('on-', '');
            this._eventListeners[eventName] = this.props[prop];
          } else if (!this.propertyBlacklist.includes(prop)) {
            element[prop] = this.props[prop];
          }
        }

        // Add the event listeners after setting the properties
        for (let eventName in this._eventListeners) {
          element.addEventListener(eventName, this._eventListeners[eventName]);
        }

        this._configRef && this._configRef(element);
      }
    }, this.props.children);
  }
}
