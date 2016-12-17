/**
* setup express
*/

// Require Express
const express = require('express');

// Require morgan
const morgan = require('morgan');

// A new instance of the express app
const app = express();

// the port the server will listen to for connections
const port = 3000;

/**
* configure and get required modules
*/

// Allow debugging output to the terminal
app.use(morgan('dev'));

// looks inside the 'public' folder for assets like CSS, JS, Images, etc
app.use(express.static('public'));

// Express needs to be told if we are going to use a templeating engine
app.set('view engine', 'ejs');

// Get my products from the products.js file
const products = require('./products');

/**
* route incomming requests
*/

// What do we do when a GET request is received?
app.get('/', (req, res) => {
  const sendThisVariablesToView = {
    message: 'welcome to HEALTHIEST FOOD INC',
    myHealthyProducts: products
  };

  // res.send('<h1>hola a todos!</h1>');
  res.render('index', sendThisVariablesToView);
});

app.listen(port, () => {
  console.log(`Im on port ${port}`);
});
