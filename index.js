const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(process.env.PORT, () => logger.info(`Server connected at port 3040`))

app.use('/', require('./routes'))
