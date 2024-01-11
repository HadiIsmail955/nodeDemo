const experss = require("express");
const app = experss.Router();
const userRouter = require("./userRouter.js");
const coursesRouter = require("./courseRouter.js");

app.use("/courses", coursesRouter);
app.use("/user", userRouter);

module.exports = app;
