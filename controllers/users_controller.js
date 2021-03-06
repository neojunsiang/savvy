//! Sign-up for an account

// Dependencies
const bcrypt = require("bcrypt");
const express = require("express");
const User = require("../models/users.js");
const users = express.Router();

// Routes
users.get("/", (req, res) => {
  res.send("Sign-up page");
})

users.post("/", (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.send({ msg: "Problem with database", error: true });
    } else if (foundUser) {
      // console.log("Username has been taken. Please use another username");
      res.send({ msg: "Username has been taken. Please use another username", error: true });
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      User.create(req.body, (err, createdUser) => {
        if (err) {
          // console.log(err);
          res.send({ msg: "Account could not be created", error: true });
        } else {
          // console.log("Account has been created");
          res.send({ msg: "Account has been created", error: false });
        }
      });
    }
  });
});

// Export
module.exports = users;