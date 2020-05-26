const express = require('express')
const router = express.Router()
const config = require('../config/twitter.config')

router.get('/check', (req, res ) => {
    config.verifyCredentials((err,data) => {
        res.send(err ? 'Error! '+err : 'Success: '+data.name)
    })
});

router.get('/monitor', (req, res) => {
    if (req.query.phrase) {
        res.render('monitor', {
            title: 'Twitter Monitor',
            req: req
        })
    } else {
        res.send('Error!')
    }
});

module.exports = router