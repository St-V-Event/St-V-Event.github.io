import { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import config from './config';
import $ from 'jquery';
import bootstrap from 'bootstrap';

const Stream = ({icon, title, id, channel, isPool, donations}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <a target="_blank" href={"https://www.twitch.tv/"+channel} data-toggle="tooltip" data-placement="top" data-html="true" title="Watch on twitch">
        <img className="card-img-top" src={icon} />
      </a>
      <div className="card-body">
        <div className="row">
          <div className="col-8 text-nowrap" style={{display: "flex", alignItems: "end", justifyContent: "left"}}>
            <a target="_blank" href={"https://www.twitch.tv/"+channel}>
              <span className="card-title text-light">{title}</span>
            </a>
          </div>
          { isPool ?
            <div className="col-4 text-center text-warning pr-0 pl-0" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                {donations.toFixed(2)}€
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

  return (
    <div>
      <div className="text-center banner">
        <div className="header">
          <h1 className="display-4 text-light">
            St Verhaegen 2021
          </h1>
          <small className="text-light">
            Libre de détruire mais pas d'accueillir.
            Uitstoot toegestaan, grenzen toegedaan.
          </small>
        </div>
        <div className="text-light charity">
            All donations will benefit a non profit organisation          
        </div>
      </div>
      <div className="container" style={{padding:"0px 1em"}}>
        <br/>
        <div className="row align-items-end">
          { config.streams.map(props => (
            <Stream {...props} key={props.id} />
          ))}
    		</div>
      </div>
    </div>
  );
}

export default Root;
