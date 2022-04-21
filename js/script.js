"use strict";

// let num = 20;
// function myFirstMessage(text) {
//   console.log(text + "\n" + text);
//   console.log(num);
// }
// myFirstMessage("Hello, world!");

// console.log(calc(34, 4));

// function calc(a, b) {
//   return a + b;
//   console.log(a + b);
// }
// console.log(calc(3, 4));
// console.log(calc(5, 7));
// console.log(calc(8, 12));

// function ret() {
//   let num = 50;
//   // здесь код по обработке переменной num
//   return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

// function foo (){
// // code
// };
// foo();
// function foo() {
//   console.log("Hello");
// }
// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//   return amount * curr;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// promotion(convert(1000, usdCurr));

// создаем функцию, которая конвертирует сумму curr по определенному курсу валют $Curr
// затем создаем функцию, которая продает валюту со скидкой 10%

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  return amount * curr;
}

function promotion(result) {
  console.log(result * discount);
}

const resUsd = convert(1000, usdCurr);
const resEur = convert(1000, eurCurr);

console.log(resUsd);
console.log(resEur);
promotion(resUsd);
promotion(resEur);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
  }
  console.log("Done!");
}
test();

function sayHello(userName) {
  // return "Привет, " + userName + "!";
  return `Привет, ${userName}!`;
}
console.log(sayHello("Gena"));

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
  // let mass = [];
  // mass[0] = num - 1;
  // mass[1] = num;
  // mass[2] = num + 1;
  // return mass;
}
console.log(returnNeighboringNumbers(10));

function getMathResult(num, count) {
  let str = "";
  if (typeof count === "string" || count <= 0) {
    str = num;
  }
  for (let i = 1; i <= count; i++) {
    if (i < count) {
      str += num * i + "---";
    } else if (i == count) {
      str += num * i;
    }
  }
  return str;
}
console.log(getMathResult(2, 5));

function getMathResult(num, count) {
  if (typeof count !== "number" || count <= 0) {
    return num;
  }
  let str = "";
  for (let i = 1; i <= count; i++) {
    if (i == count) {
      str += `${num * i}`;
    } else {
      str += `${i * num}---`;
    }
  }
  return str;
}
console.log(getMathResult(5, 10));
