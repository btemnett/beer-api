const express = require('express')
const beerRouter = express.Router()

beerRouter.use('/', (req, res) => {
    res.send('You hit the beer route')
})

module.exports = beerRouter
