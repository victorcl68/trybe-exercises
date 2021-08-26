function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
      
    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}

doMath(10, 10, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

doMath(...randomNumbers)
.then(result => console.log(result))
.catch(err => console.error(err.message))
}

async function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);

  try {
  const result = await doMath(...randomNumbers);
  console.log(result);
  } catch (err) {
      console.error(err);
  }
}