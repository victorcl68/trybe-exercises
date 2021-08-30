const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const teamRouter = require('./teamRouter');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamRouter);

app.listen(3004, () => console.log('Rodando com sucesso na porta 3004'));
