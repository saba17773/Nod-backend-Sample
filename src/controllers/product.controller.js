const productService = require("../services/product.service")

exports.getAll = (req, res) => {
  productService.getAll().then((data) => {
    res.status(data.code).json(data)
  })
}

exports.getdataByRequest = (req, res) => {
  const {id} = req.query
  productService.getdataByRequest(id).then((data) => {
    res.status(data.code).json(data)
  })
}

exports.addData = (req, res) => {
  productService.add(req.query).then((data) => {
    res.status(data.code).json(data)
  })
}

exports.updatedata = (req, res) => {
  productService.updaterole(req.query).then((data) => {
    res.status(data.code).json(data)
  })
}

exports.remove = (req, res) => {
  productService.remove(req.query).then((data) => {
    res.status(data.code).json(data)
  })
}

exports.getProductRequest = (req, res) => {
  productService.getProductRequest().then((data) => {
    res.status(data.code).json(data)
  })
}

exports.getProductRequestId = (req, res) => {
  const id = req.query.id
  productService.getProductRequestId(id).then((data) => {
    res.status(data.code).json(data)
  })
}

exports.createProduct = (req, res) => {
  productService.createProduct(req.body).then((data) => {
    res.status(data.code).json(data)
  })
}

exports.updateProduct = (req, res) => {
  const id = req.query.id
  productService.updateProduct(id, req.body).then((data) => {
    res.json(data)
  })
}

exports.deleteProduct = (req, res) => {
  productService.deleteProduct(req.query).then((data) => {
    res.json(data)
  })
}
