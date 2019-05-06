console.log('The keys have loaded successfully!')

//This is the spotify process.env call preping to be exported
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
//This is the Bands in Town process.env call preparing to be exported
//exports.bandsInTown = {
    //id: process.env.BANDSINTOWN_ID
//}
//This is the OMDB process.env call to prepare to be exported 
//exports.omdb = {
    //id: process.env.OMDB_ID
//}
//This is the mapqu
//exports.mapquest = {
    //id: process.env.MAPQUEST_ID
//}