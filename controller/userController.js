const user = require("../models/User");
exports.createUser = async (req, res) => {
  try {
    const userNew = await user.create(req.body);
    res.status(201).send(userNew);
    console.log("created");
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};
exports.findUserByName = async (req, res) => {
  try {
    const users = await user.find({ username: /h/ });
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};
