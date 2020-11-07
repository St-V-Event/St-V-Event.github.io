import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import useDonations from './DonationContext';

const streams = [
  {
    icon: process.env.PUBLIC_URL+"/logos/ace.png",
    title: "ACE",
    id: "twitch-embed-ace",
    channel: "ace-ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/orga.png",
    title: "Team Orga",
    id: "twitch-embed-orga",
    channel: "team-organisateur"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/ci.png",
    title: "CI",
    id: "twitch-embed-CI",
    channel: "ci_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/cepha.png",
    title: "CePha",
    id: "twitch-embed-CEPHA",
    channel: "cepha_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/cgeo.png",
    title: "CGéo",
    id: "twitch-embed-CGEO",
    channel: "cgeo_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/polesante.png",
    title: "ISEP-CM-CKO-CO",
    id: "twitch-embed-sante",
    channel: "polesante_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/cig.png",
    title: "CIG",
    id: "twitch-embed-CIG",
    channel: "cig_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/orga.png",
    title: "Régionales",
    id: "twitch-embed-inter",
    channel: "inter_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/philo_psy.png",
    title: "CPL-CdH-CJC-CROM-CHAA-CPSY",
    id: "twitch-embed-solb1",
    channel: "celb_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/cp_cds.png",
    title: "CdS-CP",
    id: "twitch-embed-Cds-CP",
    channel: "cp_cds_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/care.png",
    title: "CARé",
    id: "twitch-embed-CARé",
    channel: "care_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/cd_isti.png",
    title: "CD-ISTI",
    id: "twitch-embed-CD-ISTI",
    channel: "isti_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/logos/agro.png",
    title: "AGRO",
    id: "twitch-embed-AGRO",
    channel: "agro_ulb"
  }


];

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
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 bg-transparent">
      <a target="_blank" href={"https://www.twitch.tv/"+channel}>
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
            <Link to={"/donate/"+channel}>
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
          { streams.map(props => (
            <Stream {...props} key={props.id} showStream={showStream} donations={getPoolDonation(props.channel)} />
          ))}
    		</div>
      </div>
    </div>
  );
}

export default Root;
