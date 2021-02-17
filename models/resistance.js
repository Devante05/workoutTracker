const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name: {
    type: String,
    trim: true,
    required: "Name of workout is Required"
  },

    type: {
    type: String,
    trim: true,
    required: "Type of workout required"
  },

    sets: {
    type: Number,
    trim: true,
    required: "Number of sets required"
  },

    reps: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

    duration: {
    type: Number,
    trim: true,
  },

});


const resistanceSchema = mongoose.model("resistanceSchema", resistanceSchema);

module.exports = resistanceSchema;
