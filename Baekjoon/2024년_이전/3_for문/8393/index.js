// todo 제목: 합
// ! 문제: n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
// ? 출력: 1부터 n까지 합을 출력한다.

/*
    *예제 출력
        6
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

if (input >= 1 && input <= 10000) {
    let sum = 0;
    for (let i = 1; i <= input; i += 1) sum += i;
    console.log(sum);
}
