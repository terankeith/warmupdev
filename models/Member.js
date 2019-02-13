const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
});

module.exports = Member = mongoose.model("members", MemberSchema);
