require("dotenv").config();

// Require Variables-----------------------------------
var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// Input Variables--------------------------------------
var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

//Main Function----------------------------------------
UserInputs(search, term);

//Switch Funtions------------------------------------
function UserInputs(search, term) {
    switch (search) {
        case 'concert-this':
            showConcertInfo(term);
            break;
        case 'spotify-this-song':
            showSongInfo(term);
            break;
        case 'movie-this':
            showMovieInfo(term);
            break;
        case 'do-what-it-says':
            showSomeInfo();
            break;
        default:
            console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
}

//Bands in Town-----------------------------------------------
function showConcertInfo(term) {

    var queryUrl = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";

    request(queryUrl, function(error, response, body) {
        // If the request is successful
        if (!error && response.statusCode === 200) {

            var concerts = JSON.parse(body);

            for (var i = 0; i < concerts.length; i++) {

                fs.appendFileSync("log.txt", "**********EVENT INFO*********\n"); //Divider
                console.log("**********EVENT INFO*********");

                fs.appendFileSync("log.txt", i + "\n");
                console.log(i);


                fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name + "\n");
                console.log("Name of the Venue: " + concerts[i].venue.name);


                fs.appendFileSync("log.txt", "Venue Location: " + concerts[i].venue.city + "\n");
                console.log("Venue Location: " + concerts[i].venue.city);


                fs.appendFileSync("log.txt", "Date of the Event: " + concerts[i].datetime + "\n");
                console.log("Date of the Event: " + concerts[i].datetime);


                fs.appendFileSync("log.txt", "*****************************" + "\n");
                console.log("*****************************");



            }
        } else {
            console.log('Error occurred.');
        }
    });
}

//Spotify---------------------------------------------
function showSongInfo(term) {
    if (term === undefined) {
        term = "The Sign"; //default Song
    }
    spotify.search({
            type: "track",
            query: term,
            limit: 03
        },
        function(err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {

                fs.appendFileSync("log.txt", "**********SONG INFO*********\n");
                console.log("**********SONG INFO*********");


                fs.appendFileSync("log.txt", i + "\n");
                console.log(i);


                fs.appendFileSync("log.txt", "song name: " + songs[i].name + "\n");
                console.log("Song name: " + songs[i].name);


                fs.appendFileSync("log.txt", "preview song: " + songs[i].preview_url + "\n");
                console.log("Preview song: " + songs[i].preview_url);


                fs.appendFileSync("log.txt", "album: " + songs[i].album.name + "\n");
                console.log("Album: " + songs[i].album.name);


                fs.appendFileSync("log.txt", "artist(s): " + songs[i].artists[0].name + "\n");
                console.log("Artist(s): " + songs[i].artists[0].name);


                fs.appendFileSync("log.txt", "*****************************\n");
                console.log("*****************************");



            }
        }
    );
};

//OMDB---------------------------------------------------------------------
function showMovieInfo(term) {

    if (term === undefined) {

        term = "Mr. Nobody"

        fs.appendFileSync("log.txt", "-----------------------\n");
        console.log("-----------------------");


        fs.appendFileSync("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" + "\n");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");


        fs.appendFileSync("log.txt", "It's on Netflix!\n");
        console.log("It's on Netflix!");


    }
    var queryUrl = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            var movies = JSON.parse(body);

            fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
            console.log("**********MOVIE INFO*********");


            fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
            console.log("Title: " + movies.Title);


            fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
            console.log("Release Year: " + movies.Year);

            fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
            console.log("IMDB Rating: " + movies.imdbRating);

            fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies) + "\n");
            console.log("Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies));

            fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
            console.log("Country of Production: " + movies.Country);

            fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
            console.log("Language: " + movies.Language);

            fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
            console.log("Plot: " + movies.Plot);

            fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
            console.log("Actors: " + movies.Actors);

            fs.appendFileSync("log.txt", "*****************************\n");
            console.log("*****************************");


        } else {
            console.log('Error occurred.');
        }

    });
}

//Rotten Tomatoes----------------------------------------------------
function getRottenTomatoesRatingObject(data) {
    return data.Ratings.find(function(item) {
        return item.Source === "Rotten Tomatoes";
    });
}

function getRottenTomatoesRatingValue(data) {
    return getRottenTomatoesRatingObject(data).Value;
}

//function for reading out of random.txt file  
function showSomeInfo() {
    fs.readFile('random.txt', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data.split(',');
        UserInputs(dataArr[0], dataArr[1]);
    });
}