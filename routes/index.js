const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Sentiment App',
        req: req,
        res: res
    })
})

module.exports = router