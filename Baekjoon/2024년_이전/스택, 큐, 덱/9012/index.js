/*
TODO 제목: 괄호
! https://www.acmicpc.net/problem/9012
*/
console.time();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n").map(v => v.replace(/\r/g, ""))
  .slice(1);


const func = (words) => {
  let count = 0;

  for (const word of words) {
    if (word === '(') count += 1;
    if (word === ')') count -= 1;
    if (count < 0) return 'NO';
  }

  return count === 0 ? 'YES' : 'NO'
}

const result = input.map((item) => {
  return func(item);
})

console.log(result.join('\n'));
console.timeEnd();

