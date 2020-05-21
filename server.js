const app = require('./app')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io').listen(server)
const index = require('./routes/index.route')
const twitter = require('./routes/twitter.route')
const service = require('./services/twitter.service')

const PORT = process.env.PORT

server.listen(PORT)
service.monitor(io)

app.use('/', index)
app.use('/twitter', twitter(io))

console.log("App running on port: " + PORT)



