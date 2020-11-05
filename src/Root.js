import { useEffect } from "react";
import { Link } from 'react-router-dom';

const streams = [
  {
    icon: process.env.PUBLIC_URL+"/ace.png",
    title: "ACE",
    id: "twitch-embed-ace",
    channel: "ace-ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "Team Orga",
    id: "twitch-embed-orga",
    channel: "team-organisateur"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CI",
    id: "twitch-embed-CI",
    channel: "ci_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CePha",
    id: "twitch-embed-CEPHA",
    channel: "cepha_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CGéo",
    id: "twitch-embed-CGEO",
    channel: "cgeo_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "ISEP-CM-CKO-CO",
    id: "twitch-embed-sante",
    channel: "polesante_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CIG",
    id: "twitch-embed-CIG",
    channel: "cig_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "Régionales",
    id: "twitch-embed-inter",
    channel: "inter_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CPL-CdH-CJC-CROM-CHAA-CPSY",
    id: "twitch-embed-solb1",
    channel: "celb_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CdS-CP",
    id: "twitch-embed-Cds-CP",
    channel: "cp_cds_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CARé",
    id: "twitch-embed-CARé",
    channel: "care_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "CD-ISTI",
    id: "twitch-embed-CD-ISTI",
    channel: "isti_ulb"
  }, {
    icon: process.env.PUBLIC_URL+"/orga.png",
    title: "AGRO",
    id: "twitch-embed-AGRO",
    channel: "agro_ulb"
  }


];

const Stream = ({icon, title, id, channel}) => {
  useEffect(() => {

  })
  return (
    <div className="col-sm-2 col-md-4 col-lg-3 bg-transparent">
      <a target="_blank" href={"https://www.twitch.tv/"+channel}>
        <img className="card-img-top" src={icon} />
      </a>
      <div className="card-body">

        <div className="row text-warning">
          <div className="col-8"/>
          <div className="col-4 text-center">
            100€
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <a target="_blank" href={"https://www.twitch.tv/"+channel}>
              <span className="card-title text-light text-center">{title}</span>
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
  return (
    <div className="container" style={{padding:"0px 1em"}}>
      <div className="row">
        { streams.map(props => (
          <Stream {...props} key={props.id} />
        ))}
  		</div>
    </div>
  );
}

export default Root;
