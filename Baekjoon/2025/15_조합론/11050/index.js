/*
TODO 제목: 이항 계수 1
! https://www.acmicpc.net/problem/11050
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;

if (N < 1 || N > 10 || K < 0 || K > N) return;

function factorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

// nCk = n! / (k! * (n-k)!)
console.log(factorial(N) / (factorial(K) * factorial(N - K)));
