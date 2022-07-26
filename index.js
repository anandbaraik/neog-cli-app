let readlineSync = require('readline-sync');

let userName = readlineSync.question('May i know your name..? ');

console.log(`Welcome ${userName}, DO you know Anand..?`);

let questions = [
  {
    question: 'Where do anand live? presently ?',
    answer: 'bhubaneswar'
  },
  {
    question: 'What is Anand\'s profession? ',
    answer: 'software engineer'
  },
  {
    question: 'Where is Anand\'s native place? ',
    answer: 'jharkhand'
  }
];

let score = 0;
function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toLocaleLowerCase() === answer) {
    score += 2;
    console.log("You were right!");
  } else {
    score -= 1;
    console.log("You were wrong!");
  }
  console.log("Your current score is " + score);
  console.log("===============================");
}

for (let i = 0; i < questions.length; i++) {
  let { question, answer } = questions[i];
  play(question, answer);
}
console.log("\n\nYay! your highest score is " + score);