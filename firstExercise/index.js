const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./userRouter');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);

app.listen(3001, () => console.log('Rodando com sucesso na porta 3001'));
