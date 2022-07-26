let readlineSync = require('readline-sync');

let hometown = readlineSync.question('What is Anand\'s hometown..?');
let score = 0;
if(hometown.toLocaleLowerCase() == 'bokaro') {
  score ++;
}
console.log('your score is '+score);