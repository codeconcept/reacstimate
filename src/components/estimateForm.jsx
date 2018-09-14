import React, { Component } from "react";
import InputText from "./inputText";
import Item from "./item";
import {renderPDFInDOM} from './pdfMaker';

class EstimateForm extends Component {
  state = {
    id: "",
    title: "",
    customerFirstName: "",
    customerLastName: "",
    items: {}
  };

  handleChange = (evt, name) => {
    const value = evt.currentTarget.value;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("généré");
  };

  addItem = () => {
    const id = Date.now().toString();
    const items = { ...this.state.items };
    console.log(this, this.state.items);
    items[id] = {
      id: id,
      description: "",
      quantity: "",
      taxe: 0.2,
      amount: 0
    };
    this.setState({ items });
    console.log(this, this.state.items);
  };

  handleItemChange = (evt, item, field) => {
    // console.log(evt.currentTarget.value, item, field);
    const value = evt.currentTarget.value;
    const clonedItem = {...item};
    clonedItem[field] = value;
    const clonedItems = {...this.state.items};
    clonedItems[clonedItem.id] = clonedItem;
    this.setState({ items: clonedItems });
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
          <button onClick={this.addItem}>ajouter une ligne</button>
          {Object.keys(this.state.items).map((item, index) => (
            <Item
              key={index}
              item={this.state.items[item]}
              onItemChange={this.handleItemChange}
            />
          ))}
          <button onClick={() => renderPDFInDOM(this.state)}>générer le devis au format PDF</button>
        </form>
      </React.Fragment>
    );
  }
}

export default EstimateForm;
