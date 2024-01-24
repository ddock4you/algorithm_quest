/*
TODO 제목: 알고리즘 수업 - 점근적 표기 1
! https://www.acmicpc.net/problem/24313
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [f, n, c] = input;
const [f1, f2] = f.split(" ");
console.log({ f1, f2, n, c });

// 수열의 시그마 공식을 사용
// https://carrot-farmer.tistory.com/57
