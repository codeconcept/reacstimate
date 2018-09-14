import React from "react";

const Item = ({ item, onItemChange }) => {
  const labels = {
    one: {text: 'description', width: 110 },
    two: {text: 'quantité', width: 50 },
    three: {text: 'taxe', width: 50 },
    four: {text: 'montant', width: 70 }
  }
  return (
    <React.Fragment>
      <div className="container" style={{marginLeft: 0}}>
        <div className="row mb-2">
          <div className="col">
            <label htmlFor={labels.one.text}>{labels.one.text}</label>
            <input
              type="text"
              id={labels.one.text}
              name="description"
              value={item.text}
              onChange={evt => onItemChange(evt, item, "description")}
              style={{width: labels.one.width}}
            />
          </div>
          <div className="col">
            <label htmlFor={labels.two.text}>{labels.two.text}</label>
            <input
              type="number"
              id={labels.two.text}
              name="quantité"
              value={item.quantity}
              onChange={evt => onItemChange(evt, item, "quantity")}
              style={{width: labels.two.width}}
            />
          </div>
          <div className="col">
            <label htmlFor={labels.three.text}>{labels.three.text}</label>
            <input
              type="text"
              id={labels.three.text}
              name="taxe"
              value={item.taxe}
              onChange={evt => onItemChange(evt, item, "taxe")}
              style={{width: labels.three.width}}
            />
          </div>
          <div className="col">
            <label htmlFor={labels.four.text}>{labels.four.text}</label>
            <input
              type="text"
              id={labels.four.text}
              name="amount"
              value={item.amount}
              onChange={evt => onItemChange(evt, item, "amount")}
              style={{width: labels.four.width}}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Item;
