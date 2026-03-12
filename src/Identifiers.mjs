"use strict";

console.log(typeof undeclaredVariable); // undefined
try {
  console.log(undeclaredVariable);
}
catch (err) {
  console.log(err instanceof ReferenceError); // true
  console.error(err.message); // undeclaredVariable is not defined
}

const variabl\u{65} = 1;
console.log(variable); // 1

const \u0068\u0065\u006C\u006C\u006F = 2;
console.log(hello); // 2
