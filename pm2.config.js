module.exports = {
    apps: [{
        name: 'SentimentApp',
        script: 'server.js',
        instances: 1,
        autorestart: true,
        watch: false,
        exec_mode: 'fork',
        env: {
            NODE_ENV: 'development',
            PORT: '3000',
        }
    }]
};