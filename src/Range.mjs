"use strict";

class Range {
  #start = 0;
  #end = 0;
  constructor(start = 0, end = 0) { this.end = end; this.start = start; }

  set start(newStart) {
    this.#start = newStart;
    this.#end = Math.max(newStart, this.#end);
  }
  set end(newEnd) {
    this.#end = newEnd;
    this.#start = Math.min(newEnd, this.#start);
  }

  get start() { return this.#start; }
  get end() { return this.#end; }
}

const range = new Range(5, 10);
range.end = 4;
console.log(range.start); // 4

const overload = new Range(2);
console.log(overload.start); // 2
console.log(overload.end); // 2
