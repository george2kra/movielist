const express = require('express')
const bodyParser = require("body-parser")

const server = express()

server.use(bodyParser.json())

const port = 8989

server.listen(port, (req, res) => {
  console.log(`server started on port ${port}`)
})
