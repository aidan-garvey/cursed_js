"use strict";

function howBigIsThisNumber(num) {
  switch (0) {
    case num = Number(num):
      return "Tiny";
    case --num:
      return "Small";
    case --num:
      return "Medium";
    case --num:
      return "Large";
    case Number(num === num):
      return "Not a number";
    default:
      return "Huge";
  }
}

console.log(howBigIsThisNumber(null)); // Tiny
console.log(howBigIsThisNumber("1")); // Small
console.log(howBigIsThisNumber([2])); // Medium
console.log(howBigIsThisNumber(new Date(3))); // Large
console.log(howBigIsThisNumber("Infinity")); // Huge
console.log(howBigIsThisNumber({})); // Not a number
