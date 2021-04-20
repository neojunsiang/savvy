const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeOfTransaction = ["income", "expense"];
const categories = ["salary", "others", "food", "entertainment", "transportation", "groceries", "housing", "clothing", "utilities", "health", "education", "insurance", "investments", "others"];

const transactionSchema = Schema({
  type: { type: String, enum: typeOfTransaction, required: true },
  category: { type: String, enum: categories, required: true },
  amount: { type: mongoose.Types.Decimal128, required: true },
  description: String,
  date: { type: String, required: true },
  bankId: { type: Schema.Types.ObjectId, ref: "Bank" },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;