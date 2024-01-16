const router = require("express").Router()
const productsController = require("../controllers/product.controller")

router.get("/", productsController.getAll)
router.get("/RequestId", productsController.getdataByRequest)
router.post("/addData", productsController.addData)
router.put("/updateData", productsController.updatedata)
router.delete("/delete", productsController.remove)

// get product
router.get("/product", productsController.getProductRequest)
router.get("/productById", productsController.getProductRequestId)
router.post("/createProduct", productsController.createProduct)
router.put("/updateProduct", productsController.updateProduct)
router.delete("/deleteProduct", productsController.deleteProduct)

module.exports = router
