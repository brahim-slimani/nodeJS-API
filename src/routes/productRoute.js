const express = require("express");
const productController = require("../controllers/productController")
const jwtService = require("../security/JwtService");
const router = express.Router()
const { api_prefix } = require("../helpers");


router.get(api_prefix+"/api/products", jwtService.ensureToken, productController.getProducts);
router.post(api_prefix+"/api/addProduct", jwtService.ensureToken, productController.createProduct)
module.exports = router;
