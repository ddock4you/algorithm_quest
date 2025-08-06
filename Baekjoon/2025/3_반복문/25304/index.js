/*
TODO 제목: 영수증
! https://www.acmicpc.net/problem/25304
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split("\n");

const [totalPrice, itemCount] = input.map(Number);

// 기본 조건 검사
if (totalPrice < 1 || totalPrice > 1000000000) {
  console.log("No");
  return;
}
if (itemCount < 1 || itemCount > 100) {
  console.log("No");
  return;
}

// 단일 순회로 검증과 계산을 동시에 수행
let actualTotal = 0;
let isValid = true;

for (let i = 2; i < input.length; i++) {
  const [price, count] = input[i].split(" ").map(Number);
  
  // 개별 아이템 검증
  if (price < 1 || price > 1000000 || count < 1 || count > 10) {
    isValid = false;
    break;
  }
  
  // 총합 계산
  actualTotal += price * count;
}

// 결과 출력
if (!isValid) {
  console.log("No");
} else {
  console.log(actualTotal === totalPrice ? "Yes" : "No");
}
