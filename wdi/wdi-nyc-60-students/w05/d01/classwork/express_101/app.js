const express = require('express');
const logger = require('morgan');


const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.set('views', './views');

app.use(logger('dev'));
app.use(express.static('public'));
// listening the port
app.listen(port, () => console.log('server is listening on port', port))

// event

app.get('/', (req, res) => {
   res.render('index', {
    message: 'This is the homepage',
   });
});


