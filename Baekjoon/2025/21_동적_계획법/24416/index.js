/*
TODO 제목: 알고리즘 수업 - 피보나치 수 1
! https://www.acmicpc.net/problem/24416
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let count1 = 0;
let count2 = 0;

function fib(n) {
  if (n === 1 || n === 2) {
    count1 += 1;
    return 1
  };
  return (fib(n - 1) + fib(n - 2));
}

function fibonacci(n) {
  const f = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    count2 += 1;
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

fib(input);
fibonacci(input);
console.log(count1, count2);