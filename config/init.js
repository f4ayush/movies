// database.js

const { Sequelize } = require('sequelize');
const mysql = require('./mysql');

const sequelize = new Sequelize(mysql.development);
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to MySQL database successfully');
  })
  .catch((error) => {
    console.error('Failed to connect to MySQL database:', error);
  });
module.exports = sequelize;
