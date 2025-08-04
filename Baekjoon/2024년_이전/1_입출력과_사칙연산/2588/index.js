// todo 제목: 곱셈
// ! 문제: (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// * 입력: 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
// ? 출력: 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

/*
    * 예제 출력
        2360
        3776
        1416
        181720
*/

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [input1, input2] = input;
let total = 0;

for(let i = 0; i < input2.length; i += 1) {
    const placeValue = input2.length - 1 - i;
    const multiple = Number(input1) * Number(input2[placeValue]);
    total += multiple * Math.pow(10, i);
    console.log(multiple);
}
console.log(total);


// 다른사람 풀이
// const fs = require('fs');
// const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// const [B0, B1, B2] = B.split('');
// const temp1 = A * B2;
// const temp2 = A * B1;
// const temp3 = A * B0;
// const sum = temp1 + Number(`${temp2}0`) + Number(`${temp3}00`);
// console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}`)