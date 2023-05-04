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
