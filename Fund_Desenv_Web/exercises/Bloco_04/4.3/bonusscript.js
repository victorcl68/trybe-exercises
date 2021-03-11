let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col === controlLeft || col === controlRight || line === middle) {
      outputLine += '*';
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

let divisors = 0;
let numberToCheck = 8;

for (let number = 1; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) 
  divisors += 1;
}

if (divisors === 2) {
  console.log(numberToCheck + ' é primo');
} else {
  console.log(numberToCheck + ' não é primo');
};
