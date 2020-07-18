const ProductRepository = require("../models/product");
const httpStatus = require("http-status");
const {success_code, error_code, error_message, success_message, customResponse} = require("../helpers");

const getProducts = (req, res) => {
    ProductRepository.find({},{"__v":0}).then(result => {
        res.status(httpStatus.OK).json(customResponse(success_code, success_message, result));
    }, error=>{
        console.log(error_message+" : "+error);
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(customResponse(error_code, error_message, error));
    })
};

const createProduct = (req, res) => {
    const product = new ProductRepository(req.body);
    product.save((err, result) => {
        if(!err){
            res.status(httpStatus.OK)
                .json(customResponse(success_code, success_message, result));
            console.log("new product has been created : " + result);
        }else{
            res.status(httpStatus.INTERNAL_SERVER_ERROR)
                .json(customResponse(error_code, error_message, err));
            console.log("error : "+err);
        }

    });
}

module.exports = {
    getProducts, createProduct
}



