const express = require('express');
const router = express.Router();
const { getAllPuppies, adoptPuppy, abandonPuppy, likePuppy } = require('../../models/puppy');

// handle all the routes

// get all puppies
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

// Implement POST to adopt a puppy
router.post('/', adoptPuppy, (req,res) =>{
   res.json({message: 'successfull post puppy'});
});

// Implement PUT to like a puppy
router.put('/like/:id', (req,res) => {
   res.json({message: 'successfull liked puppy'});
})

// Implement DELETE to abandon a puppy :(
router.delete('/:id', abandonPuppy, (req, res) => {
  res.json({message: 'Successfully deleted puppy'});
});

module.exports = router;
