"use strict";

class Counter {
  #counter = 0;

  get value() {
    return ++this.#counter;
  }
}

const counter = new Counter();
console.log(counter.value); // 1
console.log(counter.value); // 2
try {
  // Throws in strict mode, otherwise it has no effect.
  counter.value = 1;
}
catch (err) {
  console.error(err.message);
}
console.log(counter.value); // 3
