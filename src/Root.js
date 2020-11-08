import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import useDonations from './DonationContext';
import config from './config';
import $ from 'jquery';
import bootstrap from 'bootstrap';

const Stream = ({showStream, icon, title, id, channel, donations}) => {
  useEffect(() => {
    if (showStream) {
      new window.Twitch.Embed(id, {
				width: 300,
				height: 200,
				channel: channel,
				parent: ["localhost"],
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
    <div className="col-sm-6 col-md-4 col-lg-3 bg-transparent">
      <a target="_blank" href={"https://www.twitch.tv/"+channel} data-toggle="tooltip" data-placement="top" data-html="true" title="Watch on twitch">
        { showStream ?
          <div id={id} />
        :
          <img className="card-img-top" src={icon} />
        }
      </a>
      <div className="card-body">

        <div className="row text-warning">
          <div className="col-8"/>
          <div className="col-4 text-center">
            {donations.toFixed(2)}€
          </div>
        </div>
        <div className="row">
          <div className="col-8 text-nowrap">
            <a target="_blank" href={"https://www.twitch.tv/"+channel}>
              <span className="card-title text-light">{title}</span>
            </a>
          </div>
          <div className="col-4 text-center">
            <Link to={"/donate/"+channel} data-toggle="tooltip" data-placement="bottom" data-html="true" title="Donate now">
              <button className="btn btn-warning">
                <img src={process.env.PUBLIC_URL+"/coin.svg"} className="cicon icon"/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Root = () => {
  let [showStream, setShowStream] = useState(false);
  let donations = useDonations();

  const getPoolDonation = pool => {
    return donations.hasOwnProperty(pool) ? donations[pool] : 0
  }

  return (
    <div>
      <div className="text-center banner" />
      <div className="container" style={{padding:"0px 1em"}}>
        <div className="row">
          <div className="custom-control custom-switch text-light">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={showStream} onChange={e => setShowStream(e.target.checked)} />
            <label className="custom-control-label" htmlFor="customSwitch1">Display twitch streams <span>(warning it may cause performance issues)</span></label>
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
