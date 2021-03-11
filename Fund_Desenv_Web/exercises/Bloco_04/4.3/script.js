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
