"use strict";
// //
// let arr = [];
// for (let i = 0; i <= 5; i++) {
//   arr[i] = i + 5;
// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }
// console.log(result);

// let data = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] == "number") {
//     data[i] *= 2;
//   } else if (typeof data[i] == "string") {
//     data[i] = data[i] + " - done";
//   }
// }
// console.log(data);

// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (let i = data.length; i > 0; i--) {
//   result[data.length - i] = data[i - 1];
// }
// console.log(result);
const length = 7;
let result = "";
for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}
console.log(result);
