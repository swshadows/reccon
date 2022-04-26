const Sequelize = require("sequelize");
const sequelize = require("../loaders/database");
const bcrypt = require("bcrypt");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
});

function validateUser({ emailreg, passreg, passconfreg }) {
  if (emailreg && passreg && passconfreg) {
    if (passconfreg == passreg) return true; // Tudo certo
    else return false; // Senhas não batem
  } else {
    return false; // Deu algo errado
  }
}

async function addUser({ emailreg, passreg }) {
  bcrypt.hash(passreg, 10, async (err, hash) => {
    await User.create({
      email: emailreg,
      password: hash,
    });
  });
}

module.exports.add = addUser;
module.exports.validate = validateUser;
module.exports.User = User;
