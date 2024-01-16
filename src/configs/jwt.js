const jwt = require("jsonwebtoken")
const path = require("path")
const fs = require("fs")
const {decode} = require("punycode")
const privatekey = fs.readFileSync(
  path.join(__dirname, "../../s4t", "private.key")
)
const publickey = fs.readFileSync(
  path.join(__dirname, "../../s4t", "public.key")
)

const signOptions = {
  issuer: "worawut_s",
  audience: "https://iblurblur.com",
  algorithm: "RS256",
}

const generateToken = (payload) =>
  jwt.sign(payload, privatekey, {...signOptions, expiresIn: "30d"})

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
  if (!token) {
    res.status(401).json()
    return
  }

  jwt.verify(token, publickey, signOptions, (err, decode) => {
    if (err) {
      res.status(401).json()
      return
    }

    req.sub = decode.sub
    next()
  })
}
module.exports = {
  generateToken,
  verifyToken,
}
