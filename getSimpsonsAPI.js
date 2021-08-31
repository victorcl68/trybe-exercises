const express = require('express');
const bodyParser = require('body-parser');
const fsSimpsons = require('./fsFunctions')
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', (_req, res) => {
  const simpsons = fsSimpsons.getSimpsons();
  simpsons.then((simpsons) => res.status(200).json(simpsons));
})

app.get('/simpsons/:id', async(req, res) => {
    const simpsons = await fsSimpsons.getSimpsons();
    const simpson = simpsons.find(({ id }) => id === req.params.id);
    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }
    return res.status(202).json(simpson);
  }
);

app.post('/simpsons', async(req, res) => {
    const { id, name } = req.body;
    const simpsons = await fsSimpsons.getSimpsons();
    if (simpsons.some((simpson) => simpson.id === id)) {
      return res.status(409).json({ message: 'id already exists' });
    }
    simpsons.push({ id, name });
    await fsSimpsons.setSimpsons(simpsons);
    res.status(204).end();
  }
);

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ token });
})

app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen('3001', () => {
  console.log('Rodando com sucesso');
});
