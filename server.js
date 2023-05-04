const express = require("express");
var app = express();
const port = 3000;

//login
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

//input schedule
app.get("/schedule", (req, res) => {
  res.sendFile(__dirname + "/schedule.html");
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// user logs in
//    user puts in start and end times to indicate free time during the day
//      check input to make sure ending hour is after start hour
//      pm is always after am
//      finished button once all free times are put in

// general algorithm:
//        take in each schedules free schedules
//        loop through first schedule
//                  if match found wiht other schedules then store that as free in new ds
//        show all available schedule times