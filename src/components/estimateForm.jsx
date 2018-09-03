import React, { Component } from 'react';

class EstimateForm extends Component {
  state = {  }

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('généré');
  };

  render() { 
    return (
      <React.Fragment>
        <div>Nouveau devis</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="estimate-title" placeholder="titre du devis" />
          <button>générer le devis</button>
        </form>
      </React.Fragment>
    );
  }
}
 
export default EstimateForm;