const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
  },
  role: {
    type: String,
    required: [true, "Please Provide role"],
  },
  harvestDate: {
    type: String,
    required: [true, "Please harvest date"],
  },
  amount: {
    type: Number,
    required: [true, "Provide amount"],
  },
  contact: {
    type: String,
    required: [true, "Please Provide contact number"],
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide user"],
  },
});

module.exports = mongoose.model("ProductListing", listingSchema);
