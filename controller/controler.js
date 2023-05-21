const asyncHandler = require('express-async-handler')
const Movies = require("../models/movieModels");

const getMovies = asyncHandler(async(req, res) => {
    const movie = await Movies.find();
    res.status(200).json(movie);
});


const postMovies = asyncHandler(async(req, res) => {
    console.log("this is the requested body :", req.body);
    const {movieName,actorName,rating} = req.body;
    if(!movieName || !actorName || !rating){
        res.status(400);
        throw new Error("all feilds are mandatory !");
    }
    const movie = await Movies.create({
        movieName,actorName,rating,
    });
    res.status(201).json(movie);
});


const getMovie = asyncHandler(async(req, res) => {
    const movie = await Movies.findById(req.params.id);
    if(!movie){
        res.status(404);
        throw new Error("movie not found !");
    }
    res.status(201).json(movie);
});


const deleteMovie = asyncHandler(async(req, res) => {
    const movie = await Movies.findById(req.params.id);
    if(!movie){
        res.status(404);
        throw new Error("movie not found ");
    }
    await Movie.remove();
    res.status(200).json(movie);
});


const updateMovie = asyncHandler(async(req, res) => {
    const movie = await Movies.findById(req.params.id);
    if(!movie){
        res.status(404);
        throw new Error("movie not found !");
    }
    const updateNewcontact = await Movies.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateNewcontact);
    
});
module.exports = {getMovies,postMovies,getMovie,deleteMovie,updateMovie};