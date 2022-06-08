const express = require('express')
const bodyParser = require('body-parser')
require('./models/db')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(3040)
console.log('Server connected at port 3040')
app.use('/', require('./routes'))
