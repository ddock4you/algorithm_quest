/*
TODO 제목: 붙임성 좋은 총총이
! https://www.acmicpc.net/problem/26069
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(t => t.trim().split(" "));

const N = Number(input[0]);
const dance = new Set();
dance.add("ChongChong");

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i];
  if (dance.has(a) || dance.has(b)) {
    dance.add(a);
    dance.add(b);
  }
}
console.log(dance.size);