const express = require("express");
const router = express.Router();

const userController = require("../controllers/User");
const adController = require("../controllers/Ad");
const appController = require("../controllers/App");

const { checkNotLogged } = require("../middleware/checkAuth");

const upload = require("../modules/multer");

router.get("/update", checkNotLogged, appController.renderMeUpdate);
router.get("/my_ads", checkNotLogged, appController.renderMyAds);
router.get("/logoff", checkNotLogged, appController.redirectLogoff);

router.post("/my_ads/update", checkNotLogged, appController.renderEditAd);

router.put("/update/update", checkNotLogged, userController.updateUser);
router.put("/my_ads/update/update", checkNotLogged, upload.single("image"), adController.updateAd);

router.delete("/update/delete", checkNotLogged, userController.deleteUser);
router.delete("/my_ads/delete", checkNotLogged, adController.deleteAd);

module.exports = router;
