/*
TODO 제목: 개수 세기
! https://www.acmicpc.net/problem/10807
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const number = Number(input[0]);
const array = input[1].split(" ").map(Number);
const value = Number(input[2]);

if ((number < 1 || number > 100) || (value < -100 || value > 100)) return;

let matchNumber = 0;
for (const element of array) {
  if (element < -100 || element > 100) return;
  if (element === value) matchNumber++;
}

console.log(matchNumber);