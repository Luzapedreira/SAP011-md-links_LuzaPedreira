const { soma, read } = require('./index.js');
const chalk = require('chalk');

const resultado = soma(1, 3);

console.log(chalk.white.bgBlue(resultado));

read('./test/files/noLinks.md');