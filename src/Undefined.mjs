"use strict";

function foo() {
  const undefined = 0;
  console.log(typeof undefined); // number
  console.log(typeof globalThis.undefined); // undefined
}

foo();

console.log("undefined" in globalThis); // true
console.log(globalThis.undefined === undefined); // true
