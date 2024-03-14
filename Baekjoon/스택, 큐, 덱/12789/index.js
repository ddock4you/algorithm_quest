/*
TODO 제목: 도키도키 간식드리미
! https://www.acmicpc.net/problem/12789
*/
// console.time();
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(`\n`)[1];
const numbers = input.split(" ").map(n => +n);

const confirmTickets = (numbers) => {
  const stack = [];
  let current = 1;
  numbers.forEach( ticket => { 
    if (ticket === current) {
      current += 1;
    } else {
      stack.push(ticket);
    }

    while (stack.length > 0 && stack[stack.length - 1] === current) {
      current += 1;
      stack.pop();
  }
  })
  return stack.length === 0 ? 'Nice' : 'Sad';
}

console.log(confirmTickets(numbers));


// Nice, Sad
// console.timeEnd();
