const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()
var corsOptions = {
  origin: [
    "http://example.com",
    "http://localhost:3000",
    "https://www.w3schools.com",
  ],
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json())

app.use(require("./src/routes/routes"))
const port = 4000

app.listen(port, () => {
  console.log(`Litesning on port : ${port}`)
  console.log("press Ctrl + C to quit!")
})
