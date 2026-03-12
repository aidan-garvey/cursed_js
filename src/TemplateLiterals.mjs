function myTemplate(strs, ...args) {
  console.log(strs) // [ 'Hello', 'template', 'literals', '!' ]
  console.log(args) // [ 123456, false, {} ]
}

myTemplate`Hello${123456}template${false}literals${{}}!`

// From our earlier example of using `arguments`
function concat() {
  if (arguments.length === 0)
    return "";
  let result = String(arguments[0]);
  for (let i = 1; i < arguments.length; i++) {
    result += ", " + arguments[i];
  }
  return result;
}

console.log(concat`1${4} 2${5} 3`) // 1, 2, 3, 4, 5
