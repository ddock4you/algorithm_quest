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


const func = (words) => {
  let bigCount = 0;
  let smallCount = 0;

  for (const word of words) {
    if (word === '(') smallCount += 1;
    if (word === ')') smallCount -= 1;
    if (word === '[') bigCount += 1;
    if (word === ']') bigCount -= 1;

    if (bigCount < 0 || smallCount < 0) return 'NO';
  }

  return bigCount === 0 && smallCount === 0 ? 'YES' : 'NO'
}

const result = input.map((item) => {
  if (item === '.') return;
  return func(item);
})
console.log(result);
console.log(result.join("\n"));
// console.timeEnd();

