const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please add password"],
    maxLength: [5, "max length is 5"],
  },
});
const usermodel = mongoose.model("user", user);
module.exports = usermodel;
