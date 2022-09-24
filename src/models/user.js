const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    gender: { 
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    fav_party_gender_id: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('users', UserSchema)