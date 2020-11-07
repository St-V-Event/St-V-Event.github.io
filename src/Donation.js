import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const donationPreset = [
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
    let order = actions.order.create({
      purchase_units: [{
        amount: {
          value: amount.toString()
        }
      }]
    })
    order.then(orderId => {
      fetch(process.env.REACT_APP_API_URL+"/donate/"+id+"/"+orderId, {
        method: "GET",
        mode: "cors"
      }).then(res => {

      }).catch(err => {
        console.log(err)
      })
    })
    return order
  }

  let fixedFeesWidth = {
    width: ""+(0.35/amount)*100+"%"
  };

  let variableFeesWidth = {
    width: ""+3.4+"%"
  };

  let donationWidth = {
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
            <div className="progress-bar bg-warning" role="progressbar" style={variableFeesWidth}>{""+(amount*0.034).toFixed(3)+"€"}</div>
            <div className="progress-bar bg-danger" role="progressbar" style={fixedFeesWidth}>{""+0.35+"€"}</div>
            <div className="progress-bar" role="progressbar" style={donationWidth}>{""+(0.966*amount-0.35).toFixed(3)+"€"}</div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            Donation pool : {id}
          </div>
          <div className="form-group" style={{textAlign: "justify"}}>
            { donationPreset.map(({label, value}) => (
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
