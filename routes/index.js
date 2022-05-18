const express = require("express");
const router = express.Router();
const appController = require("../controllers/App");

router.get("/", appController.renderIndex);

module.exports = router;
