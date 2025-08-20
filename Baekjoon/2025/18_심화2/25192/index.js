/*
TODO 제목: 인사성 밝은 곰곰이
! https://www.acmicpc.net/problem/25192
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(t => t.trim());

const N = Number(input[0]);
let gomgomEmoticonCount = 0;
let currentSessionUsers = new Set();

if (N < 1 || N > 100000) return;

for (let i = 1; i <= N; i++) {
  const user = input[i];
  if (user.length > 20) return;

  if (user === "ENTER") {
    gomgomEmoticonCount += currentSessionUsers.size;
    currentSessionUsers.clear();
  } else {
    currentSessionUsers.add(user);
  }
}

gomgomEmoticonCount += currentSessionUsers.size;

console.log(gomgomEmoticonCount);