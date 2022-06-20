const mongoose = require("mongoose");
const productsSchema= mongoose.Schema({ 
title : String,
tags :[String],
price: number,
productId:{
type: number,
unique: true,
},
});

const productModel =mongoose.model("productModel",productsSchema); 
module.exports= productModel;