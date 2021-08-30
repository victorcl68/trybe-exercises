const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const axios = require('axios');
var fetchUrl = require('fetch').fetchUrl;
const { isValidToken } = require('./validation');
const ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/btc', isValidToken, (_req, res) => {
  fetchUrl(ENDPOINT, function(err, meta, body){
      const resultInString = body.toString();
      const resultInJSON = JSON.parse(resultInString);
      return res.status(200).json(resultInJSON);
    });
  }
);

app.listen(3002, () => console.log('Rodando com sucesso na porta 3002'));
