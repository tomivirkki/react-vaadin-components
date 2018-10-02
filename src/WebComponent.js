import React, { Component } from 'react';

export default class WebComponent extends Component {
  constructor(tagName) {
    super();
    this.tagName = tagName;

    this._eventListeners = {};
    this._properties = {};
    this.propertyBlacklist = ['children', 'theme'];
  }

  render() {
    return React.createElement(this.tagName, {
      theme: this.props.theme,
      ref: element => {
        if (!element) {
          return;
        }

        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            // Remove existing event listener
            const eventName = prop.replace(/([A-Z])/g, name => `-${name[0].toLowerCase()}`).replace('on-', '');
            element.removeEventListener(eventName, this._eventListeners[eventName]);
            this._eventListeners[eventName] = this.props[prop];
          } else if (!this.propertyBlacklist.includes(prop)) {
            // Collect properties to set
            this._properties[prop] = this.props[prop];
          }
        }

        // Set the property values
        Object.assign(element, this._properties);

        // Set the event listeners
        for (let eventName in this._eventListeners) {
          element.addEventListener(eventName, this._eventListeners[eventName]);
        }

        this._configRef && this._configRef(element);
      }
    }, this.props.children);
  }
}
