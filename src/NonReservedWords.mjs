{
  // async only has special meaning in very specific contexts, it is a keyword
  // but not a reserved word
  const async = 0
}

{
  const async = async () => {
    // ...
  }
}

{
  async function async() {
    // ...
  }
}

class async {
  // A synchronous getter called "async"
  get async() {
    // In non-async methods, "await" is not a reserved word
    const await = 0
  }
}
