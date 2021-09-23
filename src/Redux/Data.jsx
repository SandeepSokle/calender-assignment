

import moment from 'moment';
import React from 'react';

export const events = [
  {
    id: 1,
    basic_information: {
      name: "Dimas",
      age: 26,
      email: "damas@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 19, 9, 0),
    end: new Date(2021, 8, 19, 10, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title: <div>
      <h5>Dimas</h5>
      <h6>Root Canol</h6>
      <br></br>
      <div>{new Date(2021, 8, 19, 9, 0).toISOString()}</div>
    </div>,
  },
  {
    id: 2,
    basic_information: {
      name: "Willy",
      age: 26,
      email: "Willy@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 19, 13, 0),
    end: new Date(2021, 8, 19, 15, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title:<div>
      <h5>Willy</h5>
      <h6>scoling</h6>
      <br></br>
      <div>{new Date(2021, 8, 19, 13, 0).toISOString()}</div>
    </div>, 
  },
  {
    id: 3,
    basic_information: {
      name: "Chandra",
      age: 26,
      email: "Chandra@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 20, 10, 0),
    end: new Date(2021, 8, 20, 12, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title:<div>
      <h5>Chandra</h5>
      <h6>Consulation</h6>
      <br></br>
      <div>{new Date(2021, 8, 20, 10, 0).toISOString()}</div>
    </div>,
    
  },
  {
    id: 4,
    basic_information: {
      name: "Hendri",
      age: 26,
      email: "Hendri@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 21, 13, 0),
    end: new Date(2021, 8, 21, 14, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title:<div>
      <h5>Hendri</h5>
      <h6>Wisdom teeth removal</h6>
      <br></br>
      <div>{new Date(2021, 8, 21, 13, 0).toISOString()}</div>
    </div>,
  },
  {
    id: 5,
    basic_information: {
      name: "Rizal",
      age: 26,
      email: "Rizal@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 22, 9, 0),
    end: new Date(2021, 8, 22, 10, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title:<div>
      <h5>Rizal</h5>
      <h6>Wisdom teeth removal</h6>
      <br></br>
      <div>{new Date(2021, 8, 22, 9, 0).toISOString()}</div>
    </div>,
  },
  {
    id: 6,
    basic_information: {
      name: "Herman",
      age: 26,
      email: "Herman@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 22, 12, 0),
    end: new Date(2021, 8, 22, 13, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title: <div>
      <h5>Herman</h5>
      <h6>Scaling</h6>
      <br></br>
      <div>{new Date(2021, 8, 22, 12, 0).toISOString()}</div>
    </div>,
  },
  {
    id: 7,
    basic_information: {
      name: "Danu",
      age: 26,
      email: "Danu@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 23, 10, 0),
    end: new Date(2021, 8, 23, 12, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title: <div>
      <h5>Danu</h5>
      <h6>consulation</h6>
      <br></br>
      <div>{new Date(2021, 8, 23, 10, 0).toISOString()}</div>
    </div>,
  },
  {
    id: 8,
    basic_information: {
      name: "Hendri",
      age: 26,
      email: "Hendri@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 24, 13, 0),
    end: new Date(2021, 8, 24, 15, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title: <div>
      <h5>Hendri</h5>
      <h6>Bleoching</h6>
      <br></br>
      <div>{new Date(2021, 8, 24, 13, 0).toISOString()}</div>
    </div>, 
  },
  {
    id: 9,
    basic_information: {
      name: "Hendri",
      age: 26,
      email: "Hendri@gmail.com",
      phone: 1234567892,
      address: "XYZ",
    },
    start: new Date(2021, 8, 25, 10, 0),
    end: new Date(2021, 8, 25, 13, 0),
    Note: "about patient",
    description: "This is a test description of an event",
    Mediciens: [`a`, `b`, `c`, `d`],
    title: <div>
      <h5>Hendri</h5>
      <h6>Bleoching</h6>
      <br></br>
      <div>{new Date(2021, 8, 25, 10, 0).toISOString()}</div>
    </div>, 
  },
];


