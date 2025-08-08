/*
TODO 제목: 바구니 뒤집기
! https://www.acmicpc.net/problem/10811
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
if (N < 1 || N > 100 || M < 1 || M > 100) return;

const Baskets = Array.from({ length: N }, (_, i) => i + 1);
const changeGuide = input.slice(1).map((item) => item.split(" ").map(Number));

const isValid = changeGuide.every(([i, j]) => {
  if ((i < 1 || i > N) || (j < 1 || j > N)) return false;
  const temp = Baskets.slice(i - 1, j);
  for (let k = i; k <= j; k += 1) {
    Baskets[k - 1] = temp[j - k];
  }
  return true;
});

if (!isValid) return;

console.log(Baskets.join(" "));