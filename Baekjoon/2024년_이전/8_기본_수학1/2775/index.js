// todo 제목: 부녀회장이 될테야
// ! 문제: 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에
// ! 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.
// ! 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지
// ! 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 는 계약 조항을 꼭 지키고 들어와야 한다.
// ! 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
// ! 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
// * 입력: 첫 번째 줄에 Test case의 수 T가 주어진다.
// * 그리고 각각의 케이스마다 입력으로 첫 번째 줄에 정수 k, 두 번째 줄에 정수 n이 주어진다
// ? 출력: 각각의 Test case에 대해서 해당 집에 거주민 수를 출력하라.

/*
 *예제 출력
   6
   10
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => Number(v));

// 문제는 풀은 코드는 자꾸 실패로 떠서 다른 사람 코드를 적용
// 출처 : https://dpsc615.tistory.com/98

const T = input.shift();

for (let i = 0; i < T; i++) {
   const a = input.shift();
   const b = input.shift();
   const apartment = [];

   for (let i = 0; i <= a; i++) {
      apartment.push([1]);
      for (let j = 1; j < b; j++) {
         if (i === 0) {
            apartment[i].push(j + 1);
         } else {
            apartment[i].push(apartment[i][j - 1] + apartment[i - 1][j]);
         }
      }
   }

   const floor = a;
   const room = b - 1;
   console.log(apartment[floor][room]);
}



// 아래는 내가 풀은 코드
// const T = input[0];
// const inputArray = input.slice(1, input.length);

// const arrayGroup = new Array(T).fill().reduce((acc) => {
//    const sliceArray = inputArray.splice(0, T);
//    acc.push(sliceArray);
//    return acc;
// }, [])

// const conditionK = (v) => v >= 1;
// const conditionN = (v) => v <= 14;

// arrayGroup.forEach((arr) => {
//    const floor = [];
//    const [k, n] = arr;
//    if (conditionK(k) && conditionN(n)) {
//       for (let i = 0; i <= k; i += 1) {
//          floor.push([1]);
//          for (let j = 1; j <= n; j += 1) {
//             if (i === 0) {
//                floor[i].push(j + 1); 
//             } else { 
//                floor[i].push((floor[i][j - 1]) + floor[i - 1][j])
//             } 
//          }
//       }
//    }
//    console.log(floor[k][n - 1]);
// });