"use strict";

function myNumber(value) {
  if (arguments.length === 0)
    return 0;
  else if (value === undefined)
    return NaN;
  else if (value === null)
    return 0;
  // ...
}

console.log(myNumber()); // 0
console.log(myNumber(undefined)); // NaN
console.log(myNumber(null)); // 0
