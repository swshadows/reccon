const dotenv = require("dotenv").config();
const express = require("express");

const methodOverride = require("method-override");
const app = express();
app.use(methodOverride("_method"));

require("./modules/session")(app);
require("./modules/routes")(app);
require("./modules/database");

app.set("template engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use("/img", express.static(__dirname + "/database/img"));

// 404
app.use(function (req, res, next) {
  res.status(404).render("error.ejs");
});

const port = process.env.SERVER_PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
