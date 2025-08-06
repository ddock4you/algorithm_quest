/*
TODO 제목: 코딩은 체육과목 입니다
! https://www.acmicpc.net/problem/25314
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs
  .readFileSync(filePath)
  .toString().trim());

if (input >= 4 && input <= 1000 && input % 4 === 0) {
const result = "long ".repeat(input / 4) + "int";

console.log(result);  
}