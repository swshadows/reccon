const express = require("express");
const router = express.Router();

const userController = require("../controllers/User");
const adController = require("../controllers/Ad");
const appController = require("../controllers/App");

const { checkLogged, checkNotLogged } = require("../middleware/checkAuth");
const upload = require("../modules/multer");

router.get("/", checkLogged, appController.renderSessionForms);

router.post("/login", userController.authenticateUser);
router.post("/register", userController.registerUser);
router.post("/create_ad", checkNotLogged, upload.single("file"), adController.postAd);

router.delete("/delete", checkNotLogged, userController.deleteUser);

module.exports = router;
