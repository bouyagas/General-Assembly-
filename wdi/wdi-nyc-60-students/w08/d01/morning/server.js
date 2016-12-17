//SET UP EXPRESS SERVER IN HERE!

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const server = express();
const port = process.argv[2] || process.env.PORT || 3000;

server.set('view engine', 'ejs');
server.set('views', 'views');

server.use(logger('dev'));
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.urlencoded({ extended: true }));

server.listen(port, () => console.log(`up and running on port ${port} :)`))


server.get('/', (req, res) =>{
  res.render('index')
});
