const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfile,
  updateProfile,
  getAllProfiles,
} = require("../controllers/profile");

router.route("/new").post(createProfile);
router.route("/update").post(updateProfile);
router.route("/get").get(getProfile);
router.route("/allprofiles").get(getAllProfiles);

module.exports = router;
