const Movies = require("../models/movies");
const sequelize = require("../config/init")
const fs = require('fs')
const csv = require('csv-parser');
// const app = express();
// const { Sequelize, DataTypes } = require('sequelize');
module.exports.importData = async () => {
  try {
    // Check if any movies already exist in the database
    const tableExists = await sequelize
      .getQueryInterface()
      .showAllTables()
      .then((tables) => tables.some((table) => table === "Movies"));

    if (!tableExists) {
      await Movies.sync();
      console.log("Movies table created successfully.");
    }

    const existingMoviesCount = await Movies.count();
    console.log(existingMoviesCount)
    if (existingMoviesCount === 0) {
      const results = [];
      fs.createReadStream("IMDb-movies.csv")
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", async () => {
          await sequelize.sync();
        
          await Movies.bulkCreate(results);
          console.log("Data imported successfully.");
        });
    } else {
      console.log("Data already exists in the database. Skipping import.");
    }
  } catch (error) {
    console.error("An error occurred while importing data:", error);
  }
};

