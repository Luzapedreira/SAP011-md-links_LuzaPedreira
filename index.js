const { match } = require('assert');
const fs = require('fs');

function mdLinks(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(err);
      const pattern = /\[([^\]]+)\[\((https?[^)]+)\)/g;
      const matches = [...data.matchAll(pattern)];
      const links = matches.map(match => {
        return {
          href: match[2],
          text: match[1],
          file: filePath
        }
      })
    });
  });
}

mdLinks('./README.md').then((result) => console.log(result));

module.exports = { mdLinks };
