/**
* setup express
*/

const express = require('express');

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

// looks indise the 'public' folder for assets like CSS, JS, Images, etc
app.use(express.static('public'));

// Express needs to be told if we are going to use a templeating engine
app.set('view engine', 'ejs');

// Import the router that will respond to request to the '/' route
const indexRouter = require('./routes/index');

/**
* route incomming requests
*/

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Im on port ${port}`);
});
