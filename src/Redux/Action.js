import { ACCEPTAPPOINTMENT, ADDAPPOINTMENT, DELETEREQUEST, UPDATEAPPOINTMENT } from "./Constant";



export const updateAppointmentAction = (payload) => {
  return {
    type: UPDATEAPPOINTMENT,
    payload: payload,
  };
};

export const addAppointmentAction = (payload) => {
  return {
    type: ADDAPPOINTMENT,
    payload : payload
  };
};



export const acceptAppointmentAction = (payload) => {
  return {
    type: ACCEPTAPPOINTMENT,
    payload: payload,
  };
};

export const deleteRequest = (payload) => {
  return {
    type: DELETEREQUEST,
    payload: payload,
  };
};