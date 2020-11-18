import ReactDOM from "react-dom";
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import config from "./config";
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Modal from './Modal';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

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
        <p className="text-center">
          <a href="https://forms.gle/RJcjBQZChSECKztG9" target="_blank">
            <button className="btn btn-warning btn-lg" style={{fontFamily: "pool_names"}}>
              Médaille / Medaille / Medal
            </button>
          </a>
        </p>
      </div>
      <div className="row">
        { config.shop.items.map(({id, url, name, price, hasSize}) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={id}>
            <div className="card bg-dark">
              <img className="card-img-top bg-danger" src={url} />
              <div className="card-body">
                <div className="row">
                  <div className="col" style={{fontSize: "0.9em"}}>
                    <span className="card-title">{name} {price.toFixed(2)}€</span>
                  </div>
                  <div className="col-3 text-right"/>
                </div>
                <div className="row" style={{paddingTop: "15px"}}>
                  { hasSize ?
                    <div className="col" style={{textAlignLast: "justify"}}>
                      { config.shop.sizes.map(size => (
                        <span key={size}>
                          <button className="btn btn-sm btn-warning font-weight-bold" onClick={onAddToBasket(id, size)}>
                            {size}
                          </button>
                          &nbsp;
                        </span>
                      ))}
                    </div>
                  :
                    <div className="col text-left">
                      <button className="btn btn-sm btn-warning" onClick={onAddToBasket(id, "")}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart-plus-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM4 14a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        </svg>
                      </button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <table className="table table-striped text-light" style={{tableLayout: "fixed"}}>
          <thead>
            <tr>
              <th scope="col">Article</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { Object.entries(basket).map(([key, quantity]) => {
              const [id, size] = key.split(',');
              return (
                <tr key={key}>
                  <td>{items[id].name}{" "}{size}</td>
                  <td>{quantity}</td>
                  <td>{items[id].price.toFixed(2)}€</td>
                  <td>{(quantity*items[id].price).toFixed(2)}€</td>
                  <td>
                  <div className="btn-group" data-toggle="buttons">
                    <button className="btn btn-sm btn-warning" onClick={onAddToBasket(id, size)}>
                      +
                    </button>
                    <button className="btn btn-sm btn-warning" onClick={removeFromBasket(id, size)}>
                      -
                    </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>{total().toFixed(2)}€</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="E-mail">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  @
                </span>
              </div>
              <input
                className="form-control"
                value={mail}
                type="email"
                placeholder="E-mail (*)"
                onChange={onMailChange} />
            </div>
          </div>
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="Full name">
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
                value={name}
                type="text"
                placeholder="Full Name (*)"
                onChange={onNameChange} />
            </div>
          </div>
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="Choose a </br>donation pool">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-people-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                  </svg>
                </span>
              </div>
              <select className="form-control" placeholder="Pool" value={pool} onChange={onPoolChange}>
                { config.streams.filter(({isPool}) => isPool).map(({channel, title}) => (
                  <option key={channel} value={channel}>{title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="Phone">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                  </svg>
                </span>
              </div>
              <input
                className="form-control"
                value={phone}
                type="text"
                placeholder="Phone"
                onChange={onPhoneChange} />
            </div>
          </div>
          <div className="form-group text-right">
            <span className="text-secondary">(*) mandatory</span>
          </div>
        </div>
        <div className="col">
          <PayPalButton onClick={onPaypalButtonClick} createOrder={createOrder} onApprove={onApprove} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
