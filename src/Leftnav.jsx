import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Leftnav.css";

let LeftNav = () => {
  const [isActive, setIsActive] = useState("cal");

  console.log(isActive);
  return (
    <ul className="list-group col-2">
      <Link to="/">
        <li
          className={`list-group-item`}
          onClick={() => {
            setIsActive("cal");
          }}
        >
          <b>Zendenta</b>
        </li>
      </Link>
      <Link to="/overview">
        <li
          className={`list-group-item ${isActive === "over" ? "Active" : ""}`}
          onClick={() => {
            setIsActive("over");
          }}
        >
          Overview
        </li>
      </Link>
      <Link to="/calender">
        <li
          className={`list-group-item ${isActive === "cal" ? "Active" : ""}`}
          onClick={() => {
            setIsActive("cal");
          }}
        >
          Calendar
        </li>
      </Link>
      <Link to="/patientlist">
        <li
          className={`list-group-item ${isActive === "pat" ? "Active" : ""}`}
          onClick={() => {
            setIsActive("pat");
          }}
        >
          Patient List
        </li>
      </Link>
      <Link to="/message">
        <li
          className={`list-group-item ${isActive === "mes" ? "Active" : ""}`}
          onClick={() => {
            setIsActive("mes");
          }}
        >
          Messages
        </li>
      </Link>
      <Link to="/payment">
        <li
          className={`list-group-item ${isActive === "pay" ? "Active" : ""}`}
          onClick={() => {
            setIsActive("pay");
          }}
        >
          Payment Information
        </li>
      </Link>
      <Link to="/setting">
        <li
          className={`list-group-item ${isActive === "set" ? "Active" : ""}`}
          onClick={() => {
            setIsActive("set");
          }}
        >
          Settings
        </li>
      </Link>
    </ul>
  );
};

export default LeftNav;
