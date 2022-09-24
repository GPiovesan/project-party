const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//Middleware for parsing data to json
app.use(bodyParser.json())
app.use(cors())

//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true } ,
    () => console.log('Connected to DB!')
)

//Import Routes
const partyRoute = require('../routes/party')
const userRoute = require('../routes/user')
const genreRoute = require('../routes/genre')

app.use('/', partyRoute.routes)
app.use('/', userRoute.routes)
app.use('/', genreRoute.routes)

//Start listening to the server
app.listen(3000);