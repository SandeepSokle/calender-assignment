import { useState, useEffect } from 'react';

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CSS/Calender.css"

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const events = [
    {
        id : moment().toDate().getTime() ,
        start: moment().toDate(),
        end: moment().add(30,"minutes").toDate(),
        eventClasses: 'optionalEvent',
        title: <div>
          <span>Dimas</span>
          <br></br>
          <span>Root canal</span>
          <br></br>
          <span>moment().toDate()</span>

        </div>,
        description: 'This is a test description of an event',
    },
    {
        id : moment().toDate().getTime() ,
        start:moment().add(3, "days").add(15,"minutes").toDate(),
        end: moment().add(3, "days").add(45,"minutes").toDate(),
       title: <div>
          <span>Rizal</span>
          <br></br>
          <span>Wisdom Teeth Removal</span>
          <br></br>
          <span>moment().add()</span>

        </div>,
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
];

let Calender = ()=>{

  const [appointment, setAppointment] = useState([]);

  useEffect(()=>{
    setAppointment(events)
  },[])



  let eventResize = (event,start,end) => {
    console.log(event,start,end);
  };

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

    console.log(e);

  }

  let Navigate = (e)=>{
    console.log(e);
  }

  return  <div className="calender col-10">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={events}
          selectable = {true}
          localizer={localizer}
          onEventDrop={eventDrop}
          onDoubleClickEvent = {detailOfPatient}
          defaultView = "month"
          resizable = {true}
          onEventResize = {eventResize}
          style={{ height: "95vh" }}
          step={15}
          timeslots={1}
          onDragOver = {Navigate}
        />
      </div>
}

export default Calender;