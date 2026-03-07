"use strict";

class Example {
  #truncated = "";

  set name(newName) {
    this.#truncated = newName.slice(0, 3);
  }

  get name() {
    return this.#truncated;
  }
}

const example = new Example();
example.name = "Long Name";
console.log(example.name); // "Lon"
