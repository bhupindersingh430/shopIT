import express from "express";
const router = express.Router();

import {
  getProducts,
  newProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.route("/products").get(getProducts);
router.route("/product/:id").get(getSingleProduct);
router.route("/admin/product/new").post(newProduct);
router.route("/admin/product/:id").put(updateProduct);
router.route("/admin/product/:id").put(updateProduct).delete(deleteProduct);

export default router;
