const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true  
    }
})

module.exports = mongoose.model('genres', GenreSchema)