"use strict";

function myNumber(...args) {
  if (args.length === 0)
    return 0;
  return args[0];
}

console.log(myNumber()); // 0
console.log(myNumber(undefined)); // undefined

console.log("myNumber.length:", myNumber.length); // 0
console.log("Number.length:", Number.length); // 1
