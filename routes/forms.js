const express = require("express");
const router = express.Router();
const path = require("path");
const userController = require("../controllers/User");
const adController = require("../controllers/Ad");
const Address = require("../models/Address");
const { checkLogged } = require("../middleware/checkAuth");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "database/img");
  },
  filename: function (req, file, cb) {
    cb(null, "upload" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", checkLogged, async (req, res) => {
  const addresses = await Address.findAll();
  if (req.session.message) {
    const message = req.session.message;
    req.session.message = null;
    return res.render("forms.ejs", { address: addresses, message: message });
  }
  res.render("forms.ejs", { address: addresses });
});

router.post("/login", userController.authenticateUser);
router.post("/register", userController.registerUser);
router.delete("/delete", userController.deleteUser);

router.post("/create_ad", upload.single("image"), adController.postAd);

module.exports = router;
