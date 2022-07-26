let readlineSync = require('readline-sync');

let name = readlineSync.question('May i have your name..?');
console.log(`Hello ${name}`);