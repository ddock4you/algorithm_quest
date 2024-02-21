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
  .map((v) => v.split(" ").map((n) => +n))
  .slice(1);
// const [a, b] = input;
const gcd = (a, b) => {
  while (b !== 0) {
    let rest = a % b;
    [a, b] = [b, rest];
  }
  return a;
};

// 가로수 사이의 거리
const distance = [];
for (let i = 0; i < input.length - 1; i++) {
  distance.push(input[i + 1] - input[i]);
}

// 가로수 사이의 거리 최대공약수
// distgcd 변수 가로수사이의 거리를 구하기 위해 첫 번째 가로수 사이로 변수 설정
let distgcd = distance[0];
for (let i = 0; i < distance.length; i++) {
  distgcd = gcd(distgcd, distance[i]);
}

// 가로수 사이에 추가되는 부분 계산
let result = 0;
for (let i = 0; i < distance.length; i++) {
  // 가로수 사이의 거리가 최대공약수랑 같지 않은 것만 계산
  if (distance[i] > distgcd) {
    result += distance[i] / distgcd - 1;
  }
}

console.log(result);

// 1. 간격의 최대공약수:
// 문제에서 주어진 가로수들의 위치는 양의 정수로 주어집니다.
// 가로수들의 간격을 최대공약수로 나누면, 모든 가로수들의 간격이 같아집니다.
// 따라서 최대공약수를 구하는 것이 중요합니다.
// 2. 새로 심어야 하는 가로수의 최소수:
// 가로수들의 간격을 최대공약수로 나눈 값에서 1을 뺀 값을 모두 더하면, 새로 심어야 하는 가로수의 최소수를 구할 수 있습니다.
// 이는 기존 가로수들 사이에만 새로운 가로수를 심을 수 있기 때문입니다.
// 예를 들어, 가로수가 (1, 3, 7, 13)의 위치에 있다면 (5, 9, 11)의 위치에 가로수를 더 심으면 모든 가로수들의 간격이 같아집니다.
// 따라서 새로 심어야 하는 가로수의 최소수는 3입니다.
