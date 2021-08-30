const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postRouter = require('./postRouter');
const errors = require('./routerNotFound');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(errors);

app.listen(3003, () => console.log('Rodando com sucesso na porta 3003'));
