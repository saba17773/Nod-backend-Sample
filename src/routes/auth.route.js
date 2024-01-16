const router = require("express").Router()
const authController = require("../controllers/auth.controller")
const jwt = require("../configs/jwt")

router.post("/", authController.userlogin)
router.get("/info", jwt.verifyToken, authController.info)
// router.get("/RequestId", productsController.getdataByRequest)
// router.post("/addData", productsController.addData)
// router.put('/updateData',productsController.updatedata)
// router.delete('/delete',productsController.remove)

module.exports = router
