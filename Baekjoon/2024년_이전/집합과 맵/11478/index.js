/*
TODO 제목: 서로 다른 부분 문자열의 개수
! https://www.acmicpc.net/problem/11478
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const result = input.split("").reduce((acc, value, i) => {
    const count = i + 1;
    for (let i = 0; i <= input.length - count; i += 1) {
        acc.push(input.slice(i, i + count));
    }
    return acc;
}, []);

console.log(new Set(result).size);

// edge copilot 답변
// // 접미사 배열을 생성하는 함수
// function createSuffixArray(str) {
//     // 문자열의 길이
//     const n = str.length;
//     // 접미사 배열
//     const suffixArray = [];
//     // 각 접미사의 랭크를 저장할 배열
//     const rank = [];
//     // 초기 랭크는 문자의 아스키 코드 값
//     for (let i = 0; i < n; i++) {
//       rank[i] = str.charCodeAt(i);
//       suffixArray[i] = i;
//     }
//     // 접미사 배열을 정렬하기 위한 비교 함수
//     function compare(i, j, k) {
//       // 랭크가 다르면 랭크로 비교
//       if (rank[i] !== rank[j]) return rank[i] - rank[j];
//       // 랭크가 같으면 k글자 뒤의 랭크로 비교
//       const ri = i + k < n ? rank[i + k] : -1;
//       const rj = j + k < n ? rank[j + k] : -1;
//       return ri - rj;
//     }
//     // k글자를 기준으로 접미사 배열을 정렬
//     function sort(k) {
//       // 비교 함수를 사용하여 접미사 배열을 정렬
//       suffixArray.sort((i, j) => compare(i, j, k));
//       // 임시 랭크 배열
//       const temp = Array(n).fill(0);
//       // 새로운 랭크를 계산하여 임시 랭크 배열에 저장
//       temp[suffixArray[0]] = 0;
//       for (let i = 1; i < n; i++) {
//         temp[suffixArray[i]] = temp[suffixArray[i - 1]];
//         if (compare(suffixArray[i - 1], suffixArray[i], k) < 0) {
//           temp[suffixArray[i]]++;
//         }
//       }
//       // 임시 랭크 배열을 복사하여 rank 배열을 갱신
//       for (let i = 0; i < n; i++) {
//         rank[i] = temp[i];
//       }
//     }
//     // k를 1부터 2배씩 증가시키면서 정렬
//     for (let k = 1; k <= n; k *= 2) {
//       sort(k);
//     }
//     // 접미사 배열을 반환
//     return suffixArray;
//   }

//   // LCP 배열을 생성하는 함수
//   function createLCPArray(str, suffixArray) {
//     // 문자열의 길이
//     const n = str.length;
//     // LCP 배열
//     const lcpArray = [];
//     // 각 접미사의 역순 랭크를 저장할 배열
//     const rank = [];
//     // 접미사 배열을 사용하여 역순 랭크를 계산
//     for (let i = 0; i < n; i++) {
//       rank[suffixArray[i]] = i;
//     }
//     // LCP를 계산할 때 사용할 변수
//     let h = 0;
//     // 문자열의 각 접미사에 대하여
//     for (let i = 0; i < n; i++) {
//       // 랭크가 0이면 LCP는 0
//       if (rank[i] === 0) {
//         lcpArray[rank[i]] = 0;
//       } else {
//         // 이전 접미사와 비교하여 LCP를 계산
//         const j = suffixArray[rank[i] - 1];
//         if (h > 0) h--;
//         while (j + h < n && i + h < n) {
//           if (str[j + h] !== str[i + h]) break;
//           h++;
//         }
//         // LCP 값을 LCP 배열에 저장
//         lcpArray[rank[i]] = h;
//       }
//     }
//     // LCP 배열을 반환
//     return lcpArray;
//   }

//   // 부분 문자열의 개수를 구하는 함수
//   function countSubstrings(str) {
//     // 접미사 배열과 LCP 배열을 생성
//     const suffixArray = createSuffixArray(str);
//     const lcpArray = createLCPArray(str, suffixArray);
//     // 부분 문자열의 개수를 저장할 변수
//     let count = 0;
//     // 문자열의 길이
//     const n = str.length;
//     // 접미사 배열의 각 원소에 대하여
//     for (let i = 0; i < n; i++) {
//       // 접미사의 길이를 구하고, 이전 접미사와의 LCP를 빼면 새로운 부분 문자열의 개수가 나옴
//       const len = n - suffixArray[i];
//       const lcp = lcpArray[i];
//       count += len - lcp;
//     }
//     // 부분 문자열의 개수를 반환
//     return count;
//   }

//   // 입력 문자열
//   //   const input = "ababc";
//   // 부분 문자열의 개수를 구하고 출력
//   const result = countSubstrings(input);
//   console.log(result);
