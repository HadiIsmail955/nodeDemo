const experss = require("express");
const route = experss.Router();
const courseController = require("../controller/courseController");
route.post("/createCourse", courseController.createCourses);
route.post("/", (req, res) => {
  res.send("fuck u");
});

module.exports = route;
