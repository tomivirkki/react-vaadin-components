import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Menu from './Menu';
import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="App-content">
          <Demo></Demo>
          <Menu></Menu>
        </div>
      </div>
    );
  }
}

export default App;
