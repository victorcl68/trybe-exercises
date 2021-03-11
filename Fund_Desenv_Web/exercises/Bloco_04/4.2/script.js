//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index +=1)
  console.log(numbers[index]);

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let soma = 0;
for (index = 0; index < numbers.length; index +=1)
  soma = soma + numbers[index];
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let somaparamedia = 0;
for (index = 0; index < numbers.length; index +=1)
  somaparamedia = somaparamedia + numbers[index];
console.log(somaparamedia/numbers.length);

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let somaparamedia = 0;
let media = 0;
for (index = 0; index < numbers.length; index +=1)
  somaparamedia = somaparamedia + numbers[index];
media = somaparamedia/numbers.length;
console.log(media);
if (media > 20) {
  console.log('valor maior que 20');
}
else if (media < 20) {
  console.log('valor menor que 20');
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let bigger = numbers[0];
for (index = 1; index < numbers.length; index +=1)
  if (numbers[index] > bigger) {
    bigger = numbers[index];
  }
console.log(bigger);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impar = 0
for (index = 0; index < numbers.length; index +=1)
  if (numbers[index] % 2 !== 0) {
    impar += 1;
  }
if (impar === 0){
  console.log('nenhum valor ímpar encontrado')
}
else{
  console.log(impar)
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let smaller = numbers[0];
for (index = 1; index < numbers.length; index +=1)
  if (numbers[index] < smaller) {
    smaller = numbers[index];
  }
console.log(smaller);
