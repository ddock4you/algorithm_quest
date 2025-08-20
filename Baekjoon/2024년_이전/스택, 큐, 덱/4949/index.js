/*
TODO 제목: 균형잡힌 세상
! https://www.acmicpc.net/problem/4949
*/
// console.time();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(`\n`).map(v => v.replace(/\r/g, ""))


const sentenceCheck = (sentence) => {
  let stack = [];

  for (const letter of sentence) {
    if (letter === '(' || letter === '[') {
      stack.push(letter);
    } else if (letter === ')') {
      if (stack.pop() !== '(') {
        return 'no'
      }       
    } else if (letter === "]") {
      if (stack.pop() !== '[') {
        return 'no'
      }
    }
  }
  
  return stack.length === 0 ? 'yes' : 'no'
}

const func = () => {
  const result = [];
  for (const sentence of input) {
    if (sentence === '.') break;
    result.push(sentenceCheck(sentence));
  }
  return result.join("\n");
}

console.log(func(input));
// console.timeEnd();

