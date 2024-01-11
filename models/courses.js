const mongoose = require("mongoose");
const courses = new mongoose.Schema({
  coursename: {
    type: String,
    require: true,
  },
  coursecode: {
    type: Number,
    require: true,
  },
});

const coursesmodel = mongoose.model("courses", courses);
module.exports = coursesmodel;
