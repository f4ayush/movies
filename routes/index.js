const express = require('express');

const router = express.Router();
const movies = require('../controllers/movies');

router.get('/', movies.allMovies);
router.get('/movies', movies.getFiltered);

module.exports = router;