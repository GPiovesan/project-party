const Genre = require('../models/genre')

const default_genres = ['House', 'Techno', 'Hip hop', 'Trance', 'Dubstep', 'EDM', 'Disco', 'Pop', 
'Electro', 'Reggae', 'Alternative Rock', 'Trap', 'Jazz', 'Funk', 'Progressive house', 'Salsa', 'R&B', 
'Rock', 'Samba', 'Pagode']

const insertDefaultPartyGenders = async (req, res, next) => {
    
    var genres_to_add = []

    default_genres.forEach(df_genre => {
        const genre = new Genre({
            name: df_genre
        });
        genres_to_add.push(genre);
    });
    
    try {
        const savedGenres = await 
        Genre.bulkWrite
        (
            genres_to_add.map((gen) => 
            (
                    {
                        updateOne : {
                            "filter" : { "name": gen.name }, 
                            "update" : { $set : { "name" : gen.name } },
                            "upsert": true
                        }
                    }
            ))
        )
        res.json(savedGenres);
    } catch (err) {
        console.log(err)
        res.json({ message: err })
    }
}

module.exports = {
    insertDefaultPartyGenders
}