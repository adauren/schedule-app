const mongoose = required("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Room", RoomSchema);
