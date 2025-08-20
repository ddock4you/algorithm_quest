/*
TODO 제목: 골드바흐 파티션
! https://www.acmicpc.net/problem/17103
*/
// 짝수 n을 두 소수의 합으로 나타낼 수 있는 경우의 수
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v)
  .slice(1);

// 에라토스테네스의 체
let isPrime = (num) => {
  let sieve = new Array(num).fill(true);

  for (let i = 2; i <= num; i++) {
    if (sieve[i]) {
      for (let j = i + i; j <= num; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve;
}

let primes = isPrime(Math.max(...input));
let result = '';

const goldbachPartition = (evenNumber) => {
  let count = 0;
  // 순서만 다른 것은 제외하기 위해 나누기 2
  for (let i = 2; i <= evenNumber / 2; i++) {
    if (primes[i] && primes[evenNumber - i]) {
      count++;
    }
  }
  return result += `${count}\n`;
};


input.forEach(number => {
  goldbachPartition(number);
});

console.log(result);

// console.log(result);

