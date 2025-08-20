/*
TODO 제목: 그대로 출력하기
! https://www.acmicpc.net/problem/11718
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let words = "";

for (const line of input) {
  if (line.length > 100) return;
  words += `${line}\n`;
}

console.log(words);

