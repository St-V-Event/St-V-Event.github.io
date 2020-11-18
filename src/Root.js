import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import useDonations from './DonationContext';
import config from './config';
import $ from 'jquery';
import bootstrap from 'bootstrap';

const Stream = ({showStream, icon, title, id, channel, isPool, donations}) => {
  useEffect(() => {
    if (showStream) {
      if ($(id).length===0) {
        new window.Twitch.Embed(id, {
  				width: "100%",
  				height: "100%",
  				channel: channel,
  				parent: [process.env.REACT_APP_HOST],
  				allowfullscreen : false,
  				autoplay : false,
  				muted : true,
  				layout : ["video"]
  			});
      }
    }
  })
  useEffect(() => {
    $("[data-toggle='tooltip']").tooltip()
  })
  return (
    <div className={showStream ? "col-lg-4 col-md-6 col-sm-12" : "col-sm-6 col-md-4 col-lg-3"}>
      <a target="_blank" href={"https://www.twitch.tv/"+channel} data-toggle="tooltip" data-placement="top" data-html="true" title="Watch on twitch">
        { showStream ?
          <div id={id} className="twitch-video" />
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
            <div className="col-4 text-center text-warning pr-0 pl-0">
                {donations.toFixed(2)}€
                <br/>
                <Link to={"/donate/"+channel} data-toggle="tooltip" data-placement="bottom" data-html="true" title="Donate now">
                  <button className="btn btn-sm btn-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-dark" width="1.8em" height="1.8em" viewBox="0 0 25 25" version="1.1">
                      <path d="M 21.171875 14.261719 L 14.058594 16.359375 C 14.28125 16.910156 14.40625 17.507812 14.40625 18.128906 L 14.40625 18.390625 C 14.40625 20.214844 12.519531 21.425781 10.859375 20.679688 L 7.132812 19 C 6.769531 18.832031 6.601562 18.398438 6.769531 18.03125 C 6.933594 17.660156 7.367188 17.5 7.734375 17.664062 L 11.460938 19.34375 C 12.148438 19.65625 12.941406 19.15625 12.941406 18.390625 L 12.941406 18.128906 C 12.941406 16.871094 12.179688 15.761719 11.050781 15.253906 L 7.828125 13.804688 C 6.574219 13.238281 5.136719 13.246094 3.890625 13.820312 L 0.425781 15.394531 C 0.164062 15.515625 0 15.777344 0 16.0625 L 0 23.859375 C 0 24.410156 0.527344 24.734375 0.992188 24.5625 L 5.867188 22.703125 L 11.671875 24.730469 C 12.988281 25.195312 14.4375 25.054688 15.644531 24.335938 L 23.535156 19.691406 C 24.4375 19.160156 24.996094 18.171875 24.996094 17.125 C 25 15.140625 23.089844 13.695312 21.171875 14.261719 Z M 21.171875 14.261719 "></path>
                      <path d="M 14.511719 1.425781 C 15.257812 0.726562 16.113281 0.25 17.117188 0.0820312 C 19.808594 -0.359375 22.113281 1.3125 22.515625 3.585938 C 22.808594 5.265625 22.230469 6.648438 20.902344 7.664062 C 18.832031 9.242188 16.710938 10.75 14.609375 12.289062 C 14.574219 12.3125 14.535156 12.328125 14.472656 12.359375 C 13.160156 11.390625 11.835938 10.417969 10.519531 9.449219 C 9.730469 8.867188 8.941406 8.296875 8.164062 7.707031 C 6.753906 6.632812 6.113281 5.210938 6.5 3.460938 C 6.898438 1.632812 8.144531 0.550781 9.921875 0.140625 C 11.535156 -0.230469 13.007812 0.136719 14.257812 1.269531 C 14.300781 1.308594 14.339844 1.34375 14.390625 1.378906 C 14.410156 1.390625 14.4375 1.398438 14.511719 1.425781 Z M 9.46875 5.21875 C 9.765625 5.203125 10.117188 5.046875 10.195312 4.667969 C 10.308594 4.121094 10.621094 3.941406 11.128906 3.878906 C 11.621094 3.820312 11.933594 3.417969 11.917969 2.980469 C 11.898438 2.503906 11.554688 2.148438 11.046875 2.09375 C 9.859375 1.964844 8.5625 3.027344 8.476562 4.203125 C 8.433594 4.765625 8.84375 5.226562 9.46875 5.21875 Z M 9.46875 5.21875 "></path>
                    </svg>
                  </button>
                </Link>
            </div>
          :
            <div className="col-4" style={{height: "3.87em"}}/>
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
              Display twitch streams (warning it may cause performance issues)
            </label>
          </div>
        </div>
        <br/>
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
