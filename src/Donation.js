import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useParams, useHistory } from "react-router-dom";
import config from './config';
import Modal from './Modal';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const donationPreset = [ 2, 5, 10, 20];

const Donation = () => {
  let { id } = useParams();
  let history = useHistory();
  let [ amount, setAmount ] = useState(1.00);
  let [ pseudo, setPseudo ] = useState("");
  let [ message, setMessage ] = useState("");
  let [ pool, setPool ] = useState(id);
  let modal = useRef(null);
  let onAmountChange = e => setAmount(e.target.value);
  let onPseudoChange = e => setPseudo(e.target.value);
  let onMessageChange = e => setMessage(e.target.value);
  let onPoolChange = e => setPool(e.target.value);
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
      fetch(process.env.REACT_APP_API_URL+"/donate/"+pool+"/"+orderId, {
        method: "POST",
        mode: "cors",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({pseudo: pseudo, message: message})
      }).then(res => {

      }).catch(err => {
        console.log(err)
      })
    })
    return order
  }

  let onApprove = (data, actions) => {
    modal.current.show();
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

  const onSuccess = e => {
    history.push('/');
  }

  return (
    <div className="container text-light">
      <Modal ref={modal} onSuccess={onSuccess} />
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
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </span>
              </div>
              <select className="form-control" placeholder="Donation pool" value={pool} onChange={onPoolChange}>
                { config.streams.map(({channel, title}) => (
                  <option key={channel} value={channel}>{title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group" style={{textAlign: "justify"}}>
            { donationPreset.map(value => (
              <span key={value}>
                <button type="button"
                className="btn btn-lg btn-warning"
                onClick={updateAmount(value)}>{value.toFixed(2)}€</button>
                {"  "}
              </span>
            ))}
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Custom amount:</span>
              </div>
              <input
                className="form-control"
                value={amount}
                type="number"
                min="1.00"
                step="0.25"
                onChange={onAmountChange} />
              <div className="input-group-append">
                <span className="input-group-text">€</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                </span>
              </div>
              <input
                className="form-control"
                value={pseudo}
                type="text"
                placeholder="Pseudo (optional)"
                onChange={onPseudoChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chat-square-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                  </svg>
                </span>
              </div>
              <textarea
                className="form-control"
                value={message}
                type="text"
                placeholder="Message (optional)"
                onChange={onMessageChange} />
            </div>
          </div>
        </div>
        <div className="col">
          <PayPalButton createOrder={createOrder} onApprove={onApprove} />
        </div>
      </div>
		</div>
  );
}

export default Donation;
