const express = require("express");

const router = express.Router();
const productsRoute = require("./products");
const reviewsRoute = require("./reviews");

router.use("/products", productsRoute);
router.use("/reviews", reviewsRoute);

module.exports = router;