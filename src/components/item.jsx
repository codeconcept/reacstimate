import React from "react";

const Item = ({ item, onItemChange }) => {
  return (
    <React.Fragment>
      <div className="container" style={{marginLeft: 0}}>
        <div className="row mb-2">
          <div className="col">
            <input
              type="text"
              name="description"
              value={item.description}
              onChange={evt => onItemChange(evt, item, "description")}
              placeholder="description"
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="quantité"
              value={item.quantity}
              onChange={evt => onItemChange(evt, item, "quantity")}
              placeholder="description"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="taxe"
              value={item.taxe}
              onChange={evt => onItemChange(evt, item, "taxe")}
              placeholder="taxe"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="amount"
              value={item.amount}
              onChange={evt => onItemChange(evt, item, "amount")}
              placeholder="montant"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
