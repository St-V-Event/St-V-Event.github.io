import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const donation_preset = [
  {
    label: "2.00€",
    value: 2
  }, {
    label: "5.00€",
    value: 5
  }, {
    label: "10.00€",
    value: 10
  }, {
    label: "20.00€",
    value: 20
  }
];

const Donation = () => {
  let { id } = useParams();
  let [ amount, setAmount ] = useState(1.00);
  let onChange = e => setAmount(e.target.value);
  let updateAmount = amount => e => setAmount(amount);

  let createOrder = (data, actions) => {
    // This function sets up the details of the transaction, including the amount and line item details.
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: amount.toString()
        }
      }]
    })
  }

  let fixed_fees_width = {
    width: ""+(0.35/amount)*100+"%"
  };

  let variable_fees_width = {
    width: ""+3.4+"%"
  };

  let donation_width = {
    width: ""+(100-((0.35/amount)*100)-3.4)+"%"
  }

  return (
    <div className="container text-light">
      <h2>Make a donation</h2>
      <div className="form-group">
        <div>
          Paypal payments include <span className="text-warning">variable fees (3.4%)</span>. Due to <span className="text-danger">fixed paypal fees (0.35€)</span>, prefer one single <span className="text-primary">large donation</span> rather than multiple small ones.
        </div>
      </div>
      <div className="form-group">
        <div className="col">
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={variable_fees_width}>{""+(amount*0.034).toFixed(3)+"€"}</div>
            <div className="progress-bar bg-danger" role="progressbar" style={fixed_fees_width}>{""+0.35+"€"}</div>
            <div className="progress-bar" role="progressbar" style={donation_width}>{""+(0.966*amount-0.35).toFixed(3)+"€"}</div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            Donation pool : {id}
          </div>
          <div className="form-group" style={{textAlign: "justify"}}>
            { donation_preset.map(({label, value}) => (
              <span key={value}>
                <button type="button"
                className="btn btn-lg btn-warning"
                onClick={updateAmount(value)}>{label}</button>
                {"  "}
              </span>
            ))}
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Custom:</span>
            </div>
            <input
              className="form-control"
              value={amount}
              type="number"
              min="1.00"
              step="0.25"
              onChange={onChange} />
            <div className="input-group-append">
              <span className="input-group-text">€</span>
            </div>
          </div>
        </div>
        <div className="col">
          <PayPalButton createOrder={createOrder} />
        </div>
      </div>
		</div>
  );
}

export default Donation;
