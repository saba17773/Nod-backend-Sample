const db = require("../configs/models/connectDB")
const knex = db.connectDB()

exports.getAll = async () => {
  try {
    const data = await knex("Table01")
    return {result: true, code: 200, data: data, msg: "success"}
  } catch (error) {
    return {result: false, code: 400, data: [], msg: error}
  }
}

exports.getdataByRequest = async (id) => {
  try {
    const data = await knex("Table01").where({Id: id})
    return {result: true, code: 200, data: data, msg: "success"}
  } catch (error) {
    return {result: false, code: 400, data: [], msg: id}
  }
}

exports.add = async (param) => {
  try {
    const data = await knex("Table01").insert({
      Name: param.name,
      Role: param.role,
    })

    if (data) {
      return {result: true, code: 200, data: [], msg: "Created Succesfully"}
    } else {
      return {result: false, code: 400, data: [], msg: error}
    }
  } catch (error) {
    return {result: false, code: 400, data: [], msg: error}
  }
}

exports.updaterole = async (params) => {
  try {
    const data = await knex("Table01").where({Id: params.id}).update({
      Role: params.role,
    })
    if (data) {
      return {result: true, code: 200, data: [], msg: "Created Succesfully"}
    } else {
      return {result: false, code: 400, data: [], msg: error}
    }
  } catch (error) {
    return {result: false, code: 401, data: [], msg: error}
  }
}

exports.remove = async (params) => {
  try {
    const data = await knex("Table01").where({Id: params.id}).del()
    if (data) {
      return {result: true, code: 200, data: [], msg: "Delete Succesfully"}
    } else {
      return {result: false, code: 400, data: [], msg: error}
    }
  } catch (error) {
    return {result: false, code: 401, data: [], msg: error}
  }
}

exports.getProductRequest = async () => {
  try {
    const data = await knex("Product")
    return {result: true, code: 200, data: data, msg: "success"}
  } catch (error) {
    return {result: false, code: 400, data: [], msg: error}
  }
}

exports.getProductRequestId = async (id) => {
  try {
    const data = await knex("Product").where({Id: id})
    return {result: true, code: 200, data: data, msg: "success"}
  } catch (error) {
    return {result: false, code: 400, data: [], msg: id}
  }
}

exports.createProduct = async (param) => {
  try {
    const timestamp = Date.now()
    const data = await knex("Product").insert({
      CodeID: param.blog.CodeID,
      Name: param.blog.Name,
      QTY: param.blog.QTY,
      CreateBy: param.blog.CreateBy,
      // CreateDate: timestamp,
    })

    if (data) {
      const datamax = await knex("Product").max("Id as maxId")
      return {
        result: true,
        code: 200,
        data: datamax,
        msg: timestamp,
      }
    } else {
      return {result: false, code: 401, data: [], msg: error}
    }
  } catch (error) {
    return {result: false, code: 400, data: [], msg: error}
  }
}

exports.updateProduct = async (id, params) => {
  try {
    const data = await knex("Product").where({Id: id}).update({
      CodeID: params.blog.CodeID,
      Name: params.blog.Name,
      QTY: params.blog.QTY,
    })
    if (data) {
      return {result: true, code: 200, data: [], msg: "Created Succesfully"}
    } else {
      return {result: false, code: 400, data: [], msg: error}
    }
  } catch (error) {
    return {result: false, code: 401, data: [], msg: error}
  }
}

exports.deleteProduct = async (params) => {
  try {
    const data = await knex("Product").where({Id: params.id}).del()
    if (data) {
      return {result: true, code: 200, data: [], msg: "Delete Succesfully"}
    } else {
      return {result: false, code: 400, data: [], msg: error}
    }
  } catch (error) {
    return {result: false, code: 401, data: [], msg: error}
  }
}
