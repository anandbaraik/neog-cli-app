let readlineSync = require('readline-sync');

let age = readlineSync.questionInt('May i know your age..?');

if(age > 25) {
  console.log('right');
} else {
  console.log('wrong');
}