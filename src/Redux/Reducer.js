import { ACCEPTAPPOINTMENT, ADDAPPOINTMENT, DELETEREQUEST, UPDATEAPPOINTMENT } from "./Constant";
import { events } from "./Data";

let data = {
  event : [...events],
  sendRequest  : [],
  counter : 0
}


export const Reducer = (state = data, action) => {

  if (action.type === UPDATEAPPOINTMENT) {
    let newdata = [...action.payload.data];
    state = {
      event: newdata,
      sendRequest: state.sendRequest,
      counter: state.counter + 1,
    };
  } else if (action.type === ADDAPPOINTMENT) {
    let newreq = [...state.sendRequest, action.payload.data];
    state = {
      event: state.event,
      sendRequest: newreq,
      counter: state.counter + 1,
    };
  } else if (action.type === ACCEPTAPPOINTMENT) {
    let newReq = state.sendRequest.filter((e) => {
      return e.id !== action.payload.id;
    });
    let newPatient = state.sendRequest.find((e) => {
      return e.id === action.payload.id;
    });
    let newevents = [...state.event, newPatient];
    state = {
      event: newevents,
      sendRequest: newReq,
      counter: state.counter + 1,
    };
  } else if (action.type === DELETEREQUEST) {
    let newReq = state.sendRequest.filter((e) => {
      return e.id !== action.payload.id;
    });
   
    state = {
      event: state.event,
      sendRequest: newReq,
      counter: state.counter + 1,
    };
  }

console.log(state);


   return state;
};




