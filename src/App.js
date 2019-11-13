import React, { Component } from 'react';
import CurrencyHOC from './components/CurrencyConverter.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h2>High order Component</h2>
        <CurrencyHOC/>
      </>
    );
  }
}

export default App;
