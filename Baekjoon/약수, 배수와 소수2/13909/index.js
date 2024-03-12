/*
TODO 제목: 창문 닫기
! https://www.acmicpc.net/problem/13909
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = +fs
  .readFileSync(filePath)
  .toString()
  .trim();

  // const solveWindowsProblem = (N) => {
  //   let windows = new Array(N).fill(false); // 모든 창문을 닫힌 상태로 초기화
  //   for (let i = 1; i <= N; i++) {
  //     for (let j = i; j <= N; j += i) {
  //       windows[j - 1] = !windows[j - 1]; // i의 배수에 해당하는 창문의 상태를 변경
  //     }
  //   }
  //   // 열려 있는 창문의 개수를 계산
  //   const openWindows = windows.filter(status => status).length;
  //   return openWindows;
  // };
  
  // // 예제로 N = 10을 사용할 경우
  // const N = 16;
  // console.log(`열려 있는 창문의 개수: ${solveWindowsProblem(N)}`);
  // 아래 규칙으로 창문을 여는 개수가 정해져 있음. (제곱근)
  // 1 ~ 3 : 1,
  // 4 ~ 8 : 2,
  // 9 ~ 15 : 3,
  // 16 ~ 24 : 4,

console.log(Math.floor(Math.sqrt(input)));


