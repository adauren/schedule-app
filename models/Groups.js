const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Group", GroupSchema);
