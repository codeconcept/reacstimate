import React, { Component } from "react";
import InputText from "./inputText";

class EstimateForm extends Component {
  state = {
    id: "",
    title: "",
    customerFirstName: "",
    customerLastName: "",
    items: {}
  };

  handleChange = (evt, name) => {
    const value = evt.currentTarget.value; console.log([name]);
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("généré");
  };

  render() {
    return (
      <React.Fragment>
        <h2>Nouveau devis</h2>
        <form onSubmit={this.handleSubmit}>
          <InputText
            label="ID"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <br />
          <InputText
            label="titre"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <InputText
            label="Prénom du client"
            name="customerFirstName"
            value={this.state.customerFirstName}
            onChange={this.handleChange}
          />
          <br />
          <InputText
            label="Nom du client"
            name="customerLastName"
            value={this.state.customerLastName}
            onChange={this.handleChange}
          />
          <br />
          <button>générer le devis</button>
        </form>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
