# LIRI
Language Interpretation and Recognition Interface.


# ABOUT PROJECT

LIRI is a Language Interpretation and Recongnition Interface. LIRI is a command line node app that takes in parameters and gives back data. The user has the option of using four commands in conjunction with specific parameters associated with the commands. 
The Commands are:
    - concert-this
    - spotify-this-song
    - movie-this
    - do-what-it-says

# Step by Step Guide

1. Open you terminal such as Bash.
2. Navigate to the folder that contains the liir.js file.
3. Depending on the command you run, the output will vary.

     EXAMPLE 1: Run the concert-this command

        node liri.js concert-this <name of artist or band>

    OUTPUT: The system will display a list of all events and locations where the artist or band will perform. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

            img

    EXAMPLE 2: Run the spotify-this-song command

        node liri.js spotify-this-song <name of the song>

    OUTPUt: The system will display a list of information associated with the song. It can result in multiple records. The system will also log all the results in the log.txt file. See screen-shot below:

            img

    EXAMPLE 3: Run the movie-this command

        node liri.js movie-this <name of the movie>

    OUTPUT: The system will display information associated with the movie. The system will also log all the results in the log.txt file. See screen-shot below:

            img

    EXAMPLE 4: Run the do-what-i-say command

        node liri.js do-what-i-say 

    OUTPUT: he system will read the text in the random.txt file, and perform the comman listed in the random.txt file. See screen-shot below:

            img




# TECHNOLOGIES USED

- Javascript
- Node.js
- Node Packages:
    - Node-Spotify-API
    - Axios
    - Moment
    -DotEnv
- APIs used:
    - Bands in Town
    - OMDB
- Git
- GitHub