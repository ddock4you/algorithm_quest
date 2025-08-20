/*
TODO 제목: 킹, 퀸, 룩, 비숍, 나이트, 폰 
! 문제: 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
* 입력: 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다. 5
? 출력: 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const print = (number, i) => {
    const blank = " ".repeat(number - i);
    const star = "*".repeat(i + (i - 1));
    return blank + star;
};

(() => {
    const number = Number(input);

    if (typeof number !== "number" || Number.isNaN(number)) return;

    for (let i = 1; i < number; i += 1) {
        console.log(print(number, i));
    }

    for (let i = number; i > 0; i -= 1) {
        console.log(print(number, i));
    }
})();
