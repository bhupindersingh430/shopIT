import Product from "../models/product.js";
import Errorhandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

// create new product => /api/v1/admin/product/new

exports.newProduct = catchAsyncErrors(async (req, res, next) => { 
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
  });

// get all products => /api/v1/products
export async function getProducts(req, res, next) {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
}

// get single product detail => /api/v1/product/:id
export async function getSingleProduct(req, res, next) {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new Errorhandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
}

//update product => /api/v1/admin/product/:id
export async function updateProduct(req, res, next) {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
}

//delete product => /api/v1/admin/product/:id
export async function deleteProduct(req, res, next) {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  await Product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product is deleted",
  });
}
