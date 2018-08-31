import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div>React Vaadin</div>
        <a href="https://github.com/tomivirkki/react-vaadin-components">GitHub</a>
      </header>
    );
  }
}

export default Header;
