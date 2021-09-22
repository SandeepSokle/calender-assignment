import { useState, useEffect } from 'react';

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const events = [
    {
        id : 1 ,
        start: moment().toDate(),
        end: moment().toDate(),
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        id : 2 ,
        start:moment().add(3, "days").toDate(),
        end: moment().add(3, "days").toDate(),
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];

let Calender = ()=>{

  const [appointment, setAppointment] = useState([]);

  useEffect(()=>{
    setAppointment(events)
  },[])

  let onEventResize = (data) => {
    const { start, end } = data;

    setAppointment((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return [...events];
    });
  };

  let onEventDrop = (data) => {

    let id = data.event.id;

    let newData = appointment.filter((e)=>{
      return e.id !== id;
    })

    let appoint = appointment.find((e)=>{
      return e.id === id;
    })

    appoint.start = data.start;
    appoint.end = data.end;

    newData.push(appoint);

    setAppointment(newData)

    console.log(appoint);
  };

  return  <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable = {true}
          style={{ height: "100vh" , width : "100%"}}
        />
      </div>
}

export default Calender;