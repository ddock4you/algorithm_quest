// todo 제목: 재귀함수가 뭔가요?
// ! 문제: 평소에 질문을 잘 받아주기로 유명한 중앙대학교의 JH 교수님은 학생들로부터 재귀함수가 무엇인지에 대하여 많은 질문을 받아왔다.
// ! 매번 질문을 잘 받아주셨던 JH 교수님이지만 그는 중앙대학교가 자신과 맞는가에 대한 고민을 항상 해왔다.
// ! 중앙대학교와 자신의 길이 맞지 않다고 생각한 JH 교수님은 결국 중앙대학교를 떠나기로 결정하였다.
// ! 떠나기 전까지도 제자들을 생각하셨던 JH 교수님은 재귀함수가 무엇인지 물어보는 학생들을 위한 작은 선물로 자동 응답 챗봇을 준비하기로 했다.
// ! JH 교수님이 만들 챗봇의 응답을 출력하는 프로그램을 만들어보자.
// * 입력: 교수님이 출력을 원하는 재귀 횟수 N(1 ≤ N ≤ 50)이 주어진다.
// ? 출력: 첫출력 예시를 보고 재귀 횟수에 따른 챗봇의 응답을 출력한다.

/*
 *예제 출력
     55
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = Number(fs
    .readFileSync(filePath)
    .toString());

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
const hyphen = '____';

const condition = (v) => v >= 1 && v <= 50;
const question = (length, num) => {
    const minusValue = length - num;
    const text1 = 
                  `${hyphen.repeat(minusValue)}"재귀함수가 뭔가요?"\n` +
                  `${hyphen.repeat(minusValue)}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n` +
                  `${hyphen.repeat(minusValue)}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n` +
                  `${hyphen.repeat(minusValue)}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
    const text2 = `${hyphen.repeat(length)}"재귀함수가 뭔가요?"\n` +
                  `${hyphen.repeat(length)}"재귀함수는 자기 자신을 호출하는 함수라네"`;
    const text3 = `${hyphen.repeat(minusValue)}라고 답변하였지.`;

    if (length > minusValue) {
        console.log(text1);
        question(length,  num - 1);
    } else {
        console.log(text2);
    }
    console.log(text3);
}

if (condition(N)) {
    console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');
    question(N, N);
}