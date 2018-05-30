import readlineSync from 'readline-sync';
import { getRandomNum, attempt } from '../lib';

const startCalculatorGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let userAnswer;
  let rightAnswer;
  const sum = (num1, num2) => num1 + num2;
  const minus = (num1, num2) => num1 - num2;
  const multi = (num1, num2) => num1 * num2;
  const operators = ['+', '-', '*'];
  const actions = [sum, minus, multi];
  for (let i = 0; i < attempt; i += 1) {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const index = getRandomNum(0, 2);
    userAnswer = readlineSync.question(`Question: ${num1} ${operators[index]} ${num2}\n`);
    rightAnswer = actions[index](num1, num2);
    console.log(`Your answer: ${userAnswer}`);
    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startCalculatorGame;
