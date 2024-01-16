const db = require("../configs/models/connectDB")
const bcrypt = require("bcryptjs")
const jwt = require("../configs/jwt")
const knex = db.connectDB()

exports.userlogin = async (params) => {
  try {
    const userEmail = params.user.email
    const password = params.user.password
    // const userEmail = "worawut_s@deestone.com"
    // const password = "12341234"
    const data = await knex("users").where({
      UserEmail: userEmail,
      UserPassword: password,
    })
    if (data.length > 0) {
      const payload = {
        sub: data[0].UserEmail,
        addtional: "TestLogin",
      }

      const user = {
        auth_jwt: jwt.generateToken(payload),
      }

      return {result: true, code: 200, data: user, msg: "success"}
    } else {
      return {result: false, code: 401, data: [], msg: "User Not found!"}
    }
  } catch (error) {
    return {result: false, code: 400, data: [], msg: error}
  }
}
