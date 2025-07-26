"use strict";

class Example {
  #privateField;

  #privateMethod() {
    this.#privateField = 0;
  }

  constructor() {
    this.#privateMethod();
    console.log('#privateField is', this.#privateField);
  }
}

const example = new Example();
// Syntax error, script will not execute if un-commented
// console.log(example.#privateField);
// console.log(example.#privateMethod);
