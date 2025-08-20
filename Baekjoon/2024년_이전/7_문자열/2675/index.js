// todo 제목: 문자열 반복
// ! 문제: 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.
// ! 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.
// * 입력: 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다.
// * 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 
// ? 출력: 각 테스트 케이스에 대해 P를 출력한다.

// todo QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

/*
 *예제 출력
    AAABBBCCC
    /////HHHHHTTTTTPPPPP
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.trim().split(' '));


const N = Number(input[0]);
const arr = input;

const condition = (v) => v >= 1 && v <= 1000;

if (condition(N)) {
    const sum = arr.reduce((acc, current) => {
        const num = Number(current[0]);
        const word = current[1].split('');

        const result = word.reduce((acc2, current2) => acc2 += current2.repeat(num),[]);
        console.log(result);
    });
}