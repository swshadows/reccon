const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const Address = sequelize.define("addresses", {
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
});

module.exports = Address;
