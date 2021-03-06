const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

//Carregar as Rotas

const indexRoute = require('./routes/index-route.js')
const productRoute = require('./routes/product-router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute)
app.use('/products', productRoute)

module.exports = app