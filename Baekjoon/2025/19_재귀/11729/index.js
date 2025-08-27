/*
TODO 제목: 하노이 탑 이동 순서
! https://www.acmicpc.net/problem/11729
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let count = 0;
const result = [];

function hanoi(n, start, end, temp) {
  if (n === 1) {
    result.push(`${start} ${end}`);
    count++;
  } else {
    hanoi(n - 1, start, temp, end);
    result.push(`${start} ${end}`);
    count++;
    hanoi(n - 1, temp, end, start);
  }
}

hanoi(input, 1, 3, 2);

console.log(count);
console.log(result.join("\n"));
