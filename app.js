const experss = require("express");
const mongoose = require("mongoose");
const parser = require("body-parser");
const router = require("./routes/index.js");

const app = experss();
app.use(parser.urlencoded());
const port = 5000;
mongoose
  .connect(
    "mongodb+srv://hadiismail:Aabbccdd11@demo.p6dofr2.mongodb.net/demo2?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(port, () => {
  try {
    console.log("connnected at port " + port);
  } catch (error) {
    console.log(error);
  }
});
app.use("/", router);
