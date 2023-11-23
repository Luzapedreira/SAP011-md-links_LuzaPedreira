const fs = require('fs');
function soma(a, b){
  return a + b;
}

function read(filePath){
  fs.readFile(filePath, 'utf-8', (err, data) =>{
    if(err) throw err;
    console.log(data);
  });
}

module.exports = { soma, read };
