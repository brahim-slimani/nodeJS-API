const express = require("express");
const productController = require("../controllers/productController")
const jwtService = require("../security/JwtService");
const router = express.Router()


router.get("/products", jwtService.ensureToken, productController.getProducts);
router.post("/addProduct", jwtService.ensureToken, productController.createProduct)
module.exports = router;
