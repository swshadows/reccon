const dotenv = require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("reccon", process.env.DB_USER, process.env.DB_PASS, {
  dialect: "mysql",
  host: "localhost",
  logging: false, // Remover para debugar no console
});
try {
  async () => {
    await sequelize.authenticate();
  };
  console.log(`Conectado ao banco de dados como '${process.env.DB_USER}'`);
} catch (err) {
  console.error(`Erro ao conectar ao banco de dados: ${err}`);
}

module.exports = sequelize;
