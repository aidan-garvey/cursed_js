"use strict";

console.log((function(a){}).length); // 1
console.log((function(a, b){}).length); // 2
console.log(((a, b) => {}).length); // 2

// Rest parameters don't count:

console.log((function(a, ...args){}).length); // 1
console.log(((...args) => {}).length); // 0

console.log("Number.length:", Number.length); // 1
