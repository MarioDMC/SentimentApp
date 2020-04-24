const config = require('../config/twitter.config')
const Sentiment = require('sentiment-spanish')
var sentiment = new Sentiment()

const statusConnection = () => {
    config.verifyCredentials((err, data) => {
        return !err ? true : false 
    })
}

const monitoring = (phrase) => {
    var stream, count, total
    try{
        if(statusConnection()){
            stream = config.stream('statuses/filter', {
                'track': phrase
            }, (stream) => {
                stream.on('data', (data) => {
                    if(data.lang === 'es' || 'en'){
                        sentiment(data.text, (err, data) => {
                                count++
                                total += data.score
                        })
                    }
                })
            })
            return stream
        }else{
            return new Error('Unable to connect')
        }
    }catch(err){
        console.log(err)
    }
}

const showImage = (count, total) => {
    var average = total / count
    switch(average){
        case average > 0.5:
            break;
        case average < 0.5:
            break;
        default:
            return "none"  
    }
}

module.exports = {
    monitoring,
    showImage
}