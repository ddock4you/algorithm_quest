/*
TODO 제목: 통계학
! https://www.acmicpc.net/problem/2108
*/

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input[0];
const numbers = input.slice(1).sort((a, b) => a - b);

let average = Math.round(numbers.reduce((acc, curr) => acc + curr, 0) / N);
if (average === -0) {
  average = 0;
}
const median = numbers[Math.floor(N / 2)];
const modeList = numbers.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const maxCount = Math.max(...Object.values(modeList));
const modes = Object.keys(modeList)
  .filter((key) => modeList[key] === maxCount)
  .map(Number)
  .sort((a, b) => a - b);
const modeResult = modes.length > 1 ? modes[1] : modes[0];

console.log(average);
console.log(median);
console.log(modeResult);
console.log(numbers[N - 1] - numbers[0]);
