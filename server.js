// DEPENDENCIES
require("dotenv-safe").config()
const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const usersController = require("./controllers/users_controller.js");
const sessionsController = require("./controllers/sessions_controller.js");
const app = express();

// MONGOOSE CONNECTION
const MONGO_URI = process.env.MONGO_URI
mongoose.connection.on("error", (err) =>
    console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connect(MONGO_URI || "mongodb://localhost:27017/savvy", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}
app.use("/users", usersController);
app.use("/sessions", sessionsController);

app.get("/", (req, res) => {
    res.send("Welcome page");
})

// PORT LISTENING
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});
