const fs = require('fs');

function mdLinks(caminhoDoArquivo, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
      if (err) reject(err); 
      const regex = /\[([^\]]+)\]\((https?[^)]+)\)/g;
      let match;
      const links = [];
      while ((match = regex.exec(data)) !== null) { 
        links.push({
          href: match[2],
          text: match[1],
          file: caminhoDoArquivo,

        });
      }

      if (options.validate === false) {
        resolve(links); 
      } else {
        const linksValidados = links.map((link) => fetch(link.href)
          .then((response) => { 
            const linkValidado = { ...link };
            linkValidado.status = response.status;
            if (response.status >= 200 && response.status <= 299) { 
              linkValidado.ok = 'ok';
            } else {
              linkValidado.ok = 'fail';
            }
            return linkValidado;
          })
          .catch(() => {
            const linkValidado = { ...link };
            linkValidado.ok = 'fail';
            linkValidado.status = 'ENOTFOUND';
            return linkValidado;
          }));
        resolve(Promise.all(linksValidados));
      }
    });
  });
}

// mdLinks('./oneFile.md', { validate: true }).then((result) => console.log(result));

module.exports = { mdLinks };