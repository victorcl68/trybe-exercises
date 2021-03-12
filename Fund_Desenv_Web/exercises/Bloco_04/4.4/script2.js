function verificaPalindrome(palavra) {
  let word = palavra.toLowerCase();
  let arrayLetras = word.split("");
  let isPalindrome = true;
  for (let index in arrayLetras) {
    if (arrayLetras[index] != word[(word.length - 1) - index]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
}

console.log(verificaPalindrome('Arara'));

function indiceMaiorValor(array) {
  let maior = array[0];
  let maiorIndice = 0;
  for (let i in array) {
    if (array[i] > maior) {
      maior = array[i];
      maiorIndice = i;
    } else {
    }
  }
  return maiorIndice;
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

function indiceMaiorValor(array) {
  let menor = array[0];
  let menorIndice = 0;
  for (let i in array) {
    if (array[i] < menor) {
      menor = array[i];
      menorIndice = i;
    } else {
    }
  }
  return menorIndice;
}

console.log(indiceMaiorValor([2, 4, 6, 7, 10, 0, -3]));

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

function maisRepetido(numeros) {
  let repetido = 0;
  let num = 0;
  let indexRepetido = 0;
  for (let index in numeros) {
    let verifica = numeros[index];
    for (let index2 in numeros) {
      if (verifica === numeros[index2]) {
        num++;
      }
    }
    if (num > repetido) {
      repetido = num;
      indexRepetido = index;
    }
    num = 0;
  }
  return numeros[indexRepetido];
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
