import React, { Component } from 'react';

export default class WebComponent extends Component {
  constructor(tagName) {
    super();
    this.tagName = tagName;

    this._eventListeners = {};
    this.propertyBlacklist = [
      'children',
      'theme',
      'className',
      'renderer'
    ];
  }

  render() {
    const attributes = {};
    this.props.theme && (attributes.theme = this.props.theme);
    this.props.className && (attributes.class = this.props.className);

    return React.createElement(this.tagName, {
      ...attributes,
      ref: element => {
        if (!element) {
          return;
        }

        const elementProps = {};
        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            // Remove existing event listener
            const eventName = prop.replace(/([A-Z])/g, name => `-${name[0].toLowerCase()}`).replace('on-', '');
            element.removeEventListener(eventName, this._eventListeners[eventName]);
            this._eventListeners[eventName] = this.props[prop];
          } else if (!this.propertyBlacklist.includes(prop)) {
            // Collect properties to set
            elementProps[prop] = this.props[prop];
          }
        }

        // Set the property values
        Object.assign(element, elementProps);

        // Set the event listeners
        for (let eventName in this._eventListeners) {
          element.addEventListener(eventName, this._eventListeners[eventName]);
        }

        this._configRef && this._configRef(element);
      }
    }, this.props.children);
  }
}
