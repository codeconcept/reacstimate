import React, { Component } from "react";

class Info extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Bienvenue sur votre générateur de devis</h2>
        <div>
          Créer un devis ? C'est simple : cliquer sur{" "}
          <button onClick={this.handleNewEstimate}>nouveau devis</button>
        </div>
      </div>
    );
  }
}

export default Info;
