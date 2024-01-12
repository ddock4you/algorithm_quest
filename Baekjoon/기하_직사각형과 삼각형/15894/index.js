/*
TODO 제목: 수학은 체육과목 입니다
! https://www.acmicpc.net/problem/15894
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

console.log(input * 4);

// console.log(remainder.join(" "));
