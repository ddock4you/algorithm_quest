/*
TODO 제목: 공 넣기
! https://www.acmicpc.net/problem/10810
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [maxNumber, length] = input[0].split(" ").map(Number);
const result = Array(maxNumber).fill(0);

if (maxNumber < 1 || maxNumber > 100 || length < 1 || length > 100) return;

const isValid = input.slice(1).every((line) => {
  const [start, end, ballNumber] = line.split(" ").map(Number);

  if (
    start < 1 ||
    start > maxNumber ||
    end < 1 ||
    end > maxNumber ||
    ballNumber < 1 ||
    ballNumber > maxNumber
  ) {
    return false;
  }
  
  result.fill(ballNumber, start - 1, end);
  return true;
});

if (!isValid) return;

console.log(result.join(" "));