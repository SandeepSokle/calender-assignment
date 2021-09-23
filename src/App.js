import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/App.css";
import Home from "./Home";
import LeftNav from "./Leftnav";
import Message from "./Message";
import Overview from "./Overview.jsx";
import PatientList from "./PatientList";
import Payment from "./Payment";
import Setting from "./Setting";
import Calender from "./Calender";
import AddPatient from "./AddPatient";

let App = () => {
  return (
    <div className="app col-12">
      <Router>
        <LeftNav />
        <Switch>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/calender">
            <Calender />
          </Route>
          <Route path="/patientlist">
            <PatientList />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/addpatient">
            <AddPatient/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
