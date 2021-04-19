// DEPENDENCIES
const express = require("express");
const seed = express.Router();
const Bank = require("../models/banks");

seed.get("/", (req, res) => {
    res.send("Seed Data")
})


module.exports = seed;