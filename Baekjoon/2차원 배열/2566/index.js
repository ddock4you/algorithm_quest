/*
todo 제목: 최댓값
! 문제: <그림 1>과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.
! 예를 들어, 다음과 같이 81개의 수가 주어지면 <예제사진> 이들 중 최댓값은 90이고, 이 값은 5행 7열에 위치한다.
* 입력: 첫째 줄부터 아홉 번째 줄까지 한 줄에 아홉 개씩 수가 주어진다. 주어지는 수는 100보다 작은 자연수 또는 0이다.
? 출력: 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와 열 번호를 빈칸을 사이에 두고 차례로 출력한다. 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.

 *예제 출력
 
 ***************************
*/
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => item.split(" ").map((value) => Number(value)));

(() => {
  if (!input) return;

  let result = {
    maxNumber: 0,
    row: 0,
    col: 0,
  };

  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input[i].length; j += 1) {
      const number = input[i][j];
      if (result.maxNumber < number) {
        result = {
          maxNumber: number,
          row: i + 1,
          col: j + 1,
        };
      }
    }
  }

  console.log(`${result.maxNumber}\n${result.row} ${result.col}`);
})();

// 백준에 제출한 답
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let count = 9;
// const input = [];
// rl.on("line", (line) => {
//     if (!count) {
//         count = Number(line);
//     } else {
//         input.push(line);
//         if (input.length === count) {
//             main();
//             rl.close();
//         }
//     }
// }).on("close", () => {
//     process.exit();
// });

// const main = () => {
//     const numbers = input.map((el) => el.split(" ").map(Number));

//     let maxValue = 0;
//     let maxY = 0;
//     let maxX = 0;

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (maxValue < numbers[i][j]) {
//                 maxValue = numbers[i][j];
//                 maxY = i;
//                 maxX = j;
//             }
//         }
//     }
//     console.log(maxValue);
//     console.log(`${maxY + 1} ${maxX + 1}`);
// };
