const app = require('./app')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const index = require('./routes/index.route')
const twitter = require('./routes/twitter.route')
const monitor = require('./services/twitter.service')

const port = process.env.PORT || 3300

server.listen(port)
monitor(io)

app.use('/', index)
app.use('/twitter', twitter)

console.log("App running on port: " + port)



