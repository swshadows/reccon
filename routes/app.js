const express = require("express");
const router = express.Router();

const { checkNotLogged } = require("../middleware/checkAuth");

const appController = require("../controllers/App");

router.get("/", checkNotLogged, appController.renderApp);
router.get("/create_ad", checkNotLogged, appController.renderCreateAd);

module.exports = router;
