const express = require("express");
const router = express.Router();
const sync = require("../middleware/syncDatabase");
const userController = require("../controllers/User");

router.post("/login", sync, async (req, res) => {
  // TODO
  res.send("Rota: /login");
});

router.get("/list", sync, userController.listAllUsers);
router.post("/register", sync, userController.registerUser);
router.delete("/delete", sync, userController.deleteUser);

module.exports = router;
