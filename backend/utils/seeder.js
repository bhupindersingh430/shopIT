import product from "../models/product.js";
import dotenv from "dotenv";
import connectDatabase from "../config/database.js";
import products from "../data/products.json" assert {type: "json"};

//setting dotenv 
dotenv.config({path: "backend/config/config.env"});

connectDatabase();

const seedProducts = async() => {
  try {
    await product.deleteMany();
    console.log("Products are deleted");

    await product.insertMany(products);
    console.log("All products are added");
    process.exit();
  } catch(error) {
    console.log(error.message);
    process.exit();
  }
}

seedProducts();