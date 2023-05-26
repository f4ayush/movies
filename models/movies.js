// models/movie.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/init');

const Movies = sequelize.define('Movies', {
    imdb_title_id: {
    type: DataTypes.STRING,
    
  },
  original_title: {
    type: DataTypes.STRING,
    
  },
  'year': {
    type: DataTypes.INTEGER,
    
  },
  date_published: {
    type: DataTypes.DATE,
    
  },
  genre: {
    type: DataTypes.STRING,
    
  },
  duration: {
    type: DataTypes.INTEGER,
    
  },
  language: {
    type: DataTypes.STRING,
    
  },
  description: {
    type: DataTypes.STRING,
    
  },
  reviews_from_users: {
    type: DataTypes.STRING,
    
  },
  reviews_from_critics: {
    type: DataTypes.STRING,
    defaultValue:0
    
  },
});

module.exports = Movies;
