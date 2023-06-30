const {
  buyRequest,
  getBuyRequests,
  getWallet,
} = require("../controllers/buyingReq");

const express = require("express");
const router = express.Router();

router.route("/request").post(buyRequest);
router.route("/requests").get(getBuyRequests);
router.route("/wallet").get(getWallet);

module.exports = router;
