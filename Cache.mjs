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
    for (let i = 2; i < 100_000_000; i++) {
      result.push(result[i - 2] + result[i - 1])
    }
    return Cache.#expensiveResult = result;
  }
}

let start = Date.now();
const resource = Cache.expensiveResult;
console.log(`Got ${resource.length} numbers in ${Date.now() - start}ms`);

start = Date.now();
const cached = Cache.expensiveResult;
console.log(`Got ${cached.length} numbers in ${Date.now() - start}ms`);

// It should be returning the cached response, not a new object.
console.assert(resource === cached);
