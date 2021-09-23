import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./CSS/AddPatient.css";
import { addAppointmentAction } from "./Redux/Action";

let AddPatient = () => {
  let dispatch = useDispatch();

  let [name, setName] = useState("");
  let [age, setAge] = useState(0);
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState(0);
  let [note, setNote] = useState("");
  let [des, setDes] = useState("");
  let [address, setAddress] = useState("");
  let [date, setDate] = useState(null);
  let [start, setStart] = useState(null);
  let [end, setEnd] = useState(null);

  return (
    <>
      <div className="col-3"></div>

      <form class="row g-3 col-4">
        <div className="addpatient">
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="age"
              placeholder="Enter age"
              onChange={(e) => {
                setAge(e.currentTarget.value);
              }}
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
            />
          </div>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="Enter phone number"
              onChange={(e) => {
                setPhone(e.currentTarget.value);
              }}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Enter Address"
              onChange={(e) => {
                setAddress(e.currentTarget.value);
              }}
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Appointment Date</label>
            <input
              type="date"
              class="form-control"
              id="date"
              placeholder="Enter appointment date"
              onChange={(e) => {
                setDate(e.currentTarget.value);
              }}
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Appointment Starting time
            </label>
            <input
              type="time"
              class="form-control"
              id="start"
              placeholder="Enter appointment starting time"
              onChange={(e) => {
                setStart(e.currentTarget.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Appointment Ending time
            </label>
            <input
              type="time"
              class="form-control"
              id="end"
              placeholder="Enter appointment ending time"
              onChange={(e) => {
                setEnd(e.currentTarget.value);
              }}
            />
          </div>

          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="note"
              placeholder="Note"
              onChange={(e) => {
                setNote(e.currentTarget.value);
              }}
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="des"
              placeholder="Describe..."
              onChange={(e) => {
                setDes(e.currentTarget.value);
              }}
            />
          </div>
          <Link to="/calender">
            <button
              type="submit"
              class="btn btn-primary col-2 submit"
              onClick={(e) => {
                // e.preventDefault();
                if (
                  name === "" ||
                  age === 0 ||
                  phone === 0 ||
                  (note === "") | (des === "") ||
                  address === "" ||
                  date === null ||
                  start === null ||
                  end === null
                ) {
                  alert("please fill all filled");
                  return;
                } else {
                  let newDate = date.split("-");

                  let year = newDate[0];
                  let month = newDate[1] - 1;
                  let day = newDate[2];
                  let sthr = start.split(":")[0];
                  let stmt = start.split(":")[1];
                  let endhr = end.split(":")[0];
                  let endmt = end.split(":")[1];

                  if (
                    new Date(year, month, day, sthr, stmt) < moment().toDate()
                  ) {
                    alert("Please Enter Valid Date:");
                    return;
                  }

                  let obj = {
                    id: moment().toDate().getTime(),
                    basic_information: {
                      name: name,
                      age: age,
                      email: email,
                      phone: phone,
                      address: address,
                    },
                    start: new Date(year, month, day, sthr, stmt),
                    end: new Date(year, month, day, endhr, endmt),
                    Note: note,
                    description: des,
                    Mediciens: [],
                    title: (
                      <div>
                        <h5>{name}</h5>
                        <h6>{des}</h6>
                        <br></br>
                        <div>
                          {new Date(year, month, day, sthr, stmt).toISOString()}
                        </div>
                      </div>
                    ),
                  };

                  // console.log("ID : "+moment().toDate().getTime());
                  console.log("Date : " + moment().toDate());
                  console.log(
                    "Starting time : " + new Date(year, month, day, sthr, stmt)
                  );
                  console.log(
                    "ending time : " + new Date(year, month, day, endhr, endmt)
                  );

                  // console.log(year);
                  // console.log(month);
                  // console.log(day);
                  // console.log(sthr);
                  // console.log(stmt);
                  // console.log(endhr);
                  // console.log(endmt);

                  dispatch(addAppointmentAction({ data: obj, move: 1 }));
                  alert(
                    "patient Add successfully You can check in request Approval:"
                  );
                }
              }}
            >
              Submit
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddPatient;
