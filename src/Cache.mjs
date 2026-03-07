/**
 * Demonstrates using a getter to lazily load and cache some data transparently.
 */

"use strict";

class Cache {
  static #expensiveResult = null;

  static get expensiveResult() {
    if (Cache.#expensiveResult !== null)
      return Cache.#expensiveResult;

    // Run an expensive computation - find 100,000,000 Fibonacci numbers
    const result = [0, 1];
    while (result.length < 100_000_000) {
      result.push(result.at(-1) + result.at(-2));
    }
    return Cache.#expensiveResult = result;
  }
}

let start = Date.now();
const resource = Cache.expensiveResult;
console.log(`Got ${resource.length} numbers in ${Date.now() - start}ms`);
// example output: Got 100000000 numbers in 2574ms

start = Date.now();
const cached = Cache.expensiveResult;
console.log(`Got ${cached.length} numbers in ${Date.now() - start}ms`);
// expected output: Got 100000000 numbers in 0ms

// It should be returning the cached response, not a new object.
console.assert(resource === cached);
