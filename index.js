const express = require('express')
const bodyParser = require('body-parser')
require('./models/db')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(process.env.PORT)
console.log(`Server connected at port  ${process.env.PORT}`)
app.use('/', require('./routes'))
