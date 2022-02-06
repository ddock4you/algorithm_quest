// todo 제목: 평균은 넘겠지
// ! 문제: 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.
// * 입력: 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
// * 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
// ? 출력: 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

/*
 *예제 출력
    40.000%
    57.143%
    33.333%
    66.667%
    55.556%
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((v) => v.split(" ").map((v2) => Number(v2)));

const N = input[0];
const arr = input.slice(1);
const condition = (v) => v >= 1 && v <= 1000;

arr.forEach((grade) => {
    const students = grade[0];
    const scores = grade.slice(1);

    if (condition(students)) {
        const average = scores.reduce((acc, current) => acc + current, 0) / students;
        const aboveAverageStudents = scores.reduce((acc, score) => {
            if (average < score) return acc += 1;
            return acc;
        }, 0);
        const aboveAveragePersent = (aboveAverageStudents / students * 100).toFixed(3);
        console.log(`${aboveAveragePersent}%`);
    }
});