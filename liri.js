require("dotenv").config()

var Movie = require('./movie')

var movie_this = new Movie()

var type = process.argv[2];

var term = process.argv.slice(3).join(" ");

if (!type) {
    type = 'movie_this'
}
if (!term) {
    term = 'Mr. Nobody'
}
if (type === 'movie_this') {
    console.log('Searching........')
    movie_this.findMovie(term)
}




// var spotify = new Spotify(keys.spotify);