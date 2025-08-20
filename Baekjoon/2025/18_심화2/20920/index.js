/*
TODO 제목: 영단어 암기는 괴로워
! https://www.acmicpc.net/problem/20920
*/


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");


// 자주 나오는 단어일수록 앞에 배치한다.
// 해당 단어의 길이가 길수록 앞에 배치한다.
// 알파벳 사전 순으로 앞에 있는 단어일수록 앞에 배치한다

const [N, M] = input[0].split(" ").map(Number);
const words = input.slice(1).map((word) => word.trim()).filter((word) => word.length >= M);
const wordCountList = words.reduce((acc, curr) => {
  if (acc[curr] && acc[curr].count) {
    acc[curr].count = acc[curr].count + 1;
  } else {
    acc[curr] = { count: 1, length: curr.length };
  }
  return acc;
}, {});

const sortedWords = Object.keys(wordCountList).sort((a, b) => {
  if (wordCountList[a].count === wordCountList[b].count) {
    if (wordCountList[a].length === wordCountList[b].length) {
      return a.localeCompare(b);
    }
    return wordCountList[b].length - wordCountList[a].length;
  }
  return wordCountList[b].count - wordCountList[a].count;
});

console.log(sortedWords.join("\n"));
