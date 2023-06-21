const { listing } = require("../controllers/listing");
const express = require("express");
const router = express.Router();

router.route("/item").post(listing);

module.exports = router;
