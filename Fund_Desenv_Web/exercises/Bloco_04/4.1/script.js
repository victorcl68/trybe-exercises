//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.
let a = 10;
let b = 5;

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let c = 15;
let d = 20;

if (c > d) {
  console.log(c)
}
else if (d > c) {
  console.log(d)
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let e = 70;
let f = 60;
let g = 50;

if (e > f && e > g) {
  console.log(e);
}
else if (f > e && f > g) {
  console.log(f);
}
else {
  console.log(g);
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let number = 0;

if (number > 0) {
  console.log('positive');
}
else if (number < 0) {
  console.log('negative');
}
else {
  console.log('zero');
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let h = 30;
let c = 60;
let d = 90;

if (h < 0 || c < 0 || d < 0){
  console.log('erro');
}
else if ((h + c + d) === 180) {
  console.log('true');
}
else if ((h + c + d) !== 180) {
  console.log('false');
}
