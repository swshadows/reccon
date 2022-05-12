const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const session = require("./auth/session")(app);
const routes = require("./routes/routes")(app);
const db = require("./database/db");

app.set("template engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

const port = process.env.SERVER_PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
