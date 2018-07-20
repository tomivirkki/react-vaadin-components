import React, { Component } from 'react';
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
          <h1 className="App-title">VaadinGrid</h1>
          <p>
            VaadinGrid is a data grid component that supports custom cell content, variable row height, millions of data rows...
          </p>
        </header>

        <h2>Columns and Headers</h2>

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
