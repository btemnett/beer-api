const express = require('express')
const beerRouter = express.Router()
const Beer = require('../models/beer')

beerRouter.post('/', (req, res) => {
    let beer = new Beer()
    beer.name = req.body.name
    beer.rating = req.body.rating
    beer.save((err, beer) => {
        if(err) {
            res.send(err)
        }
        else
        {
            res.send(`Saved: ${beer}`)
        }
    })
})

beerRouter.get('', (req, res) => {
    Beer.find((err, beers) => {
        if(err)
        {
            res.send(err)
        }
        else
        {
            res.json(beers)
        }
    })
})

beerRouter.get('/:beer_id', (req, res) => {
    Beer.findById(req.params.beer_id, (err, beer) => {
        if(err) res.send(err)
        else res.json(beer)
    })
})

beerRouter.use('/', (req, res) => {
    res.send('You hit the beer route')
})

module.exports = beerRouter
