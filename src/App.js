import React, { Component } from 'react';
import Info from './components/info';
import './App.css';

class App extends Component {
  state = {
    isInCreationMode: false
  }
  handleNewEstimate = evt => {
    console.log(evt);

  };

  render() {
    return (
      <Info />
    );
  }
}

export default App;
