//Require the dotenv file that has our hidden spotify codes
require("dotenv").config();
//Require the Request
var request = require("request");
//Require file systems
const fs = require("fs");
//Rquire moment for Bands in Town information
//const moment = require("moment");
//Require the Spotify key page here
const keys = require("./keys.js");

//This requires the spotify api as well as getting the key from the other script
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

//This is the OMDB API Key
//var omdb = (keys.omdb);
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
        case "do-this":
        doThis(userQuery);
        break;
    }
}

userPrompt(userType, userQuery);
// spotify
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

function spotifyThisSong() {
    
    //If the query is not found or is undefinded, it will push "Ace of Base" by The Sign
    console.log(`\n ~~~~~~~~~~~Finding ${userQuery}~~~~~~~~~~~~\n`)
    if(!userQuery) {
        userQuery = "the sign ace of base"
    }
    
    //This is the format I want when I'm searching for a song
    spotify.search({
        //Type: is the song title, Query: Referes to the information regarding that query, and Limit: takes a maximum number of queries, in this case we only want one
        type: "track",
        query: userQuery,
        limit: 1
    }, 
    //This function will either return an error or it will pull the data we are requesting
    function(error, data) {
        if(error) {
         console.log(`\nError: ${error}\n`);
         return;
        }

        console.log("I think I know what you are looking for...")
        //This returns all of the data around the song of choice
        console.log("****************************************")
        console.log(`\nArtist(s): ${data.tracks.items[0].artists[0].name}\n`);
        console.log(`\nSong Title: ${data.tracks.items[0].name}\n`);
        console.log(`\nAlbum: ${data.tracks.items[0].album.name}\n`);
        console.log(`\nPreview: ${data.tracks.items[0].preview_url}\n`);
        console.log("****************************************")
        
    });
}
function doThis() {
    //Use the file systems method to access the random.txt page
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) {
            return console.log(`Error occured: ${error}`);
        }
        //Grab the data from the txt file and seperate the objects with the split method
        var dataArray = data.split(",");
        //Take the objects from the txt file and pass it through our userQuery parameters
        userType = dataArray[0];
        userQuery = dataArray[1];
       

        //call the function with the new parameters
        userPrompt(userType, userQuery);
    });


}
