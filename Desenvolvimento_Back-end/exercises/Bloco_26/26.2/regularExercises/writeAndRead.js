const fs = require('fs').promises;


async function myFunc(){
  const myArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const myFiles = myArray.map((file, index) => {
    fs.writeFile(`./file${index + 1}.txt`, file)
  })
  await Promise.all(myFiles)
  
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];
  
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);

}

myFunc()
