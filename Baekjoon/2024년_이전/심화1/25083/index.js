// TODO 제목: A+B
// ! 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// * 입력: 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// ? 출력: 첫째 줄에 A+B를 출력한다.

/*
* 예제 출력
    ,r'"7
r`-_   ,'  ,/
 \. ". L_r'
   `~\/
      |
      |
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

console.log(`         ,r'"7r\`-_   ,'  ,/\n \\. ". L_r'\n   \`~\\/\n      |\n      |`);
