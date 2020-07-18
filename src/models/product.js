const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    designation : {
        type: String,
        required: "designation field is required"
    },
    price : {
        type: Number,
        required: "price field is required"
    },
    qty : {
        type: Number,
        required: "qty field is required"
    }
});

module.exports = mongoose.model("Product", ProductSchema, "products");
