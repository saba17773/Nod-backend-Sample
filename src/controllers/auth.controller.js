const authService = require("../services/auth.service")

exports.userlogin = (req, res) => {
  authService.userlogin(req.body).then((data) => {
    // res.status(data.code).json(data)
    res.json(data)
  })
}

exports.info = (req, res) => res.json({user: {email: req.sub}})
