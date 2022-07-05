const products= require("./productModel");


const createProduct = async (title, tags, price) => {
console.log("Creating Product");
let product =new productModel();
product.title =title;
product.price =price;
product.tag= tag;
await product.save(); 
return product;
};

const getAllProducts = async () => {

let products= productModel.find();
  return products;
};
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;