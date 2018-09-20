import React from "react";

const Info = (props) => {
  return (
    <div>
      <h2>Bienvenue sur votre générateur de devis</h2>
      <div>
        Créer un devis ? C'est simple : cliquer sur{" "}
        <button className="btn btn-warning ml-2" onClick={props.handleShowEstimateForm}>nouveau devis</button>
      </div>
    </div>
  );
}
 
export default Info;
