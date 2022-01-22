// todo 제목: N 찍기
// ! 문제: 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
// ? 출력: 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

/*
    *예제 출력
        5
        4
        3
        2
        1
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const condition = (v) => v <= 100000;
let answer = String();

if (condition(input)) {
    for (let i = 0; i < input; i += 1) answer += `${input - i}\n`;
}
const lastIndex = answer.lastIndexOf("\n");
console.log(answer.slice(0, lastIndex));
