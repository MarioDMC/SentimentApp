const config = require('../config/twitter.config')
const sentiment = require('sentiment-spanish')

module.exports = { monitor: (io) => {
    io.on('connection', (socket) =>{
        socket.on('phrase', (phrase) => {
            var stream, count, total, streamPhrase
            if (streamPhrase) {
                resetMonitoring();
            }
            config.verifyCredentials((err, data) => {
                if(!err){
                    streamPhrase = phrase
                    count = 0
                    total = 0
                    stream = config.stream('statuses/filter', {
                        'track': streamPhrase
                    }, (stream) => {
                        console.log("Monitoring Twitter");
                        stream.on('data', (twit) => {
                            if(twit.lang === 'es' || 'en'){
                                console.log(twit.text)
                                sentiment(twit.text, (err, data) => {
                                        count++
                                        total += parseFloat(data.score)
                                        socket.emit('tweet', {
                                            count: count, 
                                            total: total
                                        })
                                })
                            }
                        })
                        inStream = stream
                        stream.on('error', (err, code) => {
                            if (code === 420 || code === 429)  {
                                console.error("This shit is dead. API limit hit")
                            }
                        });
                        stream.on('end', (response) => {
                        if (stream) {
                            console.error("This shit is dead. Stream ended unexpectedly.")
                        }
                        });
                        stream.on('destroy', (response) => {
                        console.error("This shit is dead. Stream destroyed unexpectedly")
                        });
                    })
                    socket.on('disconnect', () => {
                        if(inStream){
                            inStream.destroy()
                            inStream = false
                        }
                    });
                }else{
                    throw new Error('Unable to connect')
                }
            })
        })
    })      
    }
}