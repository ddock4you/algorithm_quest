/*
TODO 제목: 알고리즘 수업 - 병합 정렬 1
! https://www.acmicpc.net/problem/24060
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let count = 0;
let result = -1;
// 4 5 1 3 2
function merge_sort(arr, p, r) {
  console.log(`merge_sort 호출: p=${p}, r=${r}`);
  if (p < r && count < K) {
    let q = Math.floor((p + r) / 2);
    merge_sort(arr, p, q);
    merge_sort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  console.log(`merge 호출: p=${p}, q=${q}, r=${r}`);
  let i = p;
  let j = q + 1;
  let tmp = [];

  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      console.log(`tmp에 push (arr[i]): ${arr[i]}`);
      tmp.push(arr[i++]);
    } else {
      console.log(`tmp에 push (arr[j]): ${arr[j]}`);
      tmp.push(arr[j++]);
    }
  }
  while (i <= q) {
    console.log(`tmp에 push (arr[i] 남은 것): ${arr[i]}`);
    tmp.push(arr[i++]);
  }
  while (j <= r) {
    console.log(`tmp에 push (arr[j] 남은 것): ${arr[j]}`);
    tmp.push(arr[j++]);
  }

  i = p;
  let t = 0;
  while (i <= r) {
    if (count < K) {
      arr[i] = tmp[t];
      count++;
      console.log(`arr[${i}]에 저장: ${arr[i]}, 현재 count: ${count}, K: ${K}`);
      if (count === K) {
        result = arr[i];
        console.log(`K번째 원소 발견: ${result}`);
      }
    }
    i++;
    t++;
  }
}

merge_sort(A, 0, N - 1);
console.log("최종 결과:", result);


