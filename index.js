const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ "message": `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  const ageInNumber  = Number(age);
  if(ageInNumber > 17) {
    return res.status(200).json({ "message": `Hello, ${name}` });
  }
  if(ageInNumber <= 17) {
    return res.status(401).json({ "message": "Unauthorized" });
  }
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  const ageInNumber  = Number(age);
  return res.status(200).json({ "message": `Seu nome é ${name} e você tem ${ageInNumber} anos de idade` })
})

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Rodando com sucesso')
});
