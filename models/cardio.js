const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
    type: String,
    trim: true,
    required: "Name of workout is Required"
  },

    
    duration: {
    type: Number,
    trim: true,
    required: "Duration is Required",

  },
    distance: {
    type: Number,
    trim: true,
    required: "Distance is Required",

  },

});


const cardioSchema = mongoose.model("cardioSchema", cardioSchema);

module.exports = cardioSchema;
