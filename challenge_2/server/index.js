const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const controllers = require('./controllers/bitcoin');

const PORT = 8558;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'))

app.get('/api/bitcoin', (req, res) => {
  controllers.getDataForLatestMonth((err, response) => {
  	if (err) {
  	  res.sendStatus(400);
  	  return;
  	}
  	res.status(200).send(response.data.bpi);
  })
});

app.get('/api/bitcoin/search', (req, res) => {
  const { startMonth, endMonth } = req.query;
  controllers.getDataForSpecifiedMonths(startMonth, endMonth, (err, response) => {
    if (err) {
      res.sendStatus(400);
      return;
    }
    res.status(200).send(response.data.bpi);
  });
});

app.listen(PORT, () => {console.log(`Listening on localhost at port: ${PORT}`)});