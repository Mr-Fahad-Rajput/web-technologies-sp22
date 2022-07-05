const express = require('express');
const mongoose= require('mongoose');
const app = express();
const {createProduct, getAllProducts}= require("./Models/crudProducts");
app.use(express.json());

mongoose.connect("mongodb+srv://mr_fahad_rajput:whETr8kX@mernsatackapp.9b1wk.mongodb.net/test",{useNewUrlParser:true})
.then(()=>console.log("Connection to Mongo DB Established"))
.catch((error)=>console.log(error.message));


// product Creation
//let product = await createProduct("Dell","Chikna",500);
// console.log(product);

// products Get

let allProducts=  getAllProducts();
console.log(allProducts);