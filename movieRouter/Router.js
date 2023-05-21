const express = require('express');
const {getMovies, postMovies,getMovie,updateMovie,deleteMovie} = require('../controller/controler.js')

const router = express.Router()

router.route('/').get(getMovies).post(postMovies);
router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);
module.exports = router;