import React, { Component } from 'react';
import Info from './components/info';
import EstimateForm from './components/estimateForm';
import './App.css';

class App extends Component {
  state = {
    showForm: true
  }

  handleShowEstimateForm = evt => {
    console.log(evt);    
    this.setState({ showForm: !this.state.showForm });

  };

  render() {
    return (
      <div>
        <Info handleShowEstimateForm={this.handleShowEstimateForm} />
        <br/>
        {this.state.showForm && <EstimateForm />}
      </div>
    );
  }
}

export default App;
