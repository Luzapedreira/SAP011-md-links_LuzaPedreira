const fs = require('fs');

function mdLinks(filePath) {
  return new Promise(function(resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(err);
      
      resolve(data);
    });
  });
}

mdLinks('/README.md').then(result => console.log(result))

module.exports = {mdLinks}