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
  let maior = 0;
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
