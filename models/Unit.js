const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  foundingYear: {
    type: Number
  },
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = Unit = mongoose.model("units", UnitSchema);
