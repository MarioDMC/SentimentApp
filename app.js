const express = require('express')
const app = express()
const index = require('./routes/index.route')
const twitter = require('./routes/twitter.route')
const path = require('path')

app.set('views', path.join('views'))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/twitter', twitter)

app.listen(process.env.PORT || 3000)