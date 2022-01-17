// todo 제목: 시험 성적
// ! 문제: 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// ? 출력: 시험 성적을 출력한다.

/*
    *예제 출력
        A   
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const score = Number(input);

if (score >= 0 && score <= 100) {
    let grade = null;

    if (score > 89) grade = "A";
    else if (score > 79) grade = "B";
    else if (score > 69) grade = "C";
    else if (score > 59) grade = "D";
    else grade = "F";

    console.log(grade);
}
