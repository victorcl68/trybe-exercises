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
