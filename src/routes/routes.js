const router = require("express").Router()
const jwt = require("../configs/jwt")
router.use("/products", require("./product.route"))
router.use("/auth", require("./auth.route"))

module.exports = router
