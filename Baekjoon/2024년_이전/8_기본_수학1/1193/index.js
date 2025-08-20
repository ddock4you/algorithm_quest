// todo 제목: 분수찾기
// ! 문제: 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
// ! 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
// ! X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
// ? 출력: 첫째 줄에 분수를 출력한다.


/*
   * 예시
   1/1	1/2	1/3	1/4	1/5	…
   2/1	2/2	2/3	2/4	…	…
   3/1	3/2	3/3	…	…	…
   4/1	4/2	…	…	…	…
   5/1	…	…	…	…	…
   …	…	…	…	…	…


   1/1
   1/2 2/1
   3/1 2/2 1/3
   1/4 2/3 3/2 4/1
   5/1 4/2 3/3 2/4 1/5
*/

/*
 *예제 출력
      1/2
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

let num = input;
const condition = (v) => v >= 1 && v <= 1000000000;

if (condition(num)) {
   let group = 0;
   while (num > 0) {
      group += 1;
      num -= group;
   }
   if (group % 2 === 0) {
      console.log(`${group + num}/${Math.abs(num) + 1}`);
   } else {
      console.log(`${Math.abs(num) + 1}/${group + num}`);
   }
}