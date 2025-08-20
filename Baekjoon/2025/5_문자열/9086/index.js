/*
TODO 제목: 문자열
! https://www.acmicpc.net/problem/9086
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [, ...words] = input;
for (const word of words) {
  console.log(`${word[0]}${word[word.length - 1]}`);
}



