const express = require("express");
const config = express();

//mongodb middleware
const mongoose = require("mongoose");

//HTTP request logger middleware for Node. js.
const morgan = require("morgan");

//request body parser to json
const bodyParser = require("body-parser");

//dotenv properties
const dotenv = require("dotenv");
dotenv.config();

//api router points
var router = require('../routes/index')


/* basic endpoint */
// app.get("/api", (req, res) => {
//     res.send("Hello from first endpoint in nodeJS");
// });

/* from router */
// app.get("/products", router.getProducts);


config.use(morgan("combined"));
config.use(bodyParser.json());
config.use("/", router);

//db connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true}).then(()=>{
    console.log("connection established !");
})
mongoose.connection.on("error", err => {
    console.log("conneciton issue : "+ err.message);
});

module.exports = config;
