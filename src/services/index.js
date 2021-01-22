const express = require("express");

const router = express.Router();
const productsRoute = require("./products");
const reviewsRoute = require("./reviews");
const categoriesRoute = require("./categories");

router.use("/products", productsRoute);
router.use("/reviews", reviewsRoute);
router.use("/categories", categoriesRoute);
module.exports = router;