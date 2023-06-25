const { buyRequest, getBuyRequests } = require("../controllers/buyingReq");

const express = require("express");
const router = express.Router();

router.route("/request").post(buyRequest);
router.route("/requests").get(getBuyRequests);

module.exports = router;
