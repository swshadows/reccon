const express = require("express");
const app = express();

app.set("template engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

const indexRoute = require("./routes/index");
app.use("/", indexRoute);

const port = process.env.port || 3000;
app.listen(port, (req, res) => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
