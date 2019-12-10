const express = require('express');

const app = express();
const port = 3008;

app.get('/graph/getStocks', (req, res) => {
  res.redirect('http://localhost:3001/graph/getStocks');
})

app.get('/tradestock/api/10', (req,res) => {
  res.redirect('http://localhost:3002/tradestock/api/10');
})

app.get('/questionMark.png', (req, res) => {
  res.redirect('http://localhost:3002/questionMark.png')
})

app.get('/exclamation.png', (req, res) => {
  res.redirect('http://localhost:3002/exclamation.png')
})

app.get('/arrows.png', (req, res) => {
  res.redirect('http://localhost:3002/arrows.png')
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

app.get('/news/getData', (req,res) => {
  res.redirect('http://localhost:3004/news/getData')
})


app.post('/tradestock/user/deposit', (req,res) => {
  res.redirect(307, 'http://localhost:3002/tradestock/user/deposit');
})

app.use(express.static('public'));


app.listen(port, () => {
  console.log('listening on port '+ port);
})