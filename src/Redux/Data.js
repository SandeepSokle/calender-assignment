const moment = require("moment");



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
    title: `Dimas
    Root canal\n
     ${new Date(2021, 8, 19, 9, 0)}
     `,
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
    title: `
        Willy\n
        
        scoling
        
        ${new Date(2021, 8, 19, 13, 0)}
      `,
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
    title: `
        Chandra\n

        Consulation

        ${new Date(2021, 8, 20, 10, 0)}
      `,
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
    title: `
        Hendri\n

        Wisdom teeth removal

        ${new Date(2021, 8, 21, 13, 0)}
      `,
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
    title: `
        Rizal\n

        Wisdom teeth removal

        ${new Date(2021, 8, 22, 9, 0)}
      `,
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
    title: `
        Herman\n

        scaling

        ${new Date(2021, 8, 22, 12, 0)}
      `,
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
    title: `
        Danu\n

        consulation

        ${new Date(2021, 8, 23, 10, 0)}
      `,
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
    title: `
        Hendri    \n
        Bleoching
        ${new Date(2021, 8, 24, 13, 0)}
      `,
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
    title: `
        Hendri    \n
        Bleoching
        ${new Date(2021, 8, 25, 10, 0)}
      `,
  },
];


