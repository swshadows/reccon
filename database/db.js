const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("reccon", process.env.DB_USER, process.env.DB_PASS, {
  dialect: process.env.DB_DIALECT,
  host: "localhost",
  logging: false, // Remover para debugar no console
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log(`Banco de dados sincronizado`);
  })
  .catch((err) => {
    console.error(`Erro ao sincronizar banco, ERRO: ${err}`);
  });

sequelize
  .authenticate()
  .then(() => {
    console.log(`Conectado ao banco de dados como '${process.env.DB_USER}'`);
  })
  .catch((err) => {
    console.error(`Erro ao conectar ao banco de dados como ${process.env.DB_USER}, ERRO: ${err}`);
  });

module.exports = sequelize;
