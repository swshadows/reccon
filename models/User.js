const Sequelize = require("sequelize");
const sequelize = require("../modules/database");
const Address = require("../models/Address");

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
});

User.belongsTo(Address, {
  constraint: true,
  foreignKey: "fk_address",
});

module.exports = User;
