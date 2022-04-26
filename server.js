const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
// const database_loader = require("./loaders/database")();
const routes_loader = require("./loaders/routes")(app);

app.set("template engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

const port = process.env.SERVER_PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
