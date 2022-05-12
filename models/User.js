const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING(40),
    allowNull: false,
  },
});

module.exports = User;
