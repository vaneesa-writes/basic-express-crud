const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    id: Number,
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
