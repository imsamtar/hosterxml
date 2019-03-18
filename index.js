const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/users', require('./users/main'))
app.use(express.static('public'))

app.listen(process.env.PORT || 8081)
