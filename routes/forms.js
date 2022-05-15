const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");
const Address = require("../models/Address");
const { checkLogged } = require("../middleware/checkAuth");

router.get("/", checkLogged, async (req, res) => {
  const addresses = await Address.findAll();
  if (req.session.error) {
    const error = req.session.error;
    req.session.error = null;
    return res.render("forms.ejs", { address: addresses, error: error });
  }
  if (req.session.success) {
    const success = req.session.success;
    req.session.success = null;
    return res.render("forms.ejs", { address: addresses, success: success });
  }
  if (req.session.warning) {
    const warning = req.session.warning;
    req.session.warning = null;
    return res.render("forms.ejs", { address: addresses, warning: warning });
  }
  res.render("forms.ejs", { address: addresses });
});

router.post("/login", userController.authenticateUser);
router.post("/register", userController.registerUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;
