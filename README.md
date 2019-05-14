# Liri-Bot
---
### General Info
---
* **Developer:** Eric Carlson
* **Date Online:** 5/11/2019
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

**do-this:** uses the built in *readFile()* method to access data from a prepopulated .txt file and return its information as a command/search query.

### How the bot works
---

**1. concert-this**
*<command, artist/band>*

This function calls the userType command and userQuery(artist/band) and returns the artist and other important concert info like the location and date.

![concert-this-code](https://user-images.githubusercontent.com/46227451/57681950-9805fa80-75e5-11e9-8826-3ac8bddc5104.png)

![concert-this-action](https://user-images.githubusercontent.com/46227451/57682025-bff55e00-75e5-11e9-9b58-720963372458.png)

**2. spotify-this**
*<command, artist/band>*

This function calls the userType command and userQuery(artist or band) and returns the information like artist name, album, and song name.  

![spotify-this-code](https://user-images.githubusercontent.com/46227451/57682327-71948f00-75e6-11e9-832b-7617ea06d8f2.png)

![spotify-this-action](https://user-images.githubusercontent.com/46227451/57682424-ac96c280-75e6-11e9-942e-39dab2e5a86a.png)

**3. movie-this**
*<command, movie>*

This function calls the userType command and userQuery(movie name) and returns the movie title, the year released, the IMDb and Rotten Tomatos ratings, and other important features.

![movie-this-code](https://user-images.githubusercontent.com/46227451/57682792-62621100-75e7-11e9-9d05-d167a0966ef0.png)

![movie-this-action](https://user-images.githubusercontent.com/46227451/57682822-6d1ca600-75e7-11e9-9997-bccfd9389d53.png)

**4. do-this**
*<command, enter>*

This function calles my random.txt file and plugs the info in the file to the userQuery then searches for that on the spotify api.  Uses the **fs** package.

![do-this-code](https://user-images.githubusercontent.com/46227451/57683087-de5c5900-75e7-11e9-89d4-b4bad294f069.png)

![do-this-action](https://user-images.githubusercontent.com/46227451/57683123-ecaa7500-75e7-11e9-88d3-f776804f2616.png)

## Things I want to fix and additional features
---
* When a search result comes up negative in the bandsInTown api, I want to be able to console.log the error in question
* I would love to create a log system that logs all my information to the random.txt file
* I want to edit the colors of the results so they don't all appear as one color
* Have some values that come up undefined in the spotify api to just have **-** instead of the undefined response




