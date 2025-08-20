/*
TODO 제목: 블랙잭
! https://www.acmicpc.net/problem/2798
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map((item) => Number(item)));

const goal = input[0][1];
const cards = input[1];

let sum = 0;
for (let i = 0; i < cards.length - 2; i += 1) {
    for (let j = i + 1; j < cards.length - 1; j += 1) {
        for (let k = j + 1; k < cards.length; k += 1) {
            const cardSum = cards[i] + cards[j] + cards[k];
            if (cardSum > sum && cardSum <= goal) {
                sum = cardSum;
                if (sum === goal) break;
            }
        }
    }
}

console.log(sum);
