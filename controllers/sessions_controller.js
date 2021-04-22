//! Login to an account

// Dependencies
const bcrypt = require("bcrypt");
const express = require("express");
const sessions = express.Router();
const User = require("../models/users.js");

// Routes
sessions.get("/", (req, res) => {
    res.send("Login page");
});

// When user submits login credentials
sessions.post("/", (req, res) => {
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if (err) {
            console.log(err);
            res.send({ msg: "Problem with database", error: true });
            // foundUser is undefined/null
        } else if (!foundUser) {
            // console.log("User could not be found");
            res.send({ msg: "Invalid user. Please sign up as an user.", error: true });
            // User is found, now check if password matches
        } else {
            // Password matches
            if (bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser;
                res.send(foundUser);
                // Password does not match
            } else {
                // console.log("You entered an incorrect password");
                res.send({ msg: "You entered an incorrect password", error: true });
            }
        }
    });
});

// When user logs out
sessions.delete("/", (req, res) => {
    req.session.destroy(() => {
        // console.log("You have logged out successfully");
        res.send({ msg: "You have logged out successfully" });
    });
});

// Export
module.exports = sessions;