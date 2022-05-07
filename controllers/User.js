const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async listAllUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async registerUser(req, res) {
    const findUser = await User.findOne({ where: { email: req.body.email } });
    if (findUser) return res.status(400).json({ message: "Usuário já existente no banco de dados" });
    // TODO: Validate user register (double pass confirm & etc.)

    const users = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: await bcrypt.hash(req.body.password, 10),
      address: req.body.address,
    });
    return res.json(users);
  },

  async deleteUser(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ message: "Usuário não existente no banco de dados" });

    await user.destroy();
    return res.json(user);
  },

  async updateUser(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ message: "Usuário não existente no banco de dados" });

    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = await bcrypt.hash(req.body.password, 10);
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.address) user.address = req.body.address;
  },

  async comparePasswords(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ message: "Usuário não existente no banco de dados" });

    if (await bcrypt.compare(req.body.password, user.password)) res.status(200).send("A senha enviada confirma com o hash no banco");
    else res.status(400).send("A senha enviada NÃO confirma com o hash no banco");
  },
};
