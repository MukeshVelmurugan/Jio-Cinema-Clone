const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { error } = require('console');

const app = express();
app.use(cors());
const port = 3000;

// path to the JSON file
const moviesFilePath = path.join(__dirname, 'moviesdata.json');

// utility function to read the json file
function readMoviesData() {
    try{
        const data = fs.readFileSync(moviesFilePath,'utf-8');
        return JSON.parse(data);
    }
    catch(err){
        console.error('Error reading the Json file:',err);
        return [];
    }
}

// Route to get all movies 
app.get('/movies',(req,res)=>{
    const movies = readMoviesData();
    res.json(movies);
})

// Route to get a movie by id
app.get('/movies/:id',(req,res)=>{
    const movieId = parseInt(req.params.id, 10);
    const movies = readMoviesData();
    const movie = movies.find(m => m.id === movieId);

    if (movie){
        res.json(movie);
    }
    else{
        res.status(404).json({error: 'Movie not found'});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});