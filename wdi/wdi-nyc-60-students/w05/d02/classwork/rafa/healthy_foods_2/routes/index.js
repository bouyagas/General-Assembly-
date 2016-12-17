const express = require('express');

const router = express.Router();

// Get my products
const products = require('../models/product');

// What do we do when a GET request is received?
router.get('/', (req, res) => {
  const sendThisVariablesToView = {
    message: 'welcome to HEALTHIEST FOOD INC',
    myHealthyProducts: products
  };

  // res.send('<h1>hola a todos!</h1>');
  res.render('index', sendThisVariablesToView);
});

module.exports = router;
