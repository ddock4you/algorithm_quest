/*
TODO 제목: 나는야 포켓몬 마스터 이다솜
! https://www.acmicpc.net/problem/1620
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((value) => value.replace(/\r/g, ""));

const [n, m] = input[0].split(" ").map((n) => +n);
const list = input.slice(1, -m);
const listByNumber = { ...list };
const listByAlphabet = Object.values(listByNumber).reduce((acc, value, index) => {
    acc[value] = index;
    return acc;
}, {});

const quests = input.slice(-m);

quests.forEach((quest) => {
    const answer = isNaN(quest) ? listByAlphabet[quest] + 1 : listByNumber[Number(quest) - 1];
    console.log(answer);
});
