/*
TODO 제목: 삼각형과 세 변
! https://www.acmicpc.net/problem/5073

세 각의 크기가 모두 60이면, Equilateral
세 각의 합이 180이고, 두 각이 같은 경우에는 Isosceles
세 각의 합이 180이고, 같은 각이 없는 경우에는 Scalene
세 각의 합이 180이 아닌 경우에는 Error
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) =>
        item
            // .replace(/\r/g, "")
            .split(" ")
            .map((num) => Number(num))
            .sort((a, b) => a - b)
    )
    .slice(0, -1);

input.forEach((array) => {
    const [x, y, z] = array;
    let typeOfValue = {};
    for (let i = 0; i < array.length; i += 1) {
        typeOfValue[array[i]] = (typeOfValue[array[i]] || 0) + 1;
    }
    const convertTypeOfValue = Object.keys(typeOfValue);

    if (z >= x + y) {
        console.log("Invalid");
    } else if (convertTypeOfValue.length === 1) {
        console.log("Equilateral");
    } else if (convertTypeOfValue.length === 2) {
        console.log("Isosceles");
    } else if (convertTypeOfValue.length === 3) {
        console.log("Scalene");
    }
});
