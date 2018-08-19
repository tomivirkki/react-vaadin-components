import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VaadinComponent extends Component {

  constructor(tagName) {
    super();
    this.tagName = tagName;
    this.state = {};
    // Needed for now to fix an issue with missing style scopes (on FireFox)
    customElements.whenDefined(tagName).then(() => this.setState({defined: true}));

    this._eventListeners = {};
  }

  render() {
    if (!this.state.defined) {
      return null;
    }

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

        for (let prop in this.props) {
          if (/^on[A-Z]/.test(prop)) {
            // Add listener
            const eventName = prop.replace(/([A-Z])/g, name => `-${name[0].toLowerCase()}`).replace('on-', '');

            element.removeEventListener(eventName, this._eventListeners[eventName]);
            this._eventListeners[eventName] = this.props[prop];
            element.addEventListener(eventName, this._eventListeners[eventName]);
          } else if (!propertyBlacklist.includes(prop)) {
            // Assign the property value
            element[prop] = this.props[prop];
          }
        }

        this._configRef && this._configRef(element);
      }
    }, this._getChildren ? this._getChildren() : this.props.children);
  }
}