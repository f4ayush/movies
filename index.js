require('dotenv').config()
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path')
const db = require('./config/init');
const {importData} = require("./controllers/data");
app.use(express.urlencoded());


// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// use express router
app.use('/', require('./routes'));

importData();
app.listen(port, function(err){
  if (err){
      console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});

