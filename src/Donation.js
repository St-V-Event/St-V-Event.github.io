import React, { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {useStripe, useElements, Elements, PaymentElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import config from './config';
import Modal from './Modal';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import queryString from 'query-string';

const stripePromise = loadStripe(config.stripe);

const TrueForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isReady, setIsReady] = useState(false);
  const onReady = () => {
    setIsReady(true)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://www.stvonline.be/donate",
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      { !isReady &&
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }
      <PaymentElement onReady={onReady} />
      <br/>
      <button className="btn btn-warning">Donner!</button>
    </form>
  )
}

const CheckoutForm = ({clientSecret}) => {
  return (
    <div>
      { clientSecret &&
        <Elements stripe={stripePromise} options={{clientSecret}}>
          <TrueForm />
        </Elements>
      }
    </div>
  )
}

const donationPreset = [ 2, 5, 10, 20];

const Donate = props => {
  let history = useHistory();
  let [ amount, setAmount ] = useState(1.00);
  let onAmountChange = e => setAmount(e.target.value);
  let updateAmount = amount => e => setAmount(amount);
  const [clientSecret, setClientSecret] = useState(null)
  let modalPayment = useRef(null);
  let modalSuccess = useRef(null);
  let modalErr = useRef(null);

  let {redirect_status} = queryString.parse(props.location.search)
  useEffect(() => {
    if (redirect_status=="failed") {
      modalErr.current.show()
    } else if (redirect_status=="succeeded") {
      modalSuccess.current.show()
    }
  })

  const onCheckout = () => {
    fetch(process.env.REACT_APP_API_URL+"/stripe/client_secret/"+amount, {
      method: "GET",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(({clientSecret}) => {
      setClientSecret(clientSecret)
      modalPayment.current.show()
    }).catch(err => {
      console.log(err)
    })
  }

  let fixedFeesWidth = {
    width: ""+(0.25/amount)*100+"%"
  };

  let variableFeesWidth = {
    width: ""+1.4+"%"
  };

  let donationWidth = {
    width: ""+(100-((0.25/amount)*100)-1.4)+"%"
  }

  const onSuccess = e => {
    history.push('/');
  }

  $("[data-toggle='tooltip']").tooltip('hide')
  useEffect(() => {
    $("[data-toggle='tooltip']").tooltip()
  })

  return (
    <div className="container text-light">
      <br/>
      <Modal title="Payment" ref={modalPayment} buttonText="Annuler">
        <CheckoutForm clientSecret={clientSecret} />
      </Modal>
      <Modal title="Don réussi" ref={modalSuccess} onSuccess={onSuccess}>
        Merci pour votre soutien <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg><br/>
        S'il vous plaît soyez patient, le don peut prendre quelques minutes pour apparaître.
      </Modal>
      <Modal title="Erreur d'entrée" ref={modalErr} onSuccess={e => modalErr.current.hide()}>
         Le don a échoué. Le montant doit être un nombre positif et le don minimum est de 1.00€.
      </Modal>
      <h2>Faire un don</h2>
      <div className="form-group">
        <div>
          <p>
            Les montants repris dans les cagnottes sont les
            <span className="text-warning"> montants nets</span>, c-à-d des
            montants où les frais de transaction Stripe ne sont pas
            comptabilisés. Ces frais de transaction Stripe incluent des
            <span className="text-primary"> frais variables (1.4%)</span> et des
            <span className="text-danger"> frais fixes (0.25€)</span>. A cause
            de ces derniers, préférez un <span className="text-warning"> gros
            don</span> à plusieurs petits dons.
          </p>
        </div>
      </div>
      <div className="form-group">
        <div className="col">
          <div className="progress">
            <div className="progress-bar text-dark font-weight-bold" role="progressbar" style={variableFeesWidth}>{""+(amount*0.014).toFixed(3)+"€"}</div>
            <div className="progress-bar bg-danger text-dark font-weight-bold" role="progressbar" style={fixedFeesWidth}>{""+0.25+"€"}</div>
            <div className="progress-bar bg-warning text-dark font-weight-bold" role="progressbar" style={donationWidth}>{""+(0.986*amount-0.25).toFixed(3)+"€"}</div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col-lg-6 col-md-12 col-sm-12">
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
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="Attention aux frais</br>de transaction stripe">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">Montant personnalisé:</span>
              </div>
              <input
                id="amount"
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
        </div>
      </div>
      <div>
        <button className="btn btn-lg btn-warning" onClick={onCheckout}>Donner!</button>
      </div>
      <br/>
		</div>
  )
}

export default Donate;
