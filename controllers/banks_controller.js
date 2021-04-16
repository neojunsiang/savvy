const express = require("express");
const banks = express.Router();
const Bank = require("../models/banks");

banks.get("/", (req, res) => {
    res.send("Hello");
})


module.exports = banks;