let readlineSync = require('readline-sync');

let num = readlineSync.questionInt('Enter max number to be printed as star..?');

// method 1
for(let i = num; i >= 1; i--) {
  let star = '*'.repeat(i);
  console.log(`${star}\n`);
}

// method 2
for(let i = num; i >= 1; i--) {
  let pattern = "";
  for(let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(`${pattern}\n`);
}