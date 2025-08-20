// TODO 제목: 사칙연산
// ! 문제: 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
// * 입력: 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// ? 출력: 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

/*
    * 예제 출력
        10
        4
        21
        2
        1
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const input1 = Number(input[0]);
const input2 = Number(input[1]);

if (input1 >= 1 || input2 <= 10000) {
    console.log(input1 + input2);
    console.log(input1 - input2);
    console.log(input1 * input2);
    console.log(Math.floor(input1 / input2));
    console.log(input1 % input2);
}