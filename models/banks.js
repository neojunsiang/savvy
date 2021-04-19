const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listOfBanks = ["DBS", "OCBC", "UOB", "Standard Chartered", "HSBC", "Citibank", "CIMB", "Maybank", "RHB", "Others"]

const bankSchema = new Schema(
    {
        bankName: { type: String, enum: listOfBanks, required: true },
        balance: { type: mongoose.Types.Decimal128, required: true, default: 0 },
        nickName: { type: String },
    }
)

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank