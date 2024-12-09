const express = require("express");
const pruductsController = require("../controllers/ProductsController");
const router = express.Router();

router.post("/", pruductsController.createProduct);
router.get("/", pruductsController.getAllProducts);
router.get("/:id", pruductsController.getProductById);
router.put("/:id", pruductsController.updateProduct);
router.delete("/:id", pruductsController.deleteProduct);

module.exports = router;
