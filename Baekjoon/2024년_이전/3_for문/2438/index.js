// todo 제목: 별 찍기 - 1
// ! 문제: 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// * 입력: 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// ? 출력: 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

/*
 *예제 출력
 *
 **
 ***
 ****
 *****
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const condition = (v) => v >= 1 && v <= 100;
let answer = String();
let star = String();
if (condition(input)) {
    for (let i = 0; i < input; i += 1) {
        star += "*";
        answer += `${star}\n`;
    }
}

const lastIndex = answer.lastIndexOf("\n");
console.log(answer.slice(0, lastIndex));
