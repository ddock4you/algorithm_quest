/*
TODO 제목: 과제 안 내신 분..?
! https://www.acmicpc.net/problem/5597
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const array = Array.from({ length: 30 }, (_, i) => false);

const isValid = input.every((item) => {
  if (item < 1 || item > 30) return false;
  array[item - 1] = true;
  return true;
});

if (!isValid) return;

const unSubmitted = array.reduce((acc, item, index) => {
  if (!item) acc.push(index + 1);
  return acc;
}, []);

console.log(unSubmitted.join("\n"));

// 개선 전 코드 (시간 복잡도 O(N^2), 공간 복잡도 O(N))
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// const array = Array.from({ length: 30 }, (_, i) => i + 1);

// const isValid = input.every((item) => {
//   if (item < 1 || item > 30) return false;
//   array.splice(array.indexOf(item), 1);
//   return true;
// });

// if (!isValid) return;
// console.log(array.join("\n"));