/*
TODO 제목: 네 번째 점
! https://www.acmicpc.net/problem/3009
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item2) => Number(item2)));

let array = [[], []];
array.forEach((item, i) => {
  for (let j = 0; j < input.length; j += 1) {
    array[i].push(input[j][i]);
  }
  array[i].sort();
});
console.log(
  `${array[0][0] === array[0][1] ? array[0][2] : array[0][0]} ${
    array[1][0] === array[1][1] ? array[1][2] : array[1][0]
  }`
);

// console.log(remainder.join(" "));
