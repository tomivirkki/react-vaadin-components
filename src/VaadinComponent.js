import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VaadinComponent extends Component {

  constructor(tagName) {
    super();
    this.tagName = tagName;

    this._eventListeners = {};
  }

  render() {
    return React.createElement(this.tagName, {
      theme: this.props.theme,
      class: this.props.className,
      ref: element => {
        if (!element) {
          return;
        }

        const propertyBlacklist = [
          'children',
          'theme',
          'className'
        ];

        const elementProps = {};

        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            // Remove existing event listener
            const eventName = prop.replace(/([A-Z])/g, name => `-${name[0].toLowerCase()}`).replace('on-', '');
            element.removeEventListener(eventName, this._eventListeners[eventName]);
            this._eventListeners[eventName] = this.props[prop];
          } else if (!propertyBlacklist.includes(prop)) {
            // Collect properties to set
            elementProps[prop] = this.props[prop];
          }
        }

        // Set new property values
        element.setProperties(elementProps);

        // Add new event listeners
        for (let eventName in this._eventListeners) {
          element.addEventListener(eventName, this._eventListeners[eventName]);
        }

        this._configRef && this._configRef(element);
      }
    }, this._getChildren ? this._getChildren() : this.props.children);
  }
}
