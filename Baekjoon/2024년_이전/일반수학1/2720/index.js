/*
TODO 제목: 세탁소 사장 동혁
! https://www.acmicpc.net/problem/2720
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

(() => {
    const count = Number(input.splice(0, 1));
    const array = input.map((item) => Number(item));
    const changeList = [25, 10, 5, 1];

    array.map((money) => {
        let change = [0, 0, 0, 0];
        let remainder = money;

        changeList.forEach((cent, i) => {
            change[i] = Math.floor(remainder / cent);
            remainder %= cent;
        });
        console.log(change.join(" "));
    });
})();
