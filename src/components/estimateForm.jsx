import React, { Component } from "react";

class EstimateForm extends Component {
  state = {
    estimateTitle: ""
  };

  handleChange = evt => {
    const title = evt.currentTarget.value;
    this.setState({ estimateTitle: title });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("généré");
  };

  render() {
    return (
      <React.Fragment>
        <div>Nouveau devis</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="estimate-title"
            value={this.estimateTitle}
            onChange={evt => this.handleChange(evt)}
            placeholder="titre du devis"
          />
          <button>générer le devis</button>
        </form>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
