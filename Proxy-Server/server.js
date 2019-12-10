const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = 3008;

app.get('/graph/getStocks', (req, res) => {
  res.redirect('http://localhost:3001/graph/getStocks');
})

app.get('/tradestock/api/10', (req,res) => {
  res.redirect('http://localhost:3002/tradestock/api/10');
})

app.get('/ratings/getData/1', (req,res) => {
  res.redirect('http://localhost:3005/ratings/getData/1');
})

app.get('/about/getData/1', (req,res) => {
  res.redirect('http://localhost:3003/about/getData/1')
})

app.get('/earnings/getData', (req,res) => {
  res.redirect('http://localhost:3006/earnings/getData')
})

app.post('/tradestock/user/deposit', (req,res) => {
  res.redirect(307, 'http://localhost:3002/tradestock/user/deposit');
})

app.use(express.static('public'));


app.listen(port, () => {
  console.log('listening on port '+ port);
})