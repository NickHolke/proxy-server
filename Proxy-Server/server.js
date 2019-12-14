const express = require('express');

const app = express();
const port = 3008;

// TradeStock/////
app.get('/tradestock/api/', (req,res) => {
  req.query.id = req.query.id || 1;
  res.redirect(`http://34.214.68.82/tradestock/api/?id=${req.query.id}`);
})

app.get('/questionMark.png', (req, res) => {
  res.redirect('http://34.214.68.82/questionMark.png')
})

app.get('/exclamation.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation.png')
})

app.get('/exclamation-button.png', (req, res) => {
  res.redirect('http://34.214.68.82/exclamation-button.png')
})

app.get('/arrows.png', (req, res) => {
  res.redirect('http://34.214.68.82/arrows.png')
})

app.get('/arrows_black.png', (req, res) => {
  res.redirect('http://34.214.68.82/arrows_black.png')
})

// Graph //
app.get('/graph/getStocks', (req, res) => {
  req.query.id = req.query.id || 1;
  res.redirect(`http://54.153.91.76/graph/getStocks/?id=${req.query.id}`);
})

app.get('/graph/img/:photo', (req, res) => {
  res.redirect(`http://54.153.91.76/graph/img/${path.basename(req.url)}`)
})

app.get('/navbar/img/:photo', (req, res) => {
  res.redirect(`http://54.219.176.99/navbar/img/${path.basename(req.url)}`)
})

// About //
app.get('/about/getData/', (req,res) => {
  req.query.id = req.query.id || 1;
  res.redirect(`http://13.52.245.200/about/getData/?id=${req.query.id}`)
})

// Ratings //
app.get('/ratings/getData/', (req,res) => {
  req.query.id = req.query.id || 1;
  res.redirect(`http://54.153.72.27/ratings/getData/?id=${req.query.id}`);
})

app.get('/ratings/:photo', (req, res) => {
  res.redirect(`http://54.153.72.27${req.url}`)
})

// News //
app.get('/news/getData', (req,res) => {
  req.query.id = req.query.id || 1;
  res.redirect(`http://54.193.67.89/news/getData/?id=${req.query.id}`)
})

// Earnings //
app.get('/earnings/getData', (req,res) => {
  req.query.id = req.query.id || 1;
  res.redirect(`http://54.67.103.66/earnings/getData`)
})

app.use(express.static('public'));


app.listen(port, () => {
  console.log('listening on port '+ port);
})