import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import config from "./config";
import $ from 'jquery';
import bootstrap from 'bootstrap';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const items = config.shop.items.reduce((acc, item) => {
  acc[item.id] = item;
  return acc
}, {});

const Shop = () => {
  let [ basket, setBasket ] = useState({});
  let [ mail, setMail ] = useState("");
  let [ name, setName ] = useState("");
  let [ address, setAddress ] = useState("");
  let [ phone, setPhone ] = useState("");

  $("[data-toggle='tooltip']").tooltip('hide')
  useEffect(() => {
    $("[data-toggle='tooltip']").tooltip()
  })

  const onMailChange = e => setMail(e.target.value);
  const onNameChange = e => setName(e.target.value);
  const onAddressChange = e => setAddress(e.target.value);
  const onPhoneChange = e => setPhone(e.target.value);

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
  return (
    <div className="container text-light">
      <h2>Shop</h2>
      <div>
        Explications du concept (prix, temps d'attente, livraison)
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
                type="text"
                placeholder="E-mail (*)"
                onChange={onMailChange} />
            </div>
          </div>
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="NOM Prénom">
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
                placeholder="NOM Prénom (*)"
                onChange={onNameChange} />
            </div>
          </div>
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="Adresse">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
                </span>
              </div>
              <input
                className="form-control"
                value={address}
                type="text"
                placeholder="Adresse (*)"
                onChange={onAddressChange} />
            </div>
          </div>
          <div className="form-group" data-toggle="tooltip" data-placement="left" data-html="true" title="Téléphone">
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
                placeholder="Téléphone"
                onChange={onPhoneChange} />
            </div>
          </div>
          <div className="form-group text-right">
            <span className="text-secondary">(*) obligatoire</span>
          </div>
        </div>
        <div className="col">
          <PayPalButton />
        </div>
      </div>
    </div>
  );
}

export default Shop;
