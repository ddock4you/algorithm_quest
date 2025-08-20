// todo 제목: 소수 찾기
// ! 문제: 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
// * 입력: 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.
// ? 출력: 주어진 수들 중 소수의 개수를 출력한다.

/*
 *예제 출력
      3
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((v) =>
        v
            .trim()
            .split(" ")
            .map((v2) => Number(v2))
    );

const [N, array] = input;

const conditionN = (v) => v <= 100;
const conditionNumber = (v) => v <= 1000;

if (conditionN(N)) {
    const primeNumber = array.reduce((acc, number) => {
        if (!conditionNumber(number)) return acc;
         if (number === 2 || number === 3) {
           acc.push(number);
            return acc;
         }
        if (number <= 1 || number % 2 === 0) return acc;
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                return acc;
            }
        }
        acc.push(number);
        return acc;
    }, []);

    console.log(primeNumber ? primeNumber.length : 0);
}
