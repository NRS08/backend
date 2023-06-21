const ProductListing = require("../modles/ProductListing");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const listing = async (req, res) => {
  const { name, role, harvestDate, amount, contact } = req.body;
  if (!name || !role || !harvestDate || !amount || !contact) {
    throw new BadRequestError("Provide all info");
  }
  req.body.createdBy = req.user.userId;
  const item = await ProductListing.create(req.body);
  res.status(201).json({ item });
};

module.exports = { listing };
