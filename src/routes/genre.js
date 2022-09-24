const express = require('express')
const router = express.Router()
const { insertDefaultPartyGenders } = require('../controllers/genre_controller')

router.post('/party/genre/default', insertDefaultPartyGenders)
//router.get('/party/genres', getAllParties)
//router.get('/party/:id', getParty)

module.exports = {
    routes: router
}