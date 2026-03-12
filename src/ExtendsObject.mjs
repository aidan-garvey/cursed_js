class Basic {
  constructor() {
    // not allowed to call super()
  }
}

console.log('Basic')

console.log(Object.prototype === Object.getPrototypeOf(Basic.prototype)) // true
console.log('hasOwn' in Basic) // false

class ExtendsObject extends Object {
  constructor(value) {
    // must call super()
    super(value)
  }
}

console.log('ExtendsObject')

console.log(Object.prototype === Object.getPrototypeOf(Basic.prototype)) // true
console.log('hasOwn' in ExtendsObject) // true

console.log(ExtendsObject.hasOwn(String.prototype, 'split')) // true

console.log('Wrappers')

// Object constructor will return wrapper objects if you pass it a primitive...
const wrapper = new Object(1)
console.log(wrapper) // [Number: 1]
console.log(wrapper instanceof Number) // true

// ...but not if it's called through super()
const extendsObject = new ExtendsObject(1)
console.log(extendsObject) // ExtendsObject {}
console.log(extendsObject instanceof Number) // false
