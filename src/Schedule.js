import {useEffect } from "react";
import Timetable from './timetable/timetable.js';
import config from './config';

const Schedule = () => {
  var timetable = new Timetable();
  timetable.setScope(0, 23);
  var renderer = new Timetable.Renderer(timetable);
  timetable.addLocations(Object.keys(config.schedule))
  const today = new Date();

  const toStartDate = duration => {
    const [start,] = duration.split('-');
    const [hour, min] = start.split(':');
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, min)
  }

  const toEndDate = duration => {
    const [, end] = duration.split('-');
    const [hour, min] = end.split(':');
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hour, min)
  }

  Object.entries(config.schedule).map(([pool, events]) => {
    Object.entries(events).map(([duration, description]) => {
      timetable.addEvent(duration+" "+description, pool, toStartDate(duration), toEndDate(duration));
    })
  })

  useEffect(() => {
    renderer.draw(".timetable")
  }, [])
  return (
    <div>
      <div className="timetable text-light">
      </div>
    </div>
  );
}

export default Schedule;
