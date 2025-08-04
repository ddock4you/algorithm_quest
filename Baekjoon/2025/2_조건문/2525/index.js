/*
TODO 제목: 오븐 시계
! https://www.acmicpc.net/problem/2525
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);
const C = Number(input[1]);

if ((A < 0 || A > 23) || (B < 0 || B > 59) || (C < 0 || C > 1000)) return;

const totalMinutes = A * 60 + B + C;
const hours = Math.floor(totalMinutes / 60);
const finalHours = hours % 24;
const minutes = totalMinutes % 60;

console.log(finalHours, minutes);
