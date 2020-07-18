const express = require("express");
const router = express.Router();
const ProductRouter = require("./productRoute");
const UserRoute = require("./userRoute");

router.use(ProductRouter, UserRoute);
module.exports = router;
