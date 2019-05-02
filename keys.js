console.log('The keys have loaded successfully!')

//This is the spotify key preping to be exported
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.bandsInTown = {
    id: process.env.BANDSINTOWN_ID
}

exports.omdb = {
    id: process.env.OMDB_ID
}

exports.mapquest = {
    id: process.env.MAPQUEST_ID
}