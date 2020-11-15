import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import useDonations from './DonationContext';
import config from './config';
import $ from 'jquery';
import bootstrap from 'bootstrap';

const Stream = ({showStream, icon, title, id, channel, isPool, donations}) => {
  useEffect(() => {
    if (showStream) {
      new window.Twitch.Embed(id, {
				width: 300,
				height: 200,
				channel: channel,
				parent: [process.env.REACT_APP_HOST],
				allowfullscreen : false,
				autoplay : false,
				muted : true,
				layout : ["video"]
			});
    }
  })
  useEffect(() => {
    $("[data-toggle='tooltip']").tooltip()
  })
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://www.twitch.tv/"+channel} data-toggle="tooltip" data-placement="top" data-html="true" title="Watch on twitch">
        { showStream ?
          <div id={id} />
        :
          <img className="card-img-top" src={icon} />
        }
      </a>
      <div className="card-body">
        <div className="row">
          <div className="col-8 text-nowrap" style={{display: "flex", alignItems: "end", justifyContent: "left"}}>
            <a target="_blank" href={"https://www.twitch.tv/"+channel}>
              <span className="card-title text-light">{title}</span>
            </a>
          </div>
          { isPool ?
            <div className="col-4 text-center text-warning">
                {donations.toFixed(2)}€
                <br/>
                <Link to={"/donate/"+channel} data-toggle="tooltip" data-placement="bottom" data-html="true" title="Donate now">
                  <button className="btn btn-warning">
                    <img src={process.env.PUBLIC_URL+"/coin.svg"} className="cicon icon"/>
                  </button>
                </Link>
            </div>
          :
            <div className="col-4"/>
          }
        </div>
      </div>
    </div>
  )
}

const Root = () => {
  let [showStream, setShowStream] = useState(false);
  let { donations } = useDonations();

  const getPoolDonation = pool => {
    return donations.hasOwnProperty(pool) ? donations[pool] : 0
  }

  return (
    <div>
      <div className="text-center banner">
        <div className="header">
          <h1 className="display-4 text-light">
            St Verhaegen 2020
          </h1>
          <small className="text-light">
            Met afstand maar niet afstandelijk,
            confiné.e.s mais pas aveuglé.e.s.
          </small>
        </div>
        <div className="text-light charity">
          All donations will benefit the non profit organisation
          'Centre de prévention des violences conjugales et familiales'
          {" "}<a href="http://www.cpvcf.org/" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-link text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
          </svg></a>
        </div>
      </div>
      <div className="container" style={{padding:"0px 1em"}}>
        <div className="row">
          <div className="custom-control custom-switch text-secondary">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={showStream} onChange={e => setShowStream(e.target.checked)} />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Display twitch streams <span>(warning it may cause performance issues)</span>
            </label>
          </div>
        </div>
        <div className="row align-items-end">
          { config.streams.map(props => (
            <Stream {...props} key={props.id} showStream={showStream} donations={getPoolDonation(props.channel)} />
          ))}
    		</div>
      </div>
    </div>
  );
}

export default Root;
