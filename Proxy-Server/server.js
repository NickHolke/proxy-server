const express = require('express');
const request = require('request');
var cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const port = 3008;

// app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   request('http://localhost:3001/', (err, response, body) => {
//     if (err) {
//       res.status(400);
//       res.send(err);
//     } else {
//       console.log(response);
//       res.send(body)
//     }
//   })

//   // request('http://www.google.com', (err, response, body) => {
//   //   res.send(body)
//   // })
// })

app.listen(port, () => {
  console.log('listening on port '+ port);
})