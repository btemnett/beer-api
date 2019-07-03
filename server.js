const express = require('express')
const mongoose = require('mongoose')
const app = express()
const beerRouter = require('./routes/beerRouter')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/beers', beerRouter)

app.use('/', (req, res) => {
    res.send('You hit the base route')
})

mongoose.connect('mongodb://localhost:27017/beers', {
    useNewUrlParser: true
})

mongoose.connection.on('connected', () =>{
    console.log('Connected to beers db')
})

mongoose.connection.on('error', () =>{
    console.error(`error connecting to beers db:\n${error}`)
})

const port = process.env.PORT || 9998
app.listen(9999, () => {
    console.log(`Listening on port ${port}...`)
})