const db = require('../lib/dbConnect');

function getAllPuppies(req, res, next) {

  db.any('SELECT * from puppies;')
    .then((puppies) => {
      res.puppies = puppies;
      next();
    })
    .catch(error => next(error));
}
 // use db.none is use to in INSERTING DELETING UPDATING
function adoptPuppy(req, res, next) {
 db.none('INSERT INTO puppies(name, url) VALUES ($1, $2);', [req.body.name, req.body.url])
 .then((puppies) => {
   res.puppies = puppies
   next();
 })
  .catch(error => next(error));
}
function abandonPuppy(req, res, next) {
  db.none(`DELETE FROM puppies WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
}

function likePuppy(req, res, next) {
  // Implement increasing the likes value of the puppy by one
  db.none(`UPDATE puppies SET likes = likes + 1 WHERE id = $1;` [req.params.id])
  .then(next())
  .catch(err => next(err));
}

module.exports = {
  getAllPuppies,
  adoptPuppy,
  abandonPuppy,
  likePuppy
};
