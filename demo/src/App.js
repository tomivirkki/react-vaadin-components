import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Menu from './Menu';
import Demo from './Demo';

class App extends Component {

  constructor() {
    super();
    this.state = {menuOpen: false};
  }

  render() {
    return (
      <div className={"App" + (this.state.menuOpen ? ' menuopen' : '')}>
        <Header></Header>
        <div className="App-content">
          <Demo></Demo>
          <Menu></Menu>
          <div className="App-menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>
        </div>
      </div>
    );
  }
}

export default App;
