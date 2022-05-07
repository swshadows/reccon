const User = require("../models/User");

const userController = {
  async listAllUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async registerUser(req, res) {
    // TODO: Password hash
    const users = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.json(users);
  },

  // TODO: Validate user register (double pass confirm & etc.)
  // TODO: Validate user login (pass hash & compare)
};

module.exports = userController;
