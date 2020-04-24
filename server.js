const app = require('./app')
const http = require('http')
const server = http.createServer(app)
server.listen(process.env.PORT || 3000)
const io = require('socket.io').listen(server)
const index = require('./routes/index.route')
const twitter = require('./routes/twitter.route')
const service = require('./services/twitter.service')

service.monitor(io)

app.use('/', index)
app.use('/twitter', twitter(io))



