'use strict';

const express = require('express');

const router = express.Router();

// Get my Product Model
const Product = require('../models/product');

// My products Model instantiated
const products = new Product();

// The root route
router.get('/', (req, res) => {
  const sendThisVariablesToView = {
    message: 'welcome to HEALTHIEST FOOD INC',
    myHealthyProducts: products.getProducts()
  };

  // res.send('<h1>hola a todos!</h1>');
  res.render('index', sendThisVariablesToView);
});

// The expired route
router.get('/expired', (req, res) => {
  const sendThisVariablesToView = {
    message: 'welcome to HEALTHIEST FOOD INC',
    myExpiredProducts: products.getExpiredProducts()
  };

  // res.send('<h1>hola a todos!</h1>');
  res.render('expired', sendThisVariablesToView);
});

module.exports = router;
