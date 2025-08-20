/*
TODO 제목: 알고리즘 수업 - 알고리즘의 수행 시간 6
! https://www.acmicpc.net/problem/24266
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const result = (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);
console.log(`${result}`);
console.log(3);

// 수열의 시그마 공식을 사용
// https://carrot-farmer.tistory.com/57
