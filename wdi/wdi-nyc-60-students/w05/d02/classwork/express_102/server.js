const express = require('express');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => console.log('Server listening on port', port));


app.get('/', (req, res) => {

  const compliments = [
  'People behind you in class think you are the perfect height.',
  'Your instructors think you are amazing.',
  'Your posture during breaks effectively masks your exhaustion.',
  'Your commit messages are an inspiration to us all',
  'Your fingers are magic on the keys',
  'You are the moon of my life...my sun and star'
];

  let random = Math.floor(Math.random() * compliments.length);
  let randomMessage = compliments[random];

 res.render('index', {
   greeting: "Hello Welcome to Metrix",
   compliment: randomMessage
 });
});
