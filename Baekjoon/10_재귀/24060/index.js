// todo 제목: 알고리즘 수업 - 병합 정렬 1

// ! 문제: 오늘도 서준이는 병합 정렬 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
// ! N개의 서로 다른 양의 정수가 저장된 배열 A가 있다. 병합 정렬로 배열 A를 오름차순 정렬할 경우 배열 A에 K 번째 저장되는 수를 구해서 우리 서준이를 도와주자.
// ! 크기가 N인 배열에 대한 병합 정렬 의사 코드는 다음과 같다.

/*
    merge_sort(A[p..r]) { # A[p..r]을 오름차순 정렬한다.
        if (p < r) then {
            q <- ⌊(p + r) / 2⌋;       # q는 p, r의 중간 지점
            merge_sort(A, p, q);      # 전반부 정렬
            merge_sort(A, q + 1, r);  # 후반부 정렬
            merge(A, p, q, r);        # 병합
        }
    }

    # A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
    # A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
    merge(A[], p, q, r) {
        i <- p; j <- q + 1; t <- 1;
        while (i ≤ q and j ≤ r) {
            if (A[i] ≤ A[j])
            then tmp[t++] <- A[i++]; # tmp[t] <- A[i]; t++; i++;
            else tmp[t++] <- A[j++]; # tmp[t] <- A[j]; t++; j++;
        }
        while (i ≤ q)  # 왼쪽 배열 부분이 남은 경우
            tmp[t++] <- A[i++];
        while (j ≤ r)  # 오른쪽 배열 부분이 남은 경우
            tmp[t++] <- A[j++];
        i <- p; t <- 1;
        while (i ≤ r)  # 결과를 A[p..r]에 저장
            A[i++] <- tmp[t++]; 
    }

*/

// * 입력: 첫째 줄에 배열 A의 크기 N(5 ≤ N ≤ 500,000), 저장 횟수 K(1 ≤ K ≤ 108)가 주어진다.
// * 다음 줄에 서로 다른 배열 A의 원소 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 109)
// ? 출력: 배열 A에 K 번째 저장 되는 수를 출력한다. 저장 횟수가 K 보다 작으면 -1을 출력한다.

/*
    *예제 입력
    5 7
    4 5 1 3 2
*/

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
    .map((v) => v.trim().split(" "));

const [[N, num], arr] = input;
const array = arr.map((v) => Number(v));

let count = 0;
let target;

const merge = (left, right) => {
    const mergeArray = [];
    while (left.length && right.length) {
        count += 1;
        if (left[0] >= right[0]) {
            target = right.shift();
            mergeArray.push(target);
        } else {
            target = left.shift();
            mergeArray.push(target);
        }
        console.log({ target });
    }
    return [...mergeArray, ...left, ...right];
};

const merge_sort = (array) => {
    if (array.length <= 1) return array;
    const center_digit = Math.ceil(array.length / 2);
    const left = array.slice(0, center_digit);
    const right = array.slice(center_digit);
    return merge(merge_sort(left), merge_sort(right));
};

console.log(merge_sort(array));
console.log({ count, target });
