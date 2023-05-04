// const path = require("path");
// const express = require("express");
// const mongoose = require("mongoose");
// const colors = require("colors");
// const dotenv = require("dotenv");

// import express from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
// import router from "./routes/router.js";

/* CONFIGURATION */
// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(helmet());

// dotenv.config({ path: __dirname + "/.env" });
// const connectDB = require("./config/db");
// const { errorHandler } = require("./middleware/error.middleware");
// const port = process.env.PORT || 5000;

// connectDB();

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // const userRouter = require("./routes/user.routes.js");
// // const apiaryRouter = require("./routes/apiary.routes.js");
// // const dataRouter = require("./routes/data.routes.js");

// // app.use("/api/users", userRouter);
// // app.use("/api/apiaries", apiaryRouter);
// // app.use("/api/data", dataRouter);

// Serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "build", "index.html")
//     )
//   );
// }
// else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }

// app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
