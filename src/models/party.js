const mongoose = require('mongoose');

const PartySchema = mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    user_owner_id: { 
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    genre_id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false
    },
    week_days: {
        type: String,
        required: false
    },
    opening_time: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('parties', PartySchema)