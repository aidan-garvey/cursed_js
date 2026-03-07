"use strict";

function concat() {
  if (arguments.length === 0)
    return "";
  let result = String(arguments[0]);
  for (let i = 1; i < arguments.length; i++) {
    result += ", " + arguments[i];
  }
  return result;
}

function countTruthy() {
  let count = 0;
  for (const arg of arguments)
    if (arg)
      ++count;
  return count;
}

console.log(concat()); // (prints an empty line)
console.log(concat(undefined)); // undefined
console.log(concat("Hello", "world!")); // Hello, world!
console.log(concat(1, 2, 3, 4)); // 1, 2, 3, 4

console.log(countTruthy()); // 0
console.log(countTruthy(true, false, 0, 1, null, undefined, "", " ")); // 3
