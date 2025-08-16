/*
TODO 제목: queuestack
! https://www.acmicpc.net/problem/24511
* 풀이: 스택은 통과, 큐만 영향을 줌. 큐의 초기값들을 역순으로 모으고 새로운 값들을 붙임.
* 시간 복잡도: O(N+M)
* 공간 복잡도: O(N+M)
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number); // 자료구조 타입 (0:큐, 1:스택)
const B = input[2].split(" ").map(Number); // 각 자료구조 초기 원소
const M = Number(input[3]);
const C = input[4].split(" ").map(Number); // 삽입할 수열

const resultQueueValues = [];

// 큐인 자료구조들의 초기 원소만 역순으로 모은다.
// 스택인 자료구조는 들어온 값이 그대로 다시 나가므로 무시한다.
for (let i = 0; i < N; i++) {
  // 자료구조가 큐(0)인 경우에만 초기 원소를 결과에 추가
  if (A[i] === 0) {
    resultQueueValues.push(B[i]);
  }
}

// 큐의 특성상 마지막에 나오는 것은 가장 먼저 들어갔던 초기값 중 가장 '오른쪽'에 있던 큐의 값이다.
// 따라서 resultQueueValues는 현재 정방향으로 저장되어 있으므로, 뒤집어야 한다.
resultQueueValues.reverse();

// 이제 새로운 삽입 값들을 resultQueueValues 뒤에 붙인다.
// 새로운 값들은 스택을 모두 통과하거나 큐의 맨 뒤에 추가되는 과정을 거쳐 최종적으로 출력된다.
const finalResult = [...resultQueueValues, ...C];

console.log(finalResult.slice(0, M).join(" "));

