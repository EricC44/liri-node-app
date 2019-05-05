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