const course = require("../models/courses");
exports.createCourses = async (req, res) => {
  try {
    const newCourse = new course(req.body);
    await newCourse.save();
    res.status(201).send(newCourse);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
