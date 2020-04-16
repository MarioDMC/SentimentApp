const express = require('express')
const app = express()
const index = require('./routes/index')
const path = require('path')

app.set('views', path.join('views'))
app.set('view engine', 'ejs')

app.use('/', index)

app.listen(process.env.PORT)