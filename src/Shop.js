import ReactDOM from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import config from "./config";
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Modal from './Modal';

const items = config.shop.items.reduce((acc, item) => {
  acc[item.id] = item;
  return acc
}, {});

const Shop = () => {
  let history = useHistory();
  let modalErr = useRef(null);
  let modalSuccess = useRef(null);
  let [ lang, setLang ] = useState("FR");
  let [ basket, setBasket ] = useState({});
  let [ mail, setMail ] = useState("");
  let [ name, setName ] = useState("");
  let [ pool, setPool ] = useState(config.pool.default);
  let [ phone, setPhone ] = useState("");
  let [ errContent, setErrContent ] = useState(null);

  $("[data-toggle='tooltip']").tooltip('hide')
  useEffect(() => {
    $("[data-toggle='tooltip']").tooltip()
  })

  const onMailChange = e => setMail(e.target.value);
  const onNameChange = e => setName(e.target.value);
  const onPhoneChange = e => setPhone(e.target.value);
  const onPoolChange = e => setPool(e.target.value);

  let onAddToBasket = (id, size) => e => {
    setBasket({
      ...basket,
      [[id, size]]: (basket[[id, size]] || 0) + 1
    })
  }
  const removeFromBasket = (id, size) => e => {
    if (basket[[id, size]]>1) {
      setBasket({
        ...basket,
        [[id, size]]: basket[[id, size]] - 1
      })
    } else {
      setBasket(Object.entries(basket).reduce( (acc, [key, value]) => {
        const [id2, size2] = key.split(',');
        if ((id===id2) && (size===size2)) {
          return acc
        }
        acc[[id2, size2]] = value;
        return acc;
      }, {}))
    }
  }

  const total = () => Object.entries(basket).reduce((acc, [key, quantity]) => {
    const [id, _] = key.split(',');
    return acc+(items[id].price*quantity)
  }, 0);

  const validateEmail = () => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)

  let onPaypalButtonClick = (data, actions) => {
    return new Promise((resolve, reject) => {
      const validators = [
        [
          () => Object.keys(basket).length!==0,
          "Basket is empty."
        ], [
          validateEmail,
          "Enter a valid email."
        ], [
          () => name.length!==0,
          "Name must not be empty."
        ]
      ]
      for (const [validator, errStr] of validators) {
        if (!validator()) {
          setErrContent(errStr)
          modalErr.current.show()
          return resolve(actions.reject());
        }
      }
      return resolve(actions.resolve());
    })
  }

  let createOrder = (data, actions) => {
    return fetch(process.env.REACT_APP_API_URL+"/api/shop", {
      method: "POST",
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({basket, mail, name, pool, phone})
    }).then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      return data.orderID
    })
    .catch(err => {
      console.log(err)
    })
  }

  let onApprove = (data, actions) => {
    return actions.order.capture().then(details => {
      modalSuccess.current.show();
    })
  }

  const onSuccess = e => {
    history.push('/');
  }

  const onChangeLang = lang => e => {
    e.preventDefault()
    setLang(lang)
  }

  const badgeClassName = l => {
    return "badge badge-pill "+(lang==l ? "badge-danger" : "badge-secondary")
  }

  return (
    <div className="container text-light">
      <Modal title="An error occured" ref={modalErr}>
        {errContent}
      </Modal>
      <Modal title="Paymet success" ref={modalSuccess} onSuccess={onSuccess}>
        Thank you for your support <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
        <br/>
        Please be patient, the payment may take a few minutes to appear.
        <br/>
        For any issues, contact 'Team Orga' via discord.
      </Modal>
      <div>
        <div>
          <div className="row mb-2">
            <div className="col">
              <h2 className="mb-0">Shop</h2>
            </div>
            <div className="col" style={{display: "flex", alignItems: "end", justifyContent: "right"}}>
              <span>
                <a href="" className={badgeClassName("FR")} style={{cursor: "pointer"}} onClick={onChangeLang("FR")}>FR</a>
                {' '}<a href="" className={badgeClassName("NL")} style={{cursor: "pointer"}} onClick={onChangeLang("NL")}>NL</a>
                {' '}<a href="" className={badgeClassName("EN")} style={{cursor: "pointer"}} onClick={onChangeLang("EN")}>EN</a>
              </span>
            </div>
          </div>
          <div>
            { lang=="FR" &&
              <div>
                <p>Afin de se souvenir de cette Saint-V particulière et de récolter de l’argent au profit du Centre de Prévention des Violences Conjugales et Familiales, vous pouvez dès lors acheter des produits créés spécialement pour l’occasion.</p>
                <p>Grâce à l’ULB qui finance l’entièreté des coups de production des textiles, l’argent que vous déboursez ira <span className="text-warning">entièrement dans la cagnotte</span> pour l’Association !! Comme pour les dons, vous pouvez vous affiliez (ou non) à la cagnotte d’un cercle.</p>
                <p>Dans les semaines à venir, des permanences SUR INSCRIPTION se tiendront au local ACE (campus Solbosch) pour que vous veniez chercher votre commande. Dès ce lundi 23/11, un mail vous sera envoyé avec les modalités de retrait.</p>
              </div>
            }
            { lang=="NL" &&
              <div>
                <p>Om deze uitzonderlijke Saint-Vé te blijven herinneren én om nog wat extra steun te geven aan het Centrum voor Preventie van Huiselijk en Familiaal Geweld (het goede doel dat de ULB-kringen steunen), zullen jullie speciale merchandise voor deze gelegenheid kunnen kopen.</p>
                <p>Dankzij de ULB, die de productiekosten voor zich nam, zal het geld dat je hiervoor betaalt ook <span className="text-warning">integraal gedoneerd</span> worden!</p>
                <p>Tijdens de komende weken zal je de bestelling OP AFSPRAAK kunnen afhalen bij het lokaal van de ACE (ULB campus Solbosch). Vanaf 23/11 kan je een mailtje verwachten met de nodige info voor je afhaling.</p>
              </div>
            }
            { lang=="EN" &&
              <div>
                <p>To commemorate this special St-V edition and at the same time to raise money for the Centre de Prévention des Violences Conjugales et Familiales, we offer you to buy products designed especially for the occasion.</p>
                <p>Thanks to the ULB, which agreed on funding all the financial costs of the textile production, the amount of money you will pay for you purchases will fully and immediately <span className="text-warning">go to the funding pot</span> directed to the Association! You also may (or may not) make a donation via the pot of a particular committee.</p>
                <p>In the following weeks, permanences ON REGISTRATION will be organized in the ACE facilities (campus Solbosch) in order for you to come and get your purchase. Starting this Monday, 23/11, you’ll receive an email with all the information about the withdrawal options.</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
