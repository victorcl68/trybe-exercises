let n = 5;
let line = '';
if (n > 1) {
  for (let i = 0; i < n; i += 1) {
    line += '*';
  };
  for (let i = 0; i < n; i += 1) {
    console.log(line)
  };
};

let n = 5;
let inputLine = '';
for (let index = 0; index <= n; index += 1) {
  console.log(inputLine);
  inputLine = inputLine + '*';
};


let n = 5;
let inputLine = '';
let inputPosition = n;
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += '*';
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};


let n = 5;
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + '*';
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
