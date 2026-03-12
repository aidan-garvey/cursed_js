{
  // async only has special meaning in very specific contexts, it is a keyword
  // but not a reserved word
  const async = 0;
}

{
  const async = async () => {
    // ...
  };
}

{
  async function async() {
    // ...
  }
}

// MDN states that 'await' is not a reserved word in non-async functions, but
// this example only executes in Chrome and Firefox, not NodeJS!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
/*
class async {
  // A synchronous getter called "async"
  get async() {
    const await = 0
  }
}
*/
