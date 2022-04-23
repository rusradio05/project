// program to check if a number is a float or integer value

// function checkNumber(x) {
//   // check if the passed value is a number
//   if (typeof x == "number" && !isNaN(x)) {
//     // check if it is integer
//     if (Number.isInteger(x)) {
//       console.log(`${x} is integer.`);
//     } else {
//       console.log(`${x} is a float value.`);
//     }
//   } else {
//     console.log(`${x} is not a number`);
//   }
// }

// checkNumber("hello");
// checkNumber(44);
// checkNumber(3.4);
// checkNumber(-3.4);
// checkNumber(NaN);

// Решение задачи 7.1

function calculateVolumeAndArea(a) {
  if (Number.isInteger(a) && a > 0) {
    console.log(
      `=> 'Объем куба: ${a * a * a}, площадь всей поверхности: ${6 * a * a}'`
    );
  } else {
    console.log(`=> 'При вычислении произошла ошибка'`);
  }
}
calculateVolumeAndArea(undefined);
// Решение задачи 7.2

function getCoupeNumber(a) {
  if (Number.isInteger(a) && a >= 0) {
    if (a > 36 || a == 0) {
      console.log("Таких мест в вагоне не существует");
    } else if (a % 4 > 0) {
      console.log(parseInt(a / 4) + 1);
    } else if (a % 4 == 0) {
      console.log(a / 4);
    }
  } else {
    console.log("Ошибка. Проверьте правильность введенного номера места");
  }
}
getCoupeNumber(0);

// Решение задачи 8.1

function getTimeFromMinutes(t) {
  if (Number.isInteger(t) && t >= 0) {
    let h = Math.floor(t / 60);
    let m = t - Math.floor(t / 60) * 60;
    if (h < 1 || h >= 5) {
      return `Это ${h} часов и ${m} минут`;
    } else if (h < 2) {
      return `Это ${h} час и ${m} минут`;
    } else if (h < 5) {
      return `Это ${h} часа и ${m} минут`;
    }
  } else {
    return "Ошибка, проверьте данные";
  }
}
getTimeFromMinutes(301);

// Решение задачи 8.2

function findMaxNumber(a, b, c, d) {
  if (
    typeof a == "number" &&
    typeof b == "number" &&
    typeof c == "number" &&
    typeof d == "number"
  ) {
    return Math.max(a, b, c, d);
  } else {
    return 0;
  }
}
findMaxNumber(0, 5, 16.6, 11);

// Решение задачи 9
function fib(a) {
  let str = "01";
  if (typeof a != "number") {
    console.log("");
  } else {
    for (let i = 3; i <= a; i++) {
      str += Number(str[i - 2]) + Number(str[i - 3]);
    }
    console.log(str);
  }
}
fib(8);

function fib(a) {
  let arr = [0, 1];
  let str = "0 1";
  if (Number.isInteger(a) && a >= 2) {
    for (let i = 2; i < a; i++) {
      arr[i] = Number(arr[i - 2]) + Number(arr[i - 1]);
      str += " " + arr[i];
    }
    console.log(str);
  } else if (a == 1) {
    console.log("0");
  } else {
    console.log("");
  }
}
fib(7);
