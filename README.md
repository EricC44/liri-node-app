# Liri-Bot
---
### General Info
---
* **Developer:** Eric Carlson
* **Date Online:** 5/13/2019
* **Built With:** Node.js, Javascript
* **APIs Used:** Spotify, BandsInTown, and OMDB

### About Liri Bot
---
This project is called Liri.  Liri is almost the exact same as Siri, however Siri is a **Speech** Interpretation and Recognition.  Liri is known as a **Language** Interpretation and Recognition.  This Liri is done using the *Node.js command line* that takes parameters and returns data.

### Package requirements & Commands
---
*Note: You cannot skip this step or you cannot run the node packages*

**Node Package** | **Install Command** | **About** | **Link** 
------------ | ------------- | ------------ | -------              
**Dotenv** | *Command Line: 'npm install dotenv'* | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. | [Dotenv](https://www.npmjs.com/package/dotenv) 
**Axios** | *Command Line: 'npm install axios'*  | *Promise* based HTTP client for the browser and node.js | [Axios](https://www.npmjs.com/package/axios)
**Moment** | *Command Line: 'npm install moment'* | A lightweight JavaScript date library for **parsing, validating, manipulating, and formatting dates.** | [Moment](https://www.npmjs.com/package/moment)
**Fs** | *Command Line: 'npm install file-system'* | This module make file opertaion apis simple, you don't need to care the dir exits. and the api is same as node's filesystem. **This is no exists time cost for this plugin.** | [Fs](https://www.npmjs.com/package/file-system)

#### Commands for the Liri Bot

**concert-this:** Uses the API **bandsInTown** that takes the userQuery from the command line and returns the **name of the Artist or Band**, **the place name**, **the latitude and longitude**, **the city and country, and date and time.**

**spotify-this:** Uses the API **spotify** that takes the userQuery from the command line and returns the **artist**, **song name**, **song link**, and **album name**

**movie-this:** Uses the API **OMDB** that takes the userQuery from the command line that returns the **title**, **actors**, **year**, **imdb Rating**, **rotten tomatos**, **country of creation**, **languages**, **plot**

**do-this:** 
