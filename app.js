const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join('views'))
app.set('view engine', 'ejs')

app.use(express.static('public'));

module.exports = app

