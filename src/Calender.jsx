import moment from "moment";
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CSS/Calender.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);


const events = [
    {
        id : 1,
        start: moment().toDate(),
        end: moment().add(30,"minutes").toDate(),
        title: "Meeting",
        description: 'This is a test description of an event',
    },
    {
        id : 2,
        start:moment().add(3, "days").add(15,"minutes").toDate(),
        end: moment().add(3, "days").add(45,"minutes").toDate(),
        title: "Lunch",
        description: 'This is a test description of an event',
    },
];

let Calender = ()=>{

  const [appointment, setAppointment] = useState([]);

  useEffect(()=>{
    setAppointment(events)
  },[])



 


  let eventDrop = (data) => {

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
      // console.log(appoint);
  };


  let detailOfPatient = (e)=>{

    // console.log(e);

  }
  let popupOfPatient = (e)=>{
console.log(11212);
  }




  return  <div className="calender col-10">
        <DnDCalendar
          selectable
          events={appointment}
          onEventDrop={eventDrop}
          defaultView="month"
          defaultDate={moment().toDate()}
          localizer={localizer}
          onSelectEvent = {popupOfPatient}
          onDoubleClickEvent = {detailOfPatient}
          style={{ height: "95vh" }}
          step={15}
          timeslots={1}
        />
      </div>
}

export default Calender;