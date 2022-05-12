const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");
const Address = require("../models/Address");
const { checkLogged } = require("../middleware/checkAuth");

router.get("/", checkLogged, async (req, res) => {
  const addresses = await Address.findAll();
  res.render("loginUser.ejs", { address: addresses });
});
router.post("/login", userController.authenticateUser);
router.post("/register", userController.registerUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;
