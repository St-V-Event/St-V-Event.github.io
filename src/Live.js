import { useEffect, useState, useRef } from "react";
import $ from 'jquery';

const Live = () => {
  useEffect(() => {
    new window.Twitch.Embed("twitch_container", {
			width: "100%",
			height: "100%",
			channel: "ace_ulb",
			parent: [process.env.REACT_APP_HOST],
			allowfullscreen : true,
			muted : true,
			layout : ["video"]
		});
  })
  useEffect(() => {
    $("[data-toggle='tooltip']").tooltip()
  })
  return (
    <a target="_blank" href="https://www.twitch.tv/ace_ulb" data-toggle="tooltip" data-placement="top" data-html="true" title="Watch on twitch">
      <div id="twitch_container" className="twitch-video" />
    </a>
  )
}

export default Live;
