import { useEffect } from "react";
import { Link } from 'react-router-dom';

const streams = [
  {
    title: "ACE-BSG",
    id: "twitch-embed-ace-bsg",
    channel: "ace-bsg"
  }, {
    title: "Team Organisateur",
    id: "twitch-embed-orga",
    channel: "team-organisateur"
  }, {
    title: "CI",
    id: "twitch-embed-CI",
    channel: "ci_ulb"
  }, {
    title: "CePha",
    id: "twitch-embed-CEPHA",
    channel: "cepha_ulb"
  }, {
    title: "CGéo",
    id: "twitch-embed-CGEO",
    channel: "cgeo_ulb"
  }, {
    title: "CPS",
    id: "twitch-embed-CPS",
    channel: "cps_ulb"
  }, {
    title: "CPSY",
    id: "twitch-embed-CPSY",
    channel: "cpsy_ulb"
  }, {
    title: "CELB",
    id: "twitch-embed-CELB",
    channel: "celb_ulb"
  }, {
    title: "CdS",
    id: "twitch-embed-CdS",
    channel: "cds_ulb"
  }, {
    title: "CARé",
    id: "twitch-embed-CARe",
    channel: "care_ulb"
  }, {
    title: "CD",
    id: "twitch-embed-CD",
    channel: "cd_ulb"
  }, {
    title: "C$",
    id: "twitch-embed-CS",
    channel: "cs_ulb"
  }

];

const coin_style = {
  width : "25px",
  marginLeft : "-2px",
  marginTop: "-2px"
};

const card_style = {
  width: "302px",
  height: "260px",
  marginTop: "60px"
};

const Stream = ({title, id, channel}) => {
  useEffect(() => {
    new window.Twitch.Embed(id, {
      width: 300,
      height: 200,
      channel: channel,
      parent: ["localhost"],
      allowfullscreen : false,
      muted : true,
      autoplay: false,
      layout : ["video"]
    });
  })
  return (
    <div className="col-sm-4 bg-transparent" style={card_style}>
      <span id={id} />
      <div className="card-body">
        <h5 className="card-title text-light">{title}</h5>
        <div className="d-flex flex-row-reverse display-don-btn">
          <Link to={"/donate/"+channel} className="btn btn-warning">
            <img src={process.env.PUBLIC_URL+"/coin.svg"} style={coin_style} className="img-fluid icon"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Root = () => {
  return (
    <div className="row">
      { streams.map(props => (
        <Stream {...props} key={props.id} />
      ))}
		</div>
  );
}

export default Root;
