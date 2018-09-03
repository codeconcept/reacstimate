import React, { Component } from 'react';
import Info from './components/info';
import EstimateForm from './components/estimateForm';
import './App.css';

class App extends Component {
  state = {
    isInCreationMode: false
  }

  handleNewEstimate = evt => {
    console.log(evt);    
    this.setState({ isInCreationMode: !this.state.isInCreationMode });

  };

  render() {
    return (
      <div>
        <Info />
        <br/>
        <EstimateForm />
      </div>
    );
  }
}

export default App;
