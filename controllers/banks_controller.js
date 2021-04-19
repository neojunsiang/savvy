// DEPENDENCIES
const express = require("express");
const banks = express.Router();
const Bank = require("../models/banks");

// DEFINE ROUTES
// get
banks.get("/", (req, res) => {
    res.send("Hello");
})

// create
banks.post("/", (req, res) => {
    const userData = {
        ...req.body,
        loginUser: req.session.currentUser._id
    }
    console.log("User", userData);
    Bank.create(userData, (error, createdBank) => {
        if (error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(createdBank);
        }
    })
})

// delete
banks.delete("/:id", (req, res) => {
    Bank.findByIdAndRemove(req.params.name, (error, deletedBank) => {
        if (error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(200).json(deletedBank);
        }
    })
})

// put 
banks.put("/:id", (req, res) => {
    Bank.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true },
        (error, updatedBank) => {
            if (error) {
                res.status(400).json({ error: error.message })
            } else {
                res.status(200).json(updatedBank);
            }
        }
    )
})

// EXPORT
module.exports = banks;