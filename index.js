const express = require("express");
const mongoose = require("mongoose");

// Access the database
require("dotenv").config();
const key = process.env.DB_KEY;

// Set router for the app
const profileRoute = require("./routes/profile.route.js");

// Start your app
const app = express();

// Access json via node.js
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/profiles", profileRoute);

app.get("/", (req, res) => {
  res.send("Welcome to You App!");
});

// Connect to the database
mongoose
  .connect(`${key}`)
  .then(() => {
    console.log("Successfully connected to the database!");
    // Listen to port 3000
    app.listen(3000, () => {
      console.log("Your server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect to the database!");
  });
