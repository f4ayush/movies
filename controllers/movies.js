const Movies = require('../models/movies');
const sequelize = require("../config/init")

module.exports.allMovies = async function(req, res){
    
        try {
          const movies = await Movies.findAll();
          res.render('movies', { movies });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while retrieving movies.' });
        }
    }

module.exports.getFiltered = async (req, res) => {
    try {
      const genre = req.query.genre;
      const language = req.query.lang;
      let movies;
  
      if (genre) {
        movies = await Movies.findAll({
          where: sequelize.where(sequelize.fn('LOWER', sequelize.col('genre')), genre.toLowerCase())
        });
      } else if (language) {
        movies = await Movies.findAll({
          where: sequelize.where(sequelize.fn('LOWER', sequelize.col('language')), language.toLowerCase())
        });
      } else {
        // Handle the case when no query parameter is provided
        movies = [];
      }
  
      res.render('movies', { movies });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'An error occurred while retrieving movies.' });
    }
  }