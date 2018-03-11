import React, { Component } from 'react';
import './App.css';

import LodashUsage from './components/import-module-one-function';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LodashUsage />
      </div>
    );
  }
}

export default App;
