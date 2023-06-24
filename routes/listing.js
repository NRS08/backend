const { listing, getId } = require("../controllers/listing");
const { getAllItems } = require("../controllers/listing");

const express = require("express");
const router = express.Router();

router.route("/item").post(listing);
router.route("/items").get(getAllItems);
router.route("/myId").get(getId);

module.exports = router;
