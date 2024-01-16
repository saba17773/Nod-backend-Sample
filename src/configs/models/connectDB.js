const knex = require("knex")
const conn = require("../db/db.config")

exports.connectDB = () => {
  const db = knex(conn)
  return db
}
