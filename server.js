const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const PORT = process.env.PORT || 3030;

const app = express();
app.use(logger("dev"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("./routes/api.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "../workouttracker/public/index.html"))
});


app.get("/exercise", (req, res) => { 
    res.sendFile(path.join(__dirname, "../workouttracker/public/exercise.html"))
});

app.get("/stats", (req, res) => { 
    res.sendFile(path.join(__dirname, "../workouttracker/public/stats.html"))
});

var db = require(__dirname, "/workouttracker/models");


app.post("/api/workouts"),(req, res) =>{
    db.Resistance.create

    console.log(req.body)

};