/*
TODO 제목: 가로수
! https://www.acmicpc.net/problem/2485
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v)
  .slice(1);

// 소수 판별 함수
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  // 3부터 n의 제곱근까지 홀수로 나누어보며 약수가 있는지 확인
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  // 약수가 없으면 소수
  return true;
}  

input.forEach((number) => {
  let result = number;
  while (!isPrime(result)) {
    result += 1;
  }
  console.log(result);
})

  // console.log(input);