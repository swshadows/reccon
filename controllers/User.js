const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  async listAllUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async registerUser(req, res) {
    if (req.body.password != req.body.password_confirm) {
      req.session.error = "ERRO: As senhas não são iguais";
      return res.redirect("/forms");
    }

    const findEmail = await User.findOne({ where: { email: req.body.email } });
    if (findEmail) {
      req.session.error = "ERRO: Este email já está registrado no banco de dados";
      return res.redirect("/forms");
    }

    const findPhone = await User.findOne({ where: { phone: req.body.phone } });
    if (findPhone) {
      req.session.error = "ERRO: Este telefone já está registrado no banco de dados";
      return res.redirect("/forms");
    }

    const users = await User.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: await bcrypt.hash(req.body.password, 10),
      address: req.body.address,
    });
    req.session.success = "Conta registrada com sucesso, faça login!";
    return res.redirect("/forms");
  },

  async deleteUser(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).json({ message: "Usuário não existente no banco de dados" });

    await user.destroy();
    return res.json(user);
  },

  async updateUser(req, res) {
    const findUser = await User.findOne({ where: { email: req.session.email } });
    if (!(await bcrypt.compare(req.body.password, findUser.password))) {
      req.session.error = "ERRO: Credenciais incorretas";
      return res.redirect("/me/update");
    }

    if (req.body.new_password != req.body.new_password_confirm) {
      req.session.error = "ERRO: As senhas não são iguais";
      return res.redirect("/me/update");
    }

    let checkConflict = await User.findOne({ where: { phone: req.body.phone } });
    if (checkConflict) {
      req.session.error = "ERRO: Este telefone já está em uso";
      return res.redirect("/me/update");
    }

    checkConflict = await User.findOne({ where: { email: req.body.email } });
    if (checkConflict) {
      req.session.error = "ERRO: Este email já está em uso";
      return res.redirect("/me/update");
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      password: await bcrypt.hash(req.body.new_password, 10),
    };

    await User.update(user, { where: { email: req.session.email } });
    req.session.email = user.email;
    req.session.success = "Informações atualizadas com sucesso";
    res.redirect("/me/update");
  },

  async authenticateUser(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      req.session.error = "ERRO: Usuário não encontrado";
      return res.redirect("/forms");
    }

    if (await bcrypt.compare(req.body.password, user.password)) {
      req.session.logged = true;
      req.session.email = user.email;
      res.redirect("/app");
    } else {
      req.session.error = "ERRO: Credenciais incorretas";
      return res.redirect("/forms");
    }
  },
};
