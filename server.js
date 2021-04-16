// DEPENDENCIES
require("dotenv-safe").config()
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();
const usersController = require("./controllers/users_controller.js");
const sessionsController = require("./controllers/sessions_controller.js");
const banksController = require("./controllers/banks_controller");

// MONGOOSE CONNECTION
const MONGO_URI = process.env.MONGO_URI
mongoose.connection.on("error", (err) =>
    console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.connection.once("open", () => {
    console.log("connected to mongoose...");
});

// MIDDLEWARE
app.use(express.json());
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use("/users", usersController);
app.use("/sessions", sessionsController);
app.use("/banks", banksController);

app.get("/", (req, res) => {
    res.send("Welcome page");
})

// PORT LISTENING
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
