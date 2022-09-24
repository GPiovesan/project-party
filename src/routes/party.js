const express = require('express')
const router = express.Router()
const {addParty, getAllParties, getParty} = require('../controllers/party_controller')

router.post('/party', addParty)
router.get('/parties', getAllParties)
router.get('/party/:id', getParty)

module.exports = {
    routes: router
}