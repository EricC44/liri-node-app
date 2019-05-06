//Require the dotenv file that has our hidden spotify codes
require("dotenv").config();
//Require the Request
var request = require("request");
//Require file systems
const fs = require("fs");
//Rquire moment for Bands in Town information
const moment = require("moment");
//Require the Spotify key page here
const keys = require("./keys.js");

//This requires the spotify api as well as getting the key from the other script
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

//This is the OMDB API Key
var omdb = (keys.omdb);
//This is our users command and input, where the input can be multiple words because of slice and join.
var userType = process.argv[2];
var userQuery = process.argv.slice(3).join("");
//This function is a switch function to cycle to the correct type of query, if nothing applies to what has been typed, it will come up with message
//saying nothing is found.
function userPrompt(userType, userQuery) {

    switch(userType) {
        case "spotify-this":
        spotifyThisSong();
        break;
    }
}


function spotifyThisSong() {
    //If the query is not found or is undefinded, it will push "Breaking the Habit" by Linkin Park
    if(!userQuery) {
        userQuery = "the sign ace of base"
    }
    console.log(`\n ~~~~~~~~~~~Finding ${userQuery}~~~~~~~~~~~~\n`)
    //This is the format I want when I'm searching for a song
    spotify.search({
        //Type: is the song title, Query: Referes to the information regarding that query, and Limit: takes a maximum number of queries, in this case we only want one
        type: "track",
        query: userQuery,
        limit: 1
    }), 
    //This function will either return an error or it will pull the data we are requesting
    function(error, data) {
        if(error) {
            return console.log(`\nError: ${error}\n`);
        }
        //Data that was collected from the spotify api
        var spotifyArry = data.tracks.items;
        //A for loop that prints out the useful information of the information
        for(i = 0; i < spotifyArry.length; i++) {
            console.log("\n****************************************************\n")
            console.log("I think I have found what you are looking for")
            console.log(`\nArtist: ${data.tracks.items[i].album.artists[0].name}\n
                         \nSong: ${data.tracks.items[i].name}\n
                         \nAlbum: ${data.tracks.items[i].album.name}\n
                         \nLink: ${data.tracks.items[i].external_urls.spotify}\n`)
            console.log("\n****************************************************\n")
        }
    }
}