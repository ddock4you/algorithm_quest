// todo 제목: 재귀의 귀재
// ! 문제: 평정휘는 후배들이 재귀 함수를 잘 다루는 재귀의 귀재인지 알아보기 위해 재귀 함수와 관련된 문제를 출제하기로 했다.
// ! 팰린드롬이란, 앞에서부터 읽었을 때와 뒤에서부터 읽었을 때가 같은 문자열을 말한다.
// ! 팰린드롬의 예시로 AAA, ABBA, ABABA 등이 있고, 팰린드롬이 아닌 문자열의 예시로 ABCA, PALINDROME 등이 있다.
// ! 어떤 문자열이 팰린드롬인지 판별하는 문제는 재귀 함수를 이용해 쉽게 해결할 수 있다.
// ! 아래 코드의 isPalindrome 함수는 주어진 문자열이 팰린드롬이면 1, 팰린드롬이 아니면 0을 반환하는 함수다.
// ! 정휘는 위에 작성된 isPalindrome 함수를 이용하여 어떤 문자열이 팰린드롬인지 여부를 판단하려고 한다.
// ! 구체적으로는, 문자열 $S$를 isPalindrome 함수의 인자로 전달하여 팰린드롬 여부를 반환값으로 알아낼 것이다.
// ! 더불어 판별하는 과정에서 recursion 함수를 몇 번 호출하는지 셀 것이다.
// ! 정휘를 따라 여러분도 함수의 반환값과 recursion 함수의 호출 횟수를 구해보자.
// * 입력: 첫째 줄에 테스트케이스의 개수 $T$가 주어진다. ($1 \leq T \leq 1\,000$)
// * 둘째 줄부터 $T$개의 줄에 알파벳 대문자로 구성된 문자열 $S$가 주어진다. ($1 \leq \vert S\vert \leq 1\,000$)
// ? 출력: 각 테스트케이스마다, isPalindrome 함수의 반환값과 recursion 함수의 호출 횟수를 한 줄에 공백으로 구분하여 출력한다.

/*
     * 예제 입력
    5
    AAA
    ABBA
    ABABA
    ABCA
    PALINDROME
*/

/*
    *예제 출력
    1 2
    1 3
    1 3
    0 2
    0 1
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs.readFileSync(filePath).toString());

// * 처음 내가 푼 풀이
// const N = input;
// const condition = (v) => v >= 1 && v <= 50;
// const hyphen = '____';
// const question = (answer, length, num) => {
//     const minusValue = length - num;
//     const commonText = `${hyphen.repeat(minusValue)}"재귀함수가 뭔가요?"`;

//     const text1 =
//                   `${hyphen.repeat(minusValue)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n` +
//                   `${hyphen.repeat(minusValue)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n` +
//                   `${hyphen.repeat(minusValue)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
//     const text2 = `${hyphen.repeat(length)}"재귀함수는 자기 자신을 호출하는 함수라네"`;
//     const text3 = `${hyphen.repeat(length - minusValue)}라고 답변하였지.`;

//     if (answer === 'answer1') {
//         console.log(commonText);
//         if (length !== minusValue) {
//             console.log(text1)
//         } else {
//             console.log(text2)
//         }
//     } else {
//         console.log(text3);
//     }

//     if (num === 0) return;
//     return question(answer, length,  num - 1);
// }

// if (condition(N)) {
//     console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');
//     question('answer1', N, N);
//     question('answer2', N, N);
// }

// * 다른사람이 푼 문제
// const num = Number(input);
// let str = '';

// console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

// function cs(line, currentNum) {
//     if (num !== currentNum) {
//         str += `${line}"재귀함수가 뭔가요?"
//         ${line}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
//         ${line}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
//         ${line}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
//         `;
//         currentNum++;
//         cs(line + '____', currentNum);
//     } else {
//         str += `${line}"재귀함수가 뭔가요?"
//         ${line}"재귀함수는 자기 자신을 호출하는 함수라네"
//         `;
//     }
//     str += `${line}라고 답변하였지.
//         `;
// }

// cs('', 0, num);
// console.log(str);

const N = input;
const hyphen = "____";

const condition = (v) => v >= 1 && v <= 50;
const question = (length, num) => {
    const minusValue = length - num;
    const text1 =
        `${hyphen.repeat(minusValue)}"재귀함수가 뭔가요?"\n` +
        `${hyphen.repeat(
            minusValue
        )}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n` +
        `${hyphen.repeat(
            minusValue
        )}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n` +
        `${hyphen.repeat(
            minusValue
        )}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
    const text2 =
        `${hyphen.repeat(length)}"재귀함수가 뭔가요?"\n` +
        `${hyphen.repeat(length)}"재귀함수는 자기 자신을 호출하는 함수라네"`;
    const text3 = `${hyphen.repeat(minusValue)}라고 답변하였지.`;

    if (length > minusValue) {
        console.log(text1);
        question(length, num - 1);
    } else {
        console.log(text2);
    }
    console.log(text3);
};

if (condition(N)) {
    console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
    question(N, N);
}
