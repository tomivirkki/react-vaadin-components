import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { VaadinGrid, VaadinGridColumn } from './VaadinGrid.js';

class App extends Component {

  constructor() {
    super();
    const items = Array.from(['Yuriy', 'Tomi', 'Manolo', 'Anton', 'Sergey', 'Sohrab', 'Vlad', 'Kirill', 'Guille', 'Gilberto', 'Sayo', 'Johannes'])
      .map((name, itemIndex) => {
        return {name, itemIndex};
      });

    this.state = {
      items
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <VaadinGrid items={this.state.items}>

          <VaadinGridColumn width="100px" flexGrow="0"
            header={<div>Name</div>}
            renderer={item => <div>{item.name}</div>}>
          </VaadinGridColumn>

          <VaadinGridColumn
            header={<div>Item Index</div>}
            renderer={item => <div>{item.itemIndex}</div>}>
          </VaadinGridColumn>

        </VaadinGrid>
      </div>
    );
  }
}

export default App;
