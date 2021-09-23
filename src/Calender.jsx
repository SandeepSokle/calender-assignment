import moment from "moment";
import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CSS/Calender.css";
import { acceptAppointmentAction, deleteRequest, updateAppointmentAction } from "./Redux/Action";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);



let Calender = ()=>{

  let [isApproval,setIsApproval] = useState(false);
  let [isActivePatient,setIsActivePatient] = useState(false);
  let [searchKey,setSearchKey] = useState("");
  let [isSearch,setIsSearch] = useState(false);
  let [activePatient,setActivePatient] = useState(null);
  let dispatch = useDispatch();



  let appointment = useSelector((state)=>{
  return state.event;
});


let appointmentRequest = useSelector((state)=>{
  return state.sendRequest;
});

// console.log(appointmentRequest);


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
    dispatch(updateAppointmentAction({data : newData, move : 1}));
    // setAppointment(newData)
      // console.log(appoint);
  };


  let detailOfPatient = (e)=>{

    console.log(e);
    setIsActivePatient(true);
    setActivePatient(e);

  }
  let popupOfPatient = (e)=>{
// console.log(1);
  }




  return <>
  
   <div className={`calender ${isActivePatient || isApproval ? "col-5" : "col-10"}`}>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid d-flex justify-content-between">
    <span class="navbar-brand col-2">Calendar</span>
   
      <form class="d-flex bd-highlight col-10" >
        <Link class="nav-link white col-2" to = "/addpatient">Add Patient</Link>
        <li class={`nav-link col-3 ${appointmentRequest.length > 0 ? "red" : "white"}`} aria-current="page" onClick = {()=>{
          setIsApproval(true)
          setIsActivePatient(false)
        }}>{`Request Approval (${appointmentRequest.length})`}</li>
        <input class="form-control ms-2 me-2" type="search" placeholder="Search" aria-label="Search" onChange = {(e)=>{
          setSearchKey(e.currentTarget.value)
        }}/>
        <button class="btn btn-outline-success me-4" type="submit" onClick = {()=>{
          setIsSearch(true)
        }}>Search</button>
      </form>
    </div>
</nav>
        <DnDCalendar
          selectable
          events={appointment}
          onEventDrop={eventDrop}
          defaultView="week"
          defaultDate={moment().toDate()}
          localizer={localizer}
          onSelectEvent = {popupOfPatient}
          onDoubleClickEvent = {detailOfPatient}
          style={{ height: "88vh" }}
          step={30}
          timeslots={1}
          
        />
      </div>


<div className = {`col-4 ${isActivePatient || isApproval ? "activeDiv" : "hide"}`}>

  {
    isApproval === true ? <> 
        {appointmentRequest.map((e)=>{
          return <div className = "singlePatient m-4 p-4">
            <div>
              <div>{e.start.toISOString().substring(0,10)}</div>
              <h1>{e.basic_information.name}</h1>
              {e.description}
            </div>
            
<div className = "mt-2">
  <button type="button" class="btn btn-primary me-4" onClick = {()=>{
    dispatch(acceptAppointmentAction(e))
  }    
  }>Accept</button>
  <button type="button" class="btn btn-danger ms-4" onClick = {()=>{
    dispatch(deleteRequest(e))
  }}>Delete</button>
</div>

          </div>
        })
      }
        
    </>:<>
<div className = "content p-5">
{activePatient !== null ? <>
<h4> {`Name :  ${activePatient.basic_information.name}`}</h4>
<div>{`Date of Appointment :  ${activePatient.start.toISOString().substring(0,10)}`}</div>
<div>{`UId of Patient :  ${activePatient.id}`}</div>
<div>{`Age :  ${activePatient.basic_information.age}`}</div>
<div>{`Email :  ${activePatient.basic_information.email}`}</div>
<div>{`Phone :  ${activePatient.basic_information.phone}`}</div>
<div>{`Address :  ${activePatient.basic_information.address}`}</div>
<div>{`Description :  ${activePatient.description}`}</div>
 </>: "" }
 </div>
    </>
  }



</div>


<button type="button" class={`btn btn-danger col-1 ${isActivePatient || isApproval ? "backBtn" : "hide"}`} onClick = {()=>{
  setIsActivePatient(false);
  setIsApproval(false);
  setIsSearch(false);
}}>Back</button>



      </>
}

export default Calender;