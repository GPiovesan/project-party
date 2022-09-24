const express = require('express')
const router = express.Router()
const {addUser, getAllUsers, getUser, deleteUser, patchUser } = require('../controllers/user_controller')


router.post('/user', addUser)
router.get('/users', getAllUsers)
router.get('/user/:id', getUser)
router.delete('/user/:id', deleteUser)
router.patch('/user/:id', patchUser)

module.exports = {
    routes: router
}