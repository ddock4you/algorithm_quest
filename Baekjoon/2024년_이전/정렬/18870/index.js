/*
TODO 제목: 좌표 압축
! https://www.acmicpc.net/problem/18870
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, x] = input;
x = x.split(" ").map((v) => +v);
const sorted = Array.from(new Set([...x])).sort((a, b) => b - a);
const extractArray = sorted.reduce((acc, value, i) => {
  acc[value] = sorted.length - i - 1;
  return acc;
}, {});

let result = [];
// const result = [];

x.forEach(
  (value) =>
    extractArray[value]
      ? (result += `${extractArray[value]} `)
      : (result += `0 `)
  //   extractArray[value] ? result.push(extractArray[value]) : result.push(0)
);

console.log(result);
// console.log(result.join(" "));

// input.sort((a, b) => a[0] - b[0]).map((array) => console.log(`${array[0]} ${array[1]}`));

// localeCompare: 두 문자열을 유니코드로 변환 후 결과를 반환해주는 메서드(앞의 문자열이 뒤의 문자열보다 숫자가 큰지 작은지 비교)
