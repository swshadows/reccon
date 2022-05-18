const Sequelize = require("sequelize");
const sequelize = require("../modules/database");
const User = require("../models/User");
const Address = require("../models/Address");

const Ads = sequelize.define("ads", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  image_path: {
    type: Sequelize.STRING(50),
    allowNull: true,
  },
});

Ads.belongsTo(User, {
  constraint: true,
  foreignKey: "fk_user",
});

Ads.belongsTo(Address, {
  constraint: true,
  foreignKey: "fk_address",
});

module.exports = Ads;
