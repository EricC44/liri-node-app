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
//require axios for omdb api
var axios = require("axios");
//This requires the spotify api as well as getting the key from the other script
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

//This is the OMDB API Key
var omdb = (keys.omdb);
//This is our Bands In Town API key
var bands = (keys.bandsInTown)
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
        case "concert-this":
        concertThis();
        break;
        case "movie-this":
        movieThis();
        break;
        case "do-this":
        doThis(userQuery);
        break;
        default:
        console.log("Im sorry, but I don't understand what you are trying to ask...")
    }
}

userPrompt(userType, userQuery);

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

function concertThis() {
    console.log(`\n...Finding ${userQuery}...\n`)
    //this requests the bands in town api
    // request(`https://rest.bandsintown.com/artists/${userQuery}/events?app_id=${bands}`, function(error, response, body) {
    //     //Assuming there is no error and the response is a code 200(which means everything is functioning as expected)
    //         if(!error && response.statusCode === 200) {
    //             //This grabs the data and formats the data through JSON as well as parsing it
    //             let theBand = JSON.parse(body);
    //             //If there is any information on this band it will prepare a for loop for the later function
    //             if(theBand.length > 0) {
    //                 //This grabs the data we are looking for and displays the results
    //                 for(i = 0; i < 1; i++) {
    //                     console.log("************************************")
    //                     console.log(`\nI think I found what you are looking for...
    //                                 \nArtist: ${theBand[i].lineup[0]}
    //                                 \nVenue: ${theBand[i].venue.name}
    //                                 \nLocation: ${theBand[i].venue.latitude}, ${theBand[i].venue.longitude}
    //                                 \nCity and Country: ${theBand[i].venue.city}, ${theBand[i].venue.country}\n`)
    //                     //This is where the moment.js require is most inportant, as we need to format the date
    //                     let date = moment(theBand[i].datetime).format("MM/DD/YYYY hh:00 A");
    //                     console.log(`\nDate and Time: ${date}\n`);
    //                     console.log("************************************");
    //                 }
    //             }
    //             //If there the api does not find any information on the band, this should pop up
    //             else {
    //                 console.log("I'm sorry, but I could not find the artist or location venue at this time...")
    //             }


    //         }
    // });

    axios.get(`https://rest.bandsintown.com/artists/${userQuery}/events?app_id=codingbootcamp`)
  .then(function (response) {
    //this for function preps to console.log all possible values of the userQuery
    for(let i = 0; i < response.data.length; i++) {
        //This if function is to make sure we only grab data from the first value only
        if(i <= 0) {
            //data 
            console.log("************************************")
            console.log(`\nI think I found what you are looking for...
                        \nArtist: ${response.data[i].lineup}
                        \nVenue: ${response.data[i].venue.name}
                        \nLocation: ${response.data[i].venue.latitude}, ${response.data[i].venue.longitude}
                        \nCity and Country: ${response.data[i].venue.city}, ${response.data[i].venue.country}\n`)
            //This is where the moment.js require is most inportant, as we need to format the date
            let date = moment(response.data[i].datetime).format("MM/DD/YYYY hh:00 A");
            console.log(`\nDate and Time: ${date}\n`);
            console.log("************************************");
        }
        else {
            console.log(`Hmm...It seems like ${userQuery} is not performing on tour right now, check your spelling or try again`)
        }
        
    }
})
  .catch(function (error) {
    console.log(`Something went wrong...${error}`);
  });

}

function movieThis() {
    console.log(`Finding ${userQuery}...`)
    //If there is nothing in the userQuery, it will put the value "mr nobody"
    if(!userQuery) {
        userQuery = "mr nobody";
    };
    //We are using axios get the data from the omdb database, then getting a response
    axios.get(`http://www.omdbapi.com/?t=${userQuery}&apikey=trilogy`)
  .then(function (response) {
        //the data that prints out
        console.log("*************************************");
        console.log(`\n I think I found what you were looking for...
                    \nTitle: ${response.data.Title}
                    \nCast: ${response.data.Actors}
                    \nRelease: ${response.data.Year}
                    \nINDB Rating: ${response.data.imdbRating}
                    \nRotten Tomatos: ${response.data.Ratings[1].Value}
                    \nCountry: ${response.data.Country}
                    \nLanguage: ${response.data.Language}
                    \nPlot: ${response.data.Plot}`)
            console.log("\n**********************************")
    })
  .catch(function (error) {
    console.log(`Something went wrong: ${error}...`);
  });
 




}
//This part of the function is going to do things with our random txt. file
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
