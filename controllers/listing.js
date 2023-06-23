const ProductListing = require("../modles/ProductListing");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const listing = async (req, res) => {
  const { name, role, Iname, harvestDate, amount, contact } = req.body;
  if (!name || !role || !Iname || !harvestDate || !amount || !contact) {
    throw new BadRequestError("Provide all info");
  }
  req.body.createdBy = req.user.userId;
  // console.log(req.user.userId);
  const item = await ProductListing.create(req.body);
  res.status(201).json({ item });
};

const getAllItems = async (req, res) => {
  let queryProducts = {};
  const { name } = req.query;
  if (name) {
    queryProducts.name = { $regex: name, $options: "i" };
  }

  let result = ProductListing.find(queryProducts);

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  results.skip(skip).limit(limit);

  const items = await result;
  res.status(200).json({ items });
};

module.exports = { listing, getAllItems };
