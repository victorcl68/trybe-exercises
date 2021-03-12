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
