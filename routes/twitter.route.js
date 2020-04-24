const express = require('express')
const router = express.Router()
const config = require('../config/twitter.config')

router.get('/', (req, res ) => {

    config.verifyCredentials((err,data) => {
        res.send(err ? 'Error! '+err : 'Success: '+data)
    })
 });

 module.exports = router