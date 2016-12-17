const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Server listening to port ', port));

app.get('/', (req, res) => {
  res.send('Express has been born!');
});
