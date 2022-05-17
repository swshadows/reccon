const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.session.message) {
    const message = req.session.message;
    req.session.message = null;
    return res.render("index.ejs", { logged: req.session.logged, message: message });
  }
  res.render("index.ejs", { logged: req.session.logged });
});

module.exports = router;
