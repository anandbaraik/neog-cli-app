//import required packages
let readlineSync = require('readline-sync');
let chalk = require("chalk");
const log = console.log;

//welcome user
let userName = readlineSync.question(chalk.white.bgBlue.bold('May i know your name please..?'));
log(chalk.magenta(`\nWelcome ${userName}, let's see how well DO YOU KNOW ANAND..?`));

//let user know rules
log(chalk.bgMagenta.bold("\nRules: "));
log(chalk.bgBlue("1. There are a total of 5 questions. All are compulsory."));
log(chalk.bgBlue("2. Each right answer will give you 2 points."));
log(chalk.bgBlue("3. 1 point will be deducted for each wrong answers.\n\n"));

let questions = [
  {
    question: 'What is Anand\'s good name? ',
    answer: 'anand'
  },
  {
    question: 'Where did Anand was born? ',
    answer: 'simdega'
  },
  {
    question: 'Where does Anand live presently? ',
    answer: 'bhubaneswar'
  },
  {
    question: 'Which sport is Anand\'s favourite..? ',
    answer: 'cricket'
  },
  {
    question: 'what does Anand like to do in spare time..? ',
    answer: 'reading'
  }
];

let score = 0;
function play(question, answer) {
  let userAnswer = readlineSync.question(chalk.bgBlue(question));
  if (userAnswer.toLocaleLowerCase() === answer) {
    score += 2;
    log(chalk.green("\nYou were right!"));
  } else {
    score -= 1;
    log(chalk.red("\nYou were wrong!"));
  }
  log("Your current score is " + score);
  log(chalk.cyan("*************************\n"));
}

for (let i = 0; i < questions.length; i++) {
  let { question, answer } = questions[i];
  play(question, answer);
}
log(chalk.bgMagenta("\n\nYay! your highest score is " + score));