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
const keyIfy = require(keys.spotify);

//This is the OMDB API Key
var omdb = (keys.omdb);
//This is our users command and input, where the input can be multiple words because of slice and join.
var userType = process.argv[2];
var userQuery = process.argv.slice(3).join("");