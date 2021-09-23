import { Redirect } from "react-router";
import React from "react";

let Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {<Redirect to="/calender"></Redirect>}
    </div>
  );
};

export default Home;
