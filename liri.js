require("dotenv").config()

var Movie = require('./movie')

var movie = new Movie()

var type = process.argv[2];

var term = process.argv.slice(3).join(" ");

if (!type) {
    type = 'movie'
}
if (!term) {
    term = 'Mr. Nobody'
}
if (type === 'movie') {
    console.log('Searching........')
    movie.findMovie(term)
}




// var spotify = new Spotify(keys.spotify);