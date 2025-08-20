/*
TODO 제목: 단어 길이 재기
! https://www.acmicpc.net/problem/2743
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(input.length);



