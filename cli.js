#!/usr/bin/env node
// const fs = require('fs');

// const { mdLinks, validarLinks, stats } = require('./index.js');

// const filePath = process.argv[2];
// const opcaoValidate = process.argv.includes('--validate');
// const opcaoStats = process.argv.includes('--stats');

// // eslint-disable-next-line import/order
// const chalk = require('chalk');

// if (opcaoValidate) {
//   mdLinks(filePath)
//     .then((links) => validarLinks(links))
//     .then((resultados) => {
//       if (resultados.length === 0) {
//         console.log(chalk.bgRed.black('Nenhum link encontrado'));
//         return;
//       }
//       resultados.forEach((resultado) => {
//         console.log(chalk.cyan(`URL: ${resultado.href}`));
//         console.log(chalk.yellow(`File: ${resultado.file}`));
//         console.log(chalk.bgGray.blue(`${resultado.ok ? 'Status: ok' : 'Status: fail'} ${resultado.status}`));
//         console.log();
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// } else if (opcaoStats) {
//   mdLinks(filePath)
//     .then((links) => stats(links))
//     .then((estatisticas) => {
//       console.log(chalk.bgCyan.black(`Total: ${estatisticas.total}`));
//       console.log(chalk.bgCyan.black(`Únicos: ${estatisticas.unique}`));
//       console.log(chalk.bgRed.black(`Broken: ${estatisticas.broken}`));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// } else {
//   mdLinks(filePath)
//     .then((links) => {
//       if (links.length === 0) {
//         console.log(chalk.bgRed.black('Nenhum link encontrado'));
//         return;
//       }
//       links.forEach((link) => {
//         console.log(`URL: ${link.href}`);
//         console.log(`File: ${link.file}`);
//         console.log();
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
