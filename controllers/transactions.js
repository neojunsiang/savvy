const express = require("express");
const Transaction = require("../models/transactions.js");
const transactions = express.Router();

// Create a transaction
transactions.post("/", async (req, res) => {
  Transaction.create(req.body, (error, createdTransaction) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdTransaction);
  });
});

// Read all transactions
transactions.get("/", (req, res) => {
  Transaction.find({}, (err, foundTransactions) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundTransactions);
  });
});

// Update a transaction
transactions.put("/:id", (req, res) => {
  Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTransaction) => {
      if (err) {
        res.status(400).json({ error: err.message });
      }
      res.status(200).json(updatedTransaction);
    }
  );
});

// Delete a transaction
transactions.delete("/:id", (req, res) => {
  Transaction.findByIdAndRemove(req.params.id, (err, deletedTransaction) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedTransaction);
  });
});

module.exports = transactions;