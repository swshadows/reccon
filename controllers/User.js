const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  async listAllUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async registerUser(req, res) {
    if (req.body.password != req.body.password_confirm) return res.status(400).json({ message: "Senhas não são iguais" });

    const findEmail = await User.findOne({ where: { email: req.body.email } });
    if (findEmail) return res.status(400).json({ message: "Email já registrado no banco de dados" });

    const findPhone = await User.findOne({ where: { phone: req.body.phone } });
    if (findPhone) return res.status(400).json({ message: "Telefone já registrado no banco de dados" });

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

  async authenticateUser(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ message: "Usuário não existente no banco de dados" });

    if (await bcrypt.compare(req.body.password, user.password)) {
      req.session.logged = true;
      req.session.email = user.email;
      res.redirect("/app");
    } else res.status(400).send("A senha enviada NÃO confirma com o hash no banco");
  },
};
