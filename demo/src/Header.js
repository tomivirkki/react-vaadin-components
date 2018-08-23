import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="about:blank">React Vaadin</a>
        <div>Docs</div>
      </header>
    );
  }
}

export default Header;
