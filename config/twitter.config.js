var twitter = require('ntwitter');

var twitt = new twitter({
  consumer_key: 'Twitter',
  consumer_secret: 'API',
  access_token_key: 'keys',
  access_token_secret: 'go here'
});

module.exports = twitt

