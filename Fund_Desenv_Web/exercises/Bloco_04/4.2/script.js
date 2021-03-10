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
