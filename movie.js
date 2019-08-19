var fs = require('fs')
var axios = require('axios')

var Movie = function() {
    var divider = "\n---------------------------------\n\n"

    this.findMovie = function(movie) {
        var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy"

        axios.get(URL).then(function(response) {
            var jsonData = response.data

            var movieData = [
                'Title: ' + jsonData.Title,
                'Release Year: ' + jsonData.Year,
                'IMDB rating: ' + jsonData.imdbRating,
                // 'Rotten Tomatoes rating: ' + jsonData.,
                'Country: ' + jsonData.Country,
                'Language: ' + jsonData.Language,
                'Plot: ' + jsonData.Plot,
                'Actors: ' + jsonData.Actors
            ].join("\n\n")

            fs.appendFile('random.txt', movieData + divider, function(err) {
                if (err) throw err;
                console.log(movieData)
            })
        })
    }
}

module.exports = Movie;