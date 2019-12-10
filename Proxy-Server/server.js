const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = 3008;

app.get('/graph/getStocks', (req, res) => {
  res.redirect('http://localhost:3001/graph/getStocks');
})

app.use(express.static('public'));


app.listen(port, () => {
  console.log('listening on port '+ port);
})