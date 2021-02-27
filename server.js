const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 3030;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,

});

// routes
app.use(require("./routes"));

// require('./routes/htmlRoutes')(app)
// require('./routes/apiRoutes')(app)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});