const User = require('../models/user')

const addUser = async (req, res, next) => {
    console.log(req.body)
    const user = new User({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        age: req.body.age,
        fav_party_gender_id: req.body.fav_party_gender_id
    });
    console.log(user)
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
    
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        res.json({ message: err })
    }
}

const getUser = async (req, res, next) => {
    try {
        console.log(req.params)
        const user = await User.findById(req.params.id)
        res.json(user);
    } catch (err) {
        res.json({ message: err })
    }
}

const deleteUser = async (req, res, next) => {
    try {
        console.log('Deleting User')
        const removedUser = await User.remove({_id: req.params.id})
        res.json(removedUser)
    } catch (err) {
        res.json({ message: err })
    }
}

const patchUser = async (req, res, next) => {
    try {
        const patchedUser = await User.updateOne(
            {_id: req.params.id}, //Compare user id
            { $set: {
                name: req.body.name,
                gender: req.body.gender,
                email: req.body.email,
                age: req.body.age,
                fav_party_gender_id: req.body.fav_party_gender_id
                }
            });
        res.json(patchedUser)
    } catch (err) {
        res.json({ message: err })
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    deleteUser,
    patchUser
}